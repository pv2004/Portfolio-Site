/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#080808",
        "surface-dark": "#101010",
        "surface-dark-2": "#141414",
        "border-dark": "#252525",
        "text-primary": "#F0EEE8",
        "text-secondary": "#989898",
        "text-muted": "#666666",
        cream: "#F0EFE8",
        ink: "#0A0A0A",
        pink: "#D62E69",
        "soft-pink": "#F09BC0",
        purple: "#9C5DE5",
        "folder": "#B878E0",
        "folder-light": "#E0A8F0",
        "folder-pale": "#E8C0F8",
        yellow: "#F0C95A",
        green: "#7C9D42",
        orange: "#D88950",
        blue: "#5367E8",
      },
      fontFamily: {
        serif: ["Instrument Serif", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["Manrope", "Inter", "system-ui", "sans-serif"],
        mono: [
          "JetBrains Mono",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "monospace",
        ],
      },
      letterSpacing: {
        "nav": "0.08em",
        "display": "-0.045em",
      },
      maxWidth: {
        content: "1360px",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
      },
      borderRadius: {
        card: "20px",
      },
      boxShadow: {
        soft: "0 24px 60px -32px rgba(0,0,0,0.55)",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(.2,.7,.2,1)",
      },
    },
  },
  plugins: [],
};
