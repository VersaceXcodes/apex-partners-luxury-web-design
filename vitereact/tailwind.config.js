/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			colors: {
				apex: {
					black: 'var(--apex-black)',
					white: 'var(--apex-white)',
					grey: 'var(--apex-grey)',
					border: 'var(--apex-border)',
					gold: 'var(--apex-gold)',
					surface: 'var(--surface)',
					'surface-2': 'var(--surface-2)',
					'border-hover': 'var(--border-hover)',
				}
			},
			fontFamily: {
				serif: ['Playfair Display', 'serif'],
				sans: ['Inter', 'Helvetica', 'sans-serif'],
			},
			keyframes: {
				"accordion-down": {
					from: {
						height: "0",
					},
					to: {
						height: "var(--radix-accordion-content-height)",
					},
				},
				"accordion-up": {
					from: {
						height: "var(--radix-accordion-content-height)",
					},
					to: {
						height: "0",
					},
				},
				"fade-in": {
					from: {
						opacity: "0",
						transform: "translateY(10px)",
					},
					to: {
						opacity: "1",
						transform: "translateY(0)",
					},
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"fade-in": "fade-in 0.2s ease-out",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};
