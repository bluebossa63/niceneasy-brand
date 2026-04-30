/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
              "ink": {
                      "700": "#314559",
                      "800": "#223244",
                      "900": "#16212E",
                      "950": "#10161F"
              },
              "paper": {
                      "50": "#F6F3EA",
                      "100": "#ECE5D6",
                      "200": "#D7CCB8"
              },
              "moss": {
                      "300": "#9BBE9A",
                      "500": "#4D7C59",
                      "700": "#31553D"
              },
              "brass": {
                      "200": "#E0CC9F",
                      "400": "#C5A46D",
                      "500": "#A98549"
              },
              "coral": {
                      "200": "#E8A89A",
                      "400": "#C76B5A",
                      "600": "#9F4438"
              },
              "signal": {
                      "ok": "#6F9B73",
                      "warn": "#C5A46D",
                      "risk": "#C76B5A",
                      "info": "#7D9CB3"
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
              "cockpit": "0 24px 80px rgba(16, 22, 31, 0.38)",
              "paper": "0 18px 60px rgba(49, 69, 89, 0.16)",
              "focus": "0 0 0 3px rgba(77, 124, 89, 0.34)"
      }
    }
  }
}
