import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		screens: {
			"mobile": "460px",
		},
		extend: {}
	},

	plugins: []
} satisfies Config;
