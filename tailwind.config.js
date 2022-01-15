module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      // Primary
      "Light-red": "hsl(356, 100%, 66%)",
      "Very-light-red": "hsl(355, 100%, 74%)",
      "Very-dark-blue": "hsl(208, 49%, 24%)",
      //Neutral
      White: "hsl(0, 0%, 100%)",
      "Grayish-blue": "hsl(240, 2%, 79%)",
      "Very-dark-grayish-blue": "hsl(207, 13%, 34%)",
      "Very-dark-black-blue": "hsl(240, 10%, 16%)",
      transparent: "transparent",
      // Greadiant
      "very-light-red": "hsl(13, 100%, 72%)",
      "light-red": "hsl(353, 100%, 62%)",
      "very-dark-gray-blue": "hsl(237, 17%, 21%)",
      "very-dark-desaturated-blue": " hsl(237, 23%, 32%)",
    },
    fontFamily: {
      ubuntu: ["Ubuntu", "sans-serif"],
      overpass: ["Overpass", " sans-serif"],
    },
    extend: {
      backgroundImage: {
        "hero-pattern": "url('./src/assets/bg-pattern-intro-mobile.svg')",
        "bg-pattern-desktop":
          "url('./src/assets/bg-pattern-intro-desktop.svg')",
        "bg-pattern-circles": "url('./src/assets/bg-pattern-circles.svg')",
        "bg-editor-desktop":
          "url('./src/assets/illustration-editor-desktop.svg')",
      },
    },
  },
  plugins: [],
};
