/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "comic-sans-ms": ["Comic Sans MS", "sans-serif"],
      },
      spacing: {
        700: "700px",
        1048: "1048px",
        560: "560px",
        888: "888px",
        954: "954px",
        338: "338px",
        288: "288px",
        406: "406px",
      },
      backgroundImage: {
        frame3: "url('/images/frame3.png')",
        frame2: "url('/images/frame2.png')",
        gradient:
          "linear-gradient(90deg, #FF0000 -0.05%, #FFD600 19.97%, #00FF38 39.99%, #0029FF 60.01%, #FF00F5 80.03%, #FF0000 100.05%)",
      },
      cursor: {
        sins: "url('/images/sins-cursor.png'), auto",
      },
    },
  },
  plugins: [],
};
