module.exports = {
  purge: [],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontSize: {
      xs: ".7rem",
      sm: ".8rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
    darkSelector: ".dark-mode",
  },
  variants: {
    backgroundColor: [
      "dark",
      "dark-hover",
      "dark-group-hover",
      "dark-even",
      "dark-odd",
      "hover",
      "group-hover",
      "responsive",
    ],
    borderColor: [
      "dark",
      "dark-focus",
      "dark-focus-within",
      "hover",
      "group-hover",
      "responsive",
    ],
    textColor: [
      "dark",
      "dark-hover",
      "dark-active",
      "hover",
      "group-hover",
      "responsive",
    ],
    extend: {},
  },
  plugins: [
    require("tailwindcss-dark-mode")(),
    require("tailwind-scrollbar-hide"),
  ],
};
