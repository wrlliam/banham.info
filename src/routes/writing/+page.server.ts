import { slugFromPath } from '$lib/utils';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url }) => {
	const posts = import.meta.glob(`/src/writing/**/*.{md,svx,svelte.md}`);

	const postsPromise = Object.entries(posts).map(([path, res]) => {
		return res().then(
			(p) =>
				({
					slug: `/writing/${slugFromPath(path)}`,
					...(p as unknown as App.MdsvexFile).metadata
				}) as App.BlogPost
		);
	});

	const p = await Promise.all(postsPromise);
	const published = p
		.filter((p) => p.visable)
		.sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1));

	return {
		posts: published
	};
};
