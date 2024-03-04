import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/theme/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dusky-alt": "rgba(11,10,16,0.5)",
        midnight: "#343436",
        noon: "#efeef2",
        "neon-blue": "#4353ff",
        "light-green": "#7cea9cff",
        "french-rose": "#f75590ff",
        "space-cadet": "#2e294eff",
        "dark-orange": "#f58f29ff",
        "raisin-black": "#1c1e23",
        "front-white": "#fbfbfd",
        "lilla-uk": "#7068fa",
        "gray-cool": "#2a3036",
        "gray-chacra": "#718096",
        "sun-beam": "#d69e2e",
        'pdark':'#0b0a10',
        'plight':'#F3F1FF',
        'sblue': '#3F3AE7',
        'sgreen': '#C8EF52'
      },
      animation: {
				'infinite-scroll': 'infinite-scroll 25s linear infinite',
			},
			keyframes: {
				'infinite-scroll': {
					from: { transform: 'translateX(0)' },
					to: { transform: 'translateX(-100%)' },
				},
			},
    },
  },
  plugins: [],
};
export default config;
