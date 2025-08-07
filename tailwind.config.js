/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}', // Eğer pages dizini kullanıyorsanız
    './components/**/*.{js,ts,jsx,tsx,mdx}', // components dizini için
    './app/**/*.{js,ts,jsx,tsx,mdx}', // app dizini için (App Router)
    './src/**/*.{js,ts,jsx,tsx,mdx}', // src dizini ve altındaki tüm dosyalar için
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}