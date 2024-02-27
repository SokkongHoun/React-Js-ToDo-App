/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      colors: {
        primary: "#222222",
        secondary: "#ffffff",
      },
      backgroundColor: {
        custom: "rgba(255, 255, 255, 0.35)",
      },
      boxShadow: {
        custom: "0 4px 30px rgba(0, 0, 0, 0.1)",
      },
      borderWidth: {
        custom: "1px",
      },
      borderColor: {
        custom: "rgba(255, 255, 255, 0.96)",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["responsive", "hover", "focus", "active"],
      boxShadow: ["responsive", "hover", "focus", "active"],
      borderWidth: ["responsive", "hover", "focus", "active"],
      borderColor: ["responsive", "hover", "focus", "active"],
    },
  },
  plugins: [require("tailwindcss-filters")],
};
