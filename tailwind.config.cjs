/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: { 50: "#9b9bae", 100: "#212121", 200: "#272727" },
        secondary: { 100: "#01f5b4"},
      },
    },
    transitionTimingFunction: {
      bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    },
    fontFamily: {
      oswald: ["Oswald"],
      arwo: ["Arwo"],
      cormorant: ["Cormorant"],
      fredoka: ["Fredoka One"],
      bogart: ["Bogart"],
      lato: ["Lato"],
    },
   
  },
  plugins: [
   
  
  ],
};
