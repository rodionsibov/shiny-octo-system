module.exports = {
  purge: {
    enabled: false,
    content: ['./public/**/*.html']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        blob: "blob 2s infinite"
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "scale(1)"
          },
          "33%": {
            transform: "scale(1.1)"
          },
          "66%": {
            transform: "scale(0.9)"
          },
          "100%": {
            transform: "scale(1)"
          },

        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
