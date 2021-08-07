module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        fadeEffect: {
          "0%": {
            opacity: 0,
            transform: "translate-y-[-100%]",
          },
          "100%": {
            opacity: 1,
            transform: "translate-y-[100%]",
          },
        },
      },
      animation: {
        fadeEffect: "fadeEffect 0.5s ease-in-out",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
