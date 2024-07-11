import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        customPrimary: '#05664F',
        customSecondary: '#14EDB9',
        customText: '#FFFFFF',
      },
    },
  },
  plugins: [],
};
export default config;
