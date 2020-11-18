module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  purge: ["./src/{components,pages}/**/*.{js,ts,jsx,tsx}"],
};
