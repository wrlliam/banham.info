<script lang="ts">
	import { Award } from 'lucide-svelte';
	import type { Snippet } from 'svelte';
	import { Motion } from 'svelte-motion';

	interface Props {
		title: string;
		hoverImg?: boolean;
		items: {
			name: string;
			date: string;
			award?: boolean;
			about?: string;
			children?: Snippet;
			imgURL?: string;
		}[];
	}
	let { title, items, hoverImg = false }: Props = $props();
	let imgUrl = $state('');
	let visable = $state(false);
	let large = $state(false);
	let mousePos = $state({
		x: 0,
		y: 0
	});

	function handleMouseMovement(e: MouseEvent) {
		mousePos = {
			x: e.clientX,
			y: e.clientY
		};
	}
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
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
		delay: 0.4,
		ease: 'easeInOut'
	}}
	let:motion
>
	<div use:motion class="my-[1rem] flex flex-col" onmousemove={handleMouseMovement}>
		{#if hoverImg}
			<img
				src={imgUrl}
				alt=""
				class={`smooth_transition_size fixed z-[2] rounded-md border border-white/15 drop-shadow-lg ${large ? `h-[350px] w-[500px]` : `h-[100px] w-[135px]`} ${visable ? 'opacity-100' : 'opacity-0'}`}
				style={`top: ${mousePos.y + 10}px; left: ${mousePos.x + 10}px;`}
			/>
			<div
				class={`smooth_transition_size ${visable ? 'opacity-25' : 'opacity-0'} fixed ${large ? `h-[360px] w-[510px]` : `h-[110px] w-[145px]`} rounded-md border border-black/15 bg-black`}
				style={`top: ${mousePos.y + 5}px; left: ${mousePos.x + 5}px;`}
			></div>
		{/if}

		<h1 class="text-sm">{title}</h1>
		<div class="flex h-[1px] w-full bg-black/30"></div>
		<div class="flex flex-col gap-1">
			{#each items as item}
				<!-- svelte-ignore a11y_mouse_events_have_key_events -->
				<!-- svelte-ignore a11y_click_events_have_key_events -->
				<div
					class={`mt-2 flex flex-col ${item.imgURL ? 'cursor-pointer' : 'cursor-default'}`}
					onclick={() => {
						large = !large;
					}}
					onmouseover={() => {
						if (item.imgURL) {
							visable = true;
							imgUrl = item.imgURL;
						}
					}}
					onmouseout={() => {
						large = false;
						visable = false;
					}}
				>
					<div class="flex items-center justify-between">
						{#if item.award}
							<div class="flex items-center gap-1">
								<Award class="mb-1 h-[15px] w-[15px] font-bold text-orange-700 opacity-80" />
								<h1>{item.name}</h1>
							</div>
						{:else}
							<h1>{item.name}</h1>
						{/if}
						<p class="mt-[0.15rem] text-sm opacity-65">{item.date}</p>
					</div>
					<div>
						{#if item.children}
							{@render item.children()}
						{/if}
						{#if item.about}
							<p class="text-sm opacity-65">{item.about}</p>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	</div>
</Motion>
