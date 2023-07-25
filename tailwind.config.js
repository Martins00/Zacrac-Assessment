import theme from './config/theme'

module.exports = {
  mode: 'jit',
  content: [
    './components/**/*.{js,vue,ts}',
    './pages/**/*.vue',
    './layouts/**/*.vue',
    './app.vue',
  ],
  theme: {
    colors: theme.colors,
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.25rem',
        lg: '2rem',
        xl: '3rem',
        '2xl': '4rem',
      },
    },
    extend: {
      fontFamily: {
        'sans': theme.fonts.sans.split(/ ?, ?/),
      },
      boxShadow: {
        base: '0px 2px 4px 0px #8F9FAB1A',
      },
    },
  },
  plugins: [
    require('@headlessui/tailwindcss')({
      prefix: 'ui'
    })
  ],
}
