import { slugFromPath } from '$lib/utils';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const posts = import.meta.glob(`/src/writing/**/*.{md,svx,svelte.md}`);

	let match: { path?: string; resolver?: App.MdsvexResolver } = {};
	for (const [path, res] of Object.entries(posts)) {
		if (slugFromPath(path) === params.slug) {
			match = { path, resolver: res as unknown as App.MdsvexResolver };
			break;
		}
	}
    const post = await match?.resolver?.();
    if(!post || !post.metadata.visable) {
        throw error(404)
    }

    return {
        component: post.default,
        frontmatter: post.metadata
    }
};
