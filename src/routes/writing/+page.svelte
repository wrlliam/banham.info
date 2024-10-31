<script lang="ts">
	import { Motion } from 'svelte-motion';
	import type { PageData } from '../$types';
	// let delay = $state(true);

	// $effect(() => {
	// 	let time = setTimeout(() => {
	// 		delay = false;
	// 	}, 1000);

	// 	return () => clearTimeout(time);
	// });

	export let data: {
		posts: App.BlogPost[];
	};
</script>

<div class={`flex w-full max-w-xl flex-col gap-1 `}>
	{#each data.posts as post}
		<Motion
			animate={{
				opacity: 1,
				y: 0
			}}
			initial={{
				opacity: 0,
				y: 20
			}}
			transition={{
				duration: 0.53,
				delay: 0.2,
				ease: 'easeInOut'
			}}
			let:motion
		>
			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<div
				use:motion
				onclick={() => (window.location.href = post.slug)}
				class="flex w-full cursor-pointer items-center justify-between"
			>
				<h1>{post.name}</h1>
				<p class="opacity-55">{post.date}</p>
			</div>
		</Motion>
	{/each}
</div>
