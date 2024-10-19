/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      sm: ["12px", "14.4px"],
      md: ["14px", "21x"],
      base: ["16px", "24px"],
      lg: ["18px", "18px"],
      "2xl": ["24px", "28.8px"],
    },

    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        Jakarta: ["Plus Jakarta Sans", "sans-serif"],
        mulish: ["Mulish", "sans-serif"],
      },
      colors: {
        primary: {
          active_nav: "#0F0609",
          deactive_nav: "#7A7A7A",
          dashboard_text_nav: "#192965",
          highlight_text: "#14213D",
          dull_text: "#71778E",
          chat_active_text: "#2563EB",
          chat_live_text: "#60A5FA",
        },
        background: {
          dark_blue: "#192965",
          sky_blue: "#60A5FA",
          page_bg_color: "rgb(248, 249, 252)",
          card_bg: "#E1E6EF",
        },
      },

      boxShadow: {
        xl: "0px -8px 16px 0px #C4C4C414",
      },
    },
    plugins: ["prettier-plugin-tailwindcss"],
  },
};
