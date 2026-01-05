module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0072B8", 
        secondary: "#FBAE17",
        background: "#FFFFFF",
        customText: "#212121"
      },
      fontFamily: {
        heading: ["Roboto, sans-serif"],
        body: ["Open Sans, sans-serif"]
      },
      borderRadius: {
        'custom': "4px"
      },
      spacing: {
        'base': "8px"
      }
    },
  },
  plugins: [],
}