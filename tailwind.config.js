module.exports = {
  purge: [
    './src/**/*.svelte',
  ],
  variants: {},
  theme: {
    extend: {}
  },
  plugins: [],
  future: {
      removeDeprecatedGapUtilities: true,
      purgeLayersByDefault: true,
  },
}
