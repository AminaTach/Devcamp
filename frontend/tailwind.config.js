import flowbite from 'flowbite-react/tailwind';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
      'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        text_side: "#6B7280", 
        bg:"#F9FAFB",
        blue:"#112564",
        h1:"#111827",
        h2:"#6B7280"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

