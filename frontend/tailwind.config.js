/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Vite 프로젝트에서 Tailwind가 적용될 파일 지정
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
