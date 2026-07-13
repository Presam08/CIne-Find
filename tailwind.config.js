/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: "#131313",
        surface: "#131313",
        "surface-container": "#201f1f",
        "surface-container-low": "#1c1b1b",
        "surface-container-high": "#353534",
        "on-background": "#e5e2e1",
        "on-surface": "#e5e2e1",
        "on-surface-variant": "#e9bcb6",
        "outline-variant": "#5e3f3b",
        primary: "#ffb4aa",
        "primary-container": "#e50914",
        "on-primary-container": "#fff7f6",
        secondary: "#c8c6c5"
      },
      spacing: {
        xs: "8px",
        sm: "16px",
        md: "24px",
        lg: "48px",
        xl: "80px",
        gutter: "20px",
        "margin-desktop": "40px",
        "margin-mobile": "16px"
      },
      borderRadius: {
        DEFAULT: "4px",
        lg: "8px",
        xl: "12px",
        full: "9999px"
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        geist: ["Geist", "sans-serif"]
      },
      fontSize: {
        "display-lg": ["48px", { lineHeight: "56px", fontWeight: "800", letterSpacing: "0" }],
        "display-mobile": ["32px", { lineHeight: "40px", fontWeight: "800", letterSpacing: "0" }],
        "headline-md": ["24px", { lineHeight: "32px", fontWeight: "700" }],
        "headline-sm": ["20px", { lineHeight: "28px", fontWeight: "600" }],
        "body-lg": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "body-md": ["14px", { lineHeight: "20px", fontWeight: "400" }],
        "metadata-sm": ["12px", { lineHeight: "16px", fontWeight: "400" }],
        "label-md": ["12px", { lineHeight: "16px", fontWeight: "500", letterSpacing: "0.05em" }]
      }
    }
  },
  plugins: []
};
