module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#FFFFFF",
      black: "#000",
      purple: "#3F2A79",
      "purple-light": "#796AA1",
      yellow: "#FBDA31",
      "yellow-2": "#FCD300",
      pink: "#F828FC",
      gray: "#C4C4C4",
      "gray-light": "#F7F7F7",
      green: "#18BC5E",
      red: "#BD1212",
      "green-light": " #CEF0DD",
      error: "#FFD8D8",
      "error-2": "#FFF5F5",
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
    },
    extend: {
      gridTemplateRows: {
        layout: "auto 1fr",
      },
    },
  },
  plugins: [],
};
