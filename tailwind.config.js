module.exports = {
  variants: {
    extend: {
      width: ['group-hover'],
      height: ['group-hover'],
      padding: ['group-hover'],
      fontSize: ['group-hover'],
      position: ['group-hover'],
    },
  },
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        '200p': '200%',
        '600p': '600%',
        '400px': '400px',
      },
    },
    fontFamily: {
      text1: ['Roboto', 'sans-serif'],
      robotoCon: ['Roboto Condensed', 'sans-serif'],
      robotoFlex: ['Roboto Flex', 'sans-serif'],
      poppinsBlack: ['Poppins', 'sans-serif'],
      alSans: ['Alumni Sans', 'sans-serif'],
      nunito:['Nunito', 'sans-serif'],
      nunitoSans:['Nunito Sans', 'sans-serif']
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      main: '#F8F8F8',
      salem: '#1e824c',
      nicegreen: '#2AAA8A',
      heroMark: '#FFE794;',
      buttonGreen: '#9ECE6A',
      yellow:'#FFE794'
    }),
    textColor: theme => ({
      ...theme('colors'),
      main: '#EDEBEB',
      salem: '#1e824c',
      redText: '#33673B',
      subText: '#6B7280',
      umaiBasicTitleText: '#374151',
      lightGreen:'#EE6123'
    }),
    borderColor: theme => ({
      ...theme('colors'),
      DEFAULT: theme('colors.gray.300', 'currentColor'),
      salem: '#1e824c',
    }),
  },
  plugins: [require('tailwindcss'), require('autoprefixer')],
};
