/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        "warm-white": "#FFE8D6",
        blush: "#DDBEA9",
        terracotta: "#CB997E",
        "silver-sage": "#B7B7A4",
        sage: "#A5A58D",
        forest: "#6B705C",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "serif"],
        sans: ["DM Sans", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      transitionTimingFunction: {
        settling: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      },
    },
  },
  plugins: [],
};
