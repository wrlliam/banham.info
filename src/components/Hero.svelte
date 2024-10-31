<script>
	import HeroCategory from './embeded/HeroCategory.svelte';
	import { Motion } from 'svelte-motion';
	let year = new Date().getFullYear();
	function getAge() {
		return new Date(new Date().getTime() - new Date('10-15-2007').getTime()).getFullYear() - 1970;
	}
</script>

<div class="mb-[15rem] flex w-[500px] flex-col gap-1 overflow-y-scroll scroll-smooth scroll-hidden">
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
			ease: 'easeInOut'
		}}
		let:motion
	>
		<h1 use:motion class="font-bold">
			William Banham <span class="font-normal opacity-65">[bˈanəm]</span>
		</h1>
	</Motion>
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
		<p use:motion class="mb-4 text-sm opacity-85">
			A {getAge()} yr old self-taught full stack developer based out of England, UK, crafting modern
			solutions and consumer-ready products since 2018. Working with a wide variety of clients, delivering
			each project to perfection.
		</p>
	</Motion>

	<HeroCategory
		hoverImg
		title="Previous Work"
		items={[
			{
				name: 'Audibly',
				date: '2024-2024',
				imgURL: '/products/audibly.png',
				about:
					'Turn PDFS/Ebooks/Photos into downloadable audio books. Built using Next.JS, TailwindCSS, Python, Bun & Elysia.'
			},
			{
				name: 'Intergral',
				date: `2024-2024`,
				imgURL: '/products/intergral.png',
				about:
					'Create photo collections throughout your trips, and share them in a easily followable format. Handcrafted using Next.JS, TailwindCSS, DrizzleORM, Postgresql, Bun & Elysia'
			},
			{
				name: 'Freelance',
				date: '2018-2020',
				about:
					'Worked with over a dozen clients, crafting products from community management apps to custom built algorithms for online gaming. Using tools such as Typescript, Databases (SQL + MongoDB)'
			}
		]}
	/>
	<HeroCategory
		title="Certifications & Skills"
		items={[
			{
				name: 'Full-Stack Development',
				date: `2020-${year}`,
				about:
					'This includes a wide range of web frameworks, styling libraries, languages for both front/backend and database knowledge including SQL, Postgres, MongoDB etc.'
			},
			{
				name: 'Back-End Development',
				date: `2018-${year}`,
				about:
					'Started with building APIs + Social media applications (e.g Discord Bots) using javascript, eventually expanding to other languages such as Golang, Rust and python to build a range of applications.'
			},
			{
				name: 'Javascript Essentials 1-2 (Cisco)',
				date: '2024',
				award: true
			},
			{
				name: 'Networking + Basic Cyber Security',
				date: '2023'
			}
		]}
	/>
	<HeroCategory
		title="Education"
		items={[
			{
				name: 'Burton & South Derbyshire College',
				date: '2024-2026',
				about: 'Studying Application Development - Level 3 Cambridge Technicals'
			},
			{
				name: 'The ****** Academy',
				date: '2019-2024',
				about:
					'(7) GCSEs - Maths, English, Science (Bio,Chem,Physics), Computer Science, Business, Geography'
			}
		]}
	/>
</div>
