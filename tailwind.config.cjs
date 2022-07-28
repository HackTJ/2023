const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		// use https://huey.design/ to convert a single color to a color palette
		// (https://github.com/sparkpunk/huey/blob/bd7ce66edfa312924b05968b0657afb1f144a3a5/src/scripts/palette.js#L41-L73)
		extend: {
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				theme: {
					50: '#fee2a1',
					100: '#fed049',
					200: '#d5af3d',
					300: '#bb9a36',
					400: '#997e2c',
					500: '#806925',
					600: '#6c591f',
					700: '#4c3f16',
					800: '#362c10',
					900: '#261f0b'
				},
				strawberry: {
					// '#FB6376',
					50: '#fddddf',
					100: '#fdbac0',
					200: '#fc959f',
					300: '#fb6a7a',
					400: '#da5666',
					500: '#b44754',
					600: '#903943',
					700: '#6f2c34',
					800: '#4c1e23',
					900: '#2a1114'
				},
				pluot: {
					// '#FE5F55',
					50: '#fedddc',
					100: '#febab7',
					200: '#fe9590',
					300: '#fe6a61',
					400: '#dc5249',
					500: '#bb463f',
					600: '#943732',
					700: '#6c2824',
					800: '#55201d',
					900: '#260e0d'
				},
				// peach: { // '#FFC857',
				//   50: "#fffaf3",
				//   100: "#fff5e7",
				//   200: "#fff0db",
				//   300: "#ffebcf",
				//   400: "#ffe6c1",
				//   500: "#ffe1b3",
				//   600: "#ffdca5",
				//   700: "#ffd695",
				//   800: "#ffd183",
				//   900: "#ffcc6f",
				// },
				white: colors.white,
				blueberry: {
					// '#AEB8FE', '#8D97DD', '#737AB0'
					50: '#e2e4f5',
					100: '#c5c9ec',
					200: '#a9afe4',
					300: '#8c95dc',
					400: '#777eba',
					500: '#626899',
					600: '#4e537a',
					700: '#3b3e5c',
					800: '#292b40',
					900: '#171925'
				},
				blackberry: {
					// '#2D2A40'
					50: '#e4e4e5',
					100: '#cbcbcd',
					200: '#b2b2b5',
					300: '#9a999e',
					400: '#828288',
					500: '#6b6a73',
					600: '#565460',
					700: '#403e4e',
					800: '#2d2a40',
					900: '#1a1825'
				},
				// black: colors.black,
				spruce: {
					// '#B8DBD9'
					50: '#d5e9e7',
					100: '#b0d2d0',
					200: '#9bb8b6',
					300: '#869f9d',
					400: '#718785',
					500: '#5d6f6e',
					600: '#4a5857',
					700: '#384342',
					800: '#272e2e',
					900: '#171b1b'
				}
			},
			fontFamily: {
				sans: ['"Red Hat Display"', ...defaultTheme.fontFamily.sans]
			}
		}
	},
	plugins: [require('tailwind-scrollbar')]
};
