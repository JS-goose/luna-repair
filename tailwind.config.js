module.exports = {
  purge: [],
  theme: {
    extend: {
      gridTemplateColumns: {
        dashboard: '250px 1fr',
      },
      colors: {
        darkBlue: `#355D87`,
        medDarkBlue: `#3171B5`,
        lightBlue: `#2A98EE`,
        eggShell: `#F7F7F7`,
        lime: `#12C73D`,
        liteRed: `#DC3545`,
        charcoal: `#232323`,
        wht20: `rgba(255, 255, 255, 0.2)`,
      },
    },
  },
  variants: {
    backgroundColor: [`responsive`, `hover`, `focus`, `active`],
    textColor: [`responsive`, `hover`, `focus`, `active`],
  },
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
  },
};
