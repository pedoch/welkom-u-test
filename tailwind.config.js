module.exports = {
  purge: ['./components/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        smallLaptop: { max: '1248px' },
        // => @media (max-width: 1248px) { ... }

        verySmallLaptop: { max: '1024px' },
        // => @media (max-width: 1024px) { ... }

        tablet: { max: '800px' },
        // => @media (max-width: 800px) { ... }

        smallTablet: { max: '600px' },
        // => @media (max-width: 600px) { ... }

        phone: { max: '450px' },
        // => @media (max-width: 350px) { ... }
      },
      colors: {
        primary: '#F4A42D',
        primarylight: '#f3a32c',
      },
      width: {
        102: '30rem',
        104: '35rem',
      },
      height: {
        102: '30rem',
        104: '35rem',
      },
    },
  },
  variants: {
    // ...
    borderWidth: ['responsive', 'hover', 'focus'],
    margin: ['responsive', 'hover', 'focus'],
  },
};
