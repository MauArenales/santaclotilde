const plugin = require('tailwindcss/plugin')

const radialGradientPlugin = plugin(
  function ({ matchUtilities, theme }) {
    matchUtilities(
      {
        // map to bg-radient-[*]
        'bg-radient': value => ({
          'background-image': `radial-gradient(${value},var(--tw-gradient-stops))`,
        }),
      },
      { values: theme('radialGradients') }
    )
  },
  {
    theme: {
      radialGradients: _presets(),
    },
  }
)

/**
 * utility class presets
 */
function _presets() {
  const shapes = ['circle', 'ellipse'];
  const pos = {
    c: 'center',
    t: 'top',
    b: 'bottom',
    l: 'left',
    r: 'right',
    tl: 'top left',
    tr: 'top right',
    bl: 'bottom left',
    br: 'bottom right',
  };
  let result = {};
  for (const shape of shapes)
    for (const [posName, posValue] of Object.entries(pos))
      result[`${shape}-${posName}`] = `${shape} at ${posValue}`;

  return result;
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [radialGradientPlugin],
  content: [
    './src/**/*.{js,jsx,ts,tsx}', 
    './public/index.html'
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      padding: {
        // Common horizontal padding
        'common-horizontal': '1rem',

        // Responsive paddings
        'sm': '1rem', // sm: 4rem
        'md': '6rem', // md: 8rem
        'lg': '10rem', // lg: 12rem
        'xl': '17rem' // xl: 17rem
      },
      margin: {
        // Common horizontal margin
        'common-horizontal': '1rem',

        // Responsive margins
        'sm': '4rem', // sm: 4rem
        'md': '8rem', // md: 8rem
        'lg': '12rem', // lg: 12rem
        'xl': '17rem' // xl: 17rem
      },
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'custom-radial': 'radial-gradient(#303b37, #1a1f1d)',
        'radial-blue-gradient': 'radial-gradient(circle at bottom right, #82bec2, #e3edeb)',
      },
      colors: {
        'pucp': '#042354',
        'primary': '#14928f',
        'secondary': '#6abb76'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
