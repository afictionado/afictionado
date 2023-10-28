const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import("tailwindcss").Config} */
export default {
	content: ["./src/**/*"],
	theme: {
		fontFamily: {
			sans: ["Signika Negative", ...defaultTheme.fontFamily.sans],
			serif: [...defaultTheme.fontFamily.serif],
			mono: [...defaultTheme.fontFamily.mono]
		},
		extend: {
			colors: {
				linen: {
					100: "#fdfbf8",
					200: "#faf6f1",
					300: "#f8f2ea",
					400: "#f5ede3",
					500: "#f3e9dc",
					600: "#c2bab0",
					700: "#928c84",
					800: "#615d58",
					900: "#312f2c"
				},
				caramel: {
					100: "#f2e7dc",
					200: "#e6ceba",
					300: "#d9b697",
					400: "#cd9d75",
					500: "#c08552",
					600: "#9a6a42",
					700: "#735031",
					800: "#4d3521",
					900: "#261b10"
				},
				"caput-mortuum": {
					100: "#dfd6d3",
					200: "#bfaca7",
					300: "#9e837b",
					400: "#7e594f",
					500: "#5e3023",
					600: "#4b261c",
					700: "#381d15",
					800: "#26130e",
					900: "#130a07"
				},
				"raw-umber": {
					100: "#e7ddd7",
					200: "#d0bcaf",
					300: "#b89a87",
					400: "#a1795f",
					500: "#895737",
					600: "#6e462c",
					700: "#523421",
					800: "#372316",
					900: "#1b110b"
				},
				"desert-sand": {
					100: "#f8f0eb",
					200: "#f0e1d8",
					300: "#e9d2c4",
					400: "#e1c3b1",
					500: "#dab49d",
					600: "#ae907e",
					700: "#836c5e",
					800: "#57483f",
					900: "#2c241f"
				},
				"light-beige": {
					100: "#faf6f1",
					200: "#f5ede2",
					300: "#f0e4d4",
					400: "#ebdbc5",
					500: "#e6d2b7",
					600: "#b8a892",
					700: "#8a7e6e",
					800: "#5c5449",
					900: "#2e2a25"
				}
			}
		}
	},
	plugins: []
};
