<script lang="ts">
	import '../../app.css';
	import Footer from '../../components/Footer/Footer.svelte';
	let { children } = $props();
</script>

<div class="flex max-w-[500px] px-3 mx-auto mt-[15rem]">
	{@render children()}
</div>

<Footer/>