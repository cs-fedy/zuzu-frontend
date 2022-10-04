/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-extraneous-dependencies */
/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

const colors = {
  // main colors
  transparent: "transparent",
  current: "currentColor",
  primary: {
    500: "#FF4D67",
    400: "#FF7185",
    300: "#FF94A4",
    200: "#FFB8C2",
    100: "#FFEDF0",
  },
  secondary: {
    500: "#FFD300",
    400: "#FFDC33",
    300: "#FFE566",
    200: "#FFED99",
    100: "#FFFBE6",
  },
  // alert & status
  success: "#4ADE80",
  info: "#246BFD",
  warning: "#FACC15",
  error: "#F75555",
  disabled: "#D8D8D8",
  "disabled-button": "#DF485E",
  // gray scale
  gray: {
    blue: "#607D8B",
    900: "#212121",
    800: "#424242",
    700: "#616161",
    600: "#757575",
    500: "#9E9E9E",
    400: "#BDBDBD",
    300: "#E0E0E0",
    200: "#EEEEEE",
    100: "#F5F5F5",
    50: "#FAFAFA",
  },
  // dark colors
  dark: {
    1: "#181A20",
    2: "#1F222A",
    3: "#35383F",
  },
  // others
  red: "#F44336",
  white: "#FFFFFF",
  black: "#000000",
  pink: "#E91E63",
  purple: "#9C27B0",
  "deep-purple": "#673AB7",
  indigo: "#3F51B5",
  blue: "#2196F3",
  "light-blue": "#03A9F4",
  cyan: "#00BCD4",
  teal: "#009688",
  green: "#4CAF50",
  "light-green": "#8BC34A",
  lime: "#CDDC39",
  yellow: "#FFEB3B",
  amber: "#FFC107",
  orange: "#FF9800",
  "deep-orange": "#FF5722",
  brown: "#795548",
};

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      ...colors,
    },
    // background
    backgroundColor: {
      red: "#FFF1F3",
      purple: "#F4ECFF",
      blue: "#F6FAFD",
      green: "#F2FFFC",
      orange: "#FFF8ED",
      pink: "#FFF5F5",
      yellow: "#FFFEE0",
      ...colors,
    },
    fontFamily: {
      urbanist: ["Urbanist", ...defaultTheme.fontFamily.sans],
    },
    fontWeight: {
      bold: 700,
      "semi-bold": 600,
      medium: 500,
      regular: 400,
    },
  },
  plugins: [],
};
