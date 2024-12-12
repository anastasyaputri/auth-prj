import typography from "@tailwindcss/typography";
import aspectRatio from "@tailwindcss/aspect-ratio";
import defaultTheme from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
        display: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        ...colors,
        primary: {
          50: "#E8F7FD",
          100: "#CCEEFA",
          200: "#9ADCF4",
          300: "#67CBEF",
          400: "#34B9EA",
          500: "#169DD0",
          600: "#127EA6",
          700: "#0D5F7D",
          800: "#093F53",
          900: "#04202A",
          950: "#021217",
        },
      },
    },
  },
  plugins: [typography],
};
