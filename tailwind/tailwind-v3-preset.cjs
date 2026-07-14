/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
              "ink": {
                      "700": "#2B4A6E",
                      "800": "#1C3250",
                      "900": "#12223A",
                      "950": "#0A1524"
              },
              "paper": {
                      "50": "#F4F7FA",
                      "100": "#E8EEF5",
                      "200": "#D0DCE8"
              },
              "sc-blue": {
                      "100": "#8DB8E8",
                      "300": "#4A90D9",
                      "500": "#005AA9",
                      "700": "#003A70"
              },
              "amber": {
                      "200": "#E8C97A",
                      "400": "#D9A83A",
                      "500": "#C9972B"
              },
              "red": {
                      "200": "#E88A8A",
                      "400": "#D94A4A",
                      "600": "#B33838"
              },
              "signal": {
                      "ok": "#3D9E5B",
                      "warn": "#D9A83A",
                      "risk": "#D94A4A",
                      "info": "#5B9BD5"
              }
      },
      fontFamily: {
        sans: ['Geist', 'Satoshi', 'Avenir Next', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      },
      borderRadius: {
              "sm": "6px",
              "md": "12px",
              "lg": "20px",
              "xl": "28px"
      },
      spacing: {
              "1": "4px",
              "2": "8px",
              "3": "12px",
              "4": "16px",
              "6": "24px",
              "8": "32px",
              "12": "48px",
              "16": "64px",
              "24": "96px"
      },
      boxShadow: {
              "cockpit": "0 24px 80px rgba(10, 21, 36, 0.42)",
              "paper": "0 18px 60px rgba(43, 74, 110, 0.18)",
              "focus": "0 0 0 3px rgba(0, 90, 169, 0.34)"
      }
    }
  }
}
