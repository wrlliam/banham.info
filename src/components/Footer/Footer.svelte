<script>
	import Link from '../Link.svelte';
</script>

<div
	class="absolute bottom-0 bg-white left-0 right-0 top-auto z-[1] flex h-[12rem] flex-col items-center justify-center border-t border-black/30 sm:px-4 px-8 py-10 sm:bottom-[-50%]"
>
	<div class="mobile:flex-row mobile flex flex-col items-end gap-3 h-full w-full mobile:items-center justify-between">
		<div class="flex flex-col w-fit">
			<h1>© 2024 William Banham<span class="hidden mobile:inline">, All Rights Reserved.</span></h1>
			<!-- WIP -->
			<p class="text-sm opacity-85 hidden mobile:flex">Made with modern technology, driving your future</p>
		</div>
		<div class="flex flex-col items-end">
			<Link href="https://www.linkedin.com/in/william-banham-3795632b7/">Linkedin</Link>
			<Link href="https://github.com/wrlliam">Github</Link>
			<Link href="mailto:will_banh@icloud.com">Email</Link>
			<Link href="/writing">Writing</Link>
		</div>
	</div>
</div>
