module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        pubNavy: '#3d4253',
        textPrimary: '#f6e05e',
        textSecondary: '#88a5b8',
        pubBg: '#fbfae8'
      },
      fontFamily:{
        pub :['Tinos']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
