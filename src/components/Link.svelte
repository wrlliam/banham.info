<script lang="ts">
	import type { Snippet } from 'svelte';
	import { ArrowUpRight } from 'lucide-svelte';
	interface Props {
		href: string;
		children: Snippet;
	}

	let { href, children }: Props = $props();
</script>

<a {href} class="flex w-fit items-center gap-1 group" >
	{@render children()}
	<ArrowUpRight class="smooth_transition ml-0 group-hover:ml-1 mb-1 h-[15px] w-[15px]" />
</a>
