module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx,vue}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '3/10': '42%',
        '7/10': '58%',
      },
      backgroundColor: {
        'custom-gray': '#EDEDED',
      },
      textColor: {
        'custom-white': '#F7F7F7',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
