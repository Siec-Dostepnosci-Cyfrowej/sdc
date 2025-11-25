/** @type {import('tailwindcss').Config} */
module.exports = {
  // Tailwind ma widzieć TYLKO pliki generatorów
  content: [
    "./src/pages/generator-*/**/*.{js,jsx,ts,tsx}",
    "./src/pages/generator-*.{js,jsx,ts,tsx}",
    "./src/pages/tw/tw-tailwind.css",

    // shadcn/ui — opcjonalne
    "./node_modules/@shadcn/ui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  corePlugins: {
    preflight: false, 
  },
  plugins: [],
};
