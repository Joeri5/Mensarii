const _ = require("lodash");
const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 10s linear infinite",
      },
      colors: {
        java: {
          DEFAULT: "#1EE2B5",
          50: "#C1F7EA",
          100: "#AFF5E5",
          200: "#8AF0D9",
          300: "#66EBCD",
          400: "#42E7C1",
          500: "#1EE2B5",
          600: "#17B18E",
          700: "#107F66",
          800: "#0A4E3E",
          900: "#041C16",
        },
        "mine-shaft": {
          DEFAULT: "#252525",
          50: "#818181",
          100: "#777777",
          200: "#626262",
          300: "#4E4E4E",
          400: "#393939",
          500: "#252525",
          600: "#090909",
          700: "#000000",
          800: "#000000",
          900: "#000000",
        },
        "athens-gray": {
          DEFAULT: "#F2F2F3",
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#FFFFFF",
          300: "#FFFFFF",
          400: "#FFFFFF",
          500: "#F2F2F3",
          600: "#D5D5D8",
          700: "#B8B8BD",
          800: "#9A9AA2",
          900: "#7D7D87",
        },
        viking: {
          DEFAULT: "#7CB4DF",
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#DEECF7",
          300: "#BEDAEF",
          400: "#9DC7E7",
          500: "#7CB4DF",
          600: "#4F9AD4",
          700: "#2E7FBD",
          800: "#236090",
          900: "#184263",
        },
        "racing-green": {
          DEFAULT: "#050907",
          50: "#477F63",
          100: "#3F7259",
          200: "#315844",
          300: "#223D30",
          400: "#14231B",
          500: "#050907",
          600: "#000000",
          700: "#000000",
          800: "#000000",
          900: "#000000",
        },
        "apple-green": {
          DEFAULT: "#E2F3EE",
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#FFFFFF",
          300: "#FFFFFF",
          400: "#FFFFFF",
          500: "#E2F3EE",
          600: "#BAE3D7",
          700: "#93D2BF",
          800: "#6BC2A8",
          900: "#48AD8F",
        },
        send: "#fee7d5",
        receive: "#d9ffe5",
        exchange: "#f8fcca",
        other: "#f4f4f4",
      },
      dropShadow: {
        "3xl": "0 35px 35px rgba(0, 0, 0, 0.25)",
        "4xl": [
          "0 35px 35px rgba(0, 0, 0, 0.25)",
          "0 45px 65px rgba(0, 0, 0, 0.15)",
        ],
      },
      width: {
        100: "30rem",
        90: "23.5rem",
        85: "22rem",
        68: "17.5rem",
        creditcard: "calc(100vw - 2.5rem)",
      },
      height: {
        home: "calc(100vh - 8rem)",
        51: "12.75rem",
      },
      padding: {
        26: "6.5rem",
        22: "5.5rem",
        18: "4.4rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      const screens = theme("screens", {});
      const mediaQueries = _.map(screens, (width, breakpoint) => {
        return {
          [`@media (min-width: ${width})`]: {
            ".breakpoint-display::after": {
              content: `'${breakpoint}'`,
            },
          },
        };
      });

      addComponents([
        {
          ".breakpoint-display": {
            color: "white",
            position: "fixed",
            left: "50%",
            transform: "translate(-50%)",
            fontSize: 10,
            zIndex: 100,
            backgroundColor: "black",
            borderRadius: "0 0 5px 5px",
            textTransform: "uppercase",
            padding: theme("spacing.1"),
            "&::after": {
              content: `'default'`,
            },
          },
        },
        ...mediaQueries,
      ]);
    }),
  ],
};
