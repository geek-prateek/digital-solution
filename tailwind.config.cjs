/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      keyframes: {
        rotate3d: {
          '0%': { transform: 'rotateY(-45deg) rotateX(10deg)' },
          '100%': { transform: 'rotateY(45deg) rotateX(-10deg)' },
        },
      },
      animation: {
        rotate3d: 'rotate3d 6s ease-in-out infinite alternate',
      },
      colors: {
        primary: "#0A1128",    // Dark Navy Blue
        secondary: "#00FFFF",  // Aqua Blue
        tertiary: "#4A90E2",   // Professional Blue
        "text-primary": "#FFFFFF", // White
        "text-secondary": "#B0BEC5", // Silver
        "accent": "#3D5AFE",   // Bright Blue
        "shadow": "rgba(176, 190, 197, 0.1)", // Silver with low opacity
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "linear-gradient(to right, #1A1F71, #00C8FF)",
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(to right, #1A1F71, #00C8FF)",
      },
      boxShadow: {
        "3d-soft": "0 4px 6px -1px rgba(43, 45, 66, 0.1), 0 2px 4px -1px rgba(43, 45, 66, 0.06)",
      },
    },
  },
  plugins: [],
};
