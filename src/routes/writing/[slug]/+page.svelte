<script lang="ts">
	import { LoaderIcon } from 'lucide-svelte';

	let { data } = $props();
	type C = $$Generic<typeof SvelteComponentTyped<any, any, any>>;
	let component = data.component as unknown as C;
</script>

<div class="flex w-[500px] flex-col gap-2">
	<p class="text-sm opacity-80">{data.frontmatter.date}</p>
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
	<h1 class="mt-[-0.8rem] cursor-pointer" onclick={() => window.location.href = "/"}>{data.frontmatter.name}</h1>
	<div class="flex h-[1px] w-full bg-black/30"></div>

	<!-- svelte-ignore svelte_component_deprecated -->
	<svelte:component this={component} />
</div>
