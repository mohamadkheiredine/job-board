import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background-image': "url('/background.png')",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        loading: {
          '0%': { color: '#e9e9e9' },
          '50%': { color: '#b89b84' },
          '100%': { color: '#e9e9e9' },
        },
      },
      animation: {
        loading: 'loading 1.2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;

