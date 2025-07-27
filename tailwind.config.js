/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"];
export const theme = {
  extend: {
    colors: {
      background: "#F9FAFB", // Snow White
      surface: "#F3F4F6", // Off-White / Light Gray
      primary: "#1DA1F2", // Vivid Teal
      highlight: "#8B5CF6", // Electric Purple
      neutralAccent: "#64748B", // Slate Blue
      textPrimary: "#111827", // Almost Black
      textSecondary: "#6B7280", // Dark Gray
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      heading: ["Poppins", "sans-serif"],
    },
    boxShadow: {
      soft: "0 1px 3px rgba(0, 0, 0, 0.1)",
    },
    borderRadius: {
      md: "6px",
      lg: "8px",
    },
  },
};
export const variants = {
  extend: {},
};
export const plugins = [];
