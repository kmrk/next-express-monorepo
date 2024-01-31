module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}', '../../packages/react/**/*.{js,ts,jsx,tsx}', '../../packages/next/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        highlight: '#f05152',
        // highlight:"#f2655e",
        darkbg: '#252525',
        darkbg1: '#232323',
        darkbg2: '#2f2f2f',
      },
    },
  },
  plugins: [],
};
