export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        svg_pattern: "url('./src/component/OurClient/assets/client.png.svg)",
      },
      screens: {
        xsm: "360px",
      },
      padding: {
        DEFAULT: "1rem", // Default padding
        sm: "2rem", // Padding on small screens
        lg: "4rem", // Padding on large screens
      },
    },
  },
  plugins: [],
};
