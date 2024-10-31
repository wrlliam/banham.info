<script lang="ts">
	let count = $state(0);
</script>

<button onclick={() => count++} class="flex items-center cursor-pointer rounded-md border border-black/55 p-3 font-bold">
	{#if count <= 0}
		Click Me
	{:else}
		You've clicked me {count} times
	{/if}
</button>
