/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  prefix: 't-',
  theme: {
    fontFamily: {
      display: ['DM Sans', 'Poppins', 'sans-serif'],
      body: ['DM Sans', 'Graphik', 'sans-serif'],
    },
    fontSize: {
      xs: '.375rem',
      sm: '.625rem',
      '2sm': '.75rem',
      base: '.8125rem',
      'base-x': '.875rem',
      md: '1rem',
      lg: '1.0625rem',
      '2lg': '1.125rem',
      xl: '1.375rem',
      xxl: '1.5rem',
      '2xl': '1.8125rem',
      '3xl': '2.3125rem',
      '4xl': '3rem',
    },
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      'md-x': '1024px',
      // => @media (min-width: 1024px) { ... }

      lg: '1150px',
      // => @media (min-width: 1024px) { ... }

      xl: '1700px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors: {
        'gray-one': '#828282',
        'gray-two': '#797979',
      },
    },
  },
  variants: {
    extend: {
      // ...
      visibility: ['hover', 'focus'],
    },
  },
  plugins: [],
  // purge: {
  //   // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
  //   enabled: process.env.NODE_ENV === 'production',
  //   content: [
  //     'components/**/*.vue',
  //     'layouts/**/*.vue',
  //     'pages/**/*.vue',
  //     'plugins/**/*.js',
  //     'nuxt.config.js'
  //   ]
  // }
};
