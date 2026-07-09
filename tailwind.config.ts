import type { Config } from "tailwindcss";

// The site uses a hand-written design system in app/globals.css.
// Tailwind is kept only for its preflight reset (@tailwind base);
// no utility classes are used, so the theme stays empty on purpose.
const config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;

export default config;
