module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },

    maxWidth: {
      70: "65rem",
      500: "500px",
    },

    letterSpacing: {
      "ltr-1": "0.02em",
    },

    fontWeight: {
      thin: "100",
      extraLight: "200",
      light: "300",
      regular: "400",
      medium: "500",
      semiBold: "600",
      bold: "700",
      extraBold: "800",
      black: "900",
    },

    fontFamily: {
      montserrat: "Montserrat",
      notoSerif: "Noto Serif TC",
    },

    zIndex: {
      0: 0,
      10: 10,
      20: 20,
      30: 30,
      40: 40,
      50: 50,
      25: 25,
      50: 50,
      75: 75,
      100: 100,
      auto: "auto",
    },

    boxShadow: {
      sm: "0px 5px 14px rgba(204, 209, 230, 0.4)",
      sml: "0px -5px 50px rgba(204, 209, 230, 0.46)",
      none: "none",
    },

    colors: {
      black: "#000",
      inherit: "inherit",
      transparent: "transparent",
      current: "currentColor",
      white: "#f7f9fe",
      grayBlue: "#eceffc",

      primary: {
        50: "#e7ebf0",
        100: "#c1cddc",
        200: "#9aadc4",
        300: "#748dab",
        400: "#55749b",
        500: "#335d8d",
        600: "#2c5584",
        700: "#234b79",
        800: "#1e416c",
        DEFAULT: "#183153",
      },
      secondary: {
        50: "#fdf1de",
        DEFAULT: "#f9dcad",
        200: "#f5c578",
        300: "#f1ae41",
        400: "#ee9d0f",
        500: "#ec8c00",
        600: "#e88100",
        700: "#e37100",
        800: "#dd6100",
        900: "#d44600",
      },
      gray: {
        50: "#F3F9FF",
        100: "#ECF1F7",
        200: "#E2E7ED",
        300: "#D1D7DD",
        400: "#ADB3B8",
        500: "#8D9298",
        DEFAULT: "#656A70",
        700: "#52575C",
        800: "#34393D",
        900: "#14191D",
      },
      error: {
        50: "#FFE9EF",
        100: "#FFC9D5",
        200: "#F8919D",
        300: "#F26276",
        400: "#FF2D54",
        500: "#FF0038",
        DEFAULT: "#F70038",
        700: "#E50031",
        800: "#D80029",
        900: "#C9001D",
      },
      success: {
        50: "#E8F5E9",
        100: "#C8E6C9",
        200: "#A5D6A7",
        300: "#81C784",
        400: "#66BB6B",
        500: "#4CAF51",
        DEFAULT: "#43A048",
        700: "#388E3D",
        800: "#2E7D33",
        900: "#1B5E21",
      },
      warning: {
        50: "#FFFEE7",
        100: "#FDFBC2",
        200: "#FBF898",
        300: "#F9F46B",
        400: "#F6EF45",
        500: "#FFF627",
        DEFAULT: "#FFE21D",
        700: "#FFC90C",
        800: "#FFB000",
        900: "#FF8500",
      },
    },
    borderWidth: {
      0: "0",
      "2/1": "1px",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
      9: "10px",
      10: "12px",
      11: "14px",
      12: "16px",
    },

    borderRadius: {
      "rds-0.1": "4px",
      "rds-1": "7px",
      "rds-1.1": "999px",

      "rds-2-desk": "10px",
      "rds-3-desk": "20px",
      "rds-4-desk": "15px",
    },

    scale: {
      1: "1",
      "-1": "-1",
    },

    extend: {
      backgroundColor: {
        inherit: "inherit",
      },

      textColor: {
        inherit: "inherit",
      },

      borderColor: {
        inherit: "inherit",
      },

      fontSize: {
        0: "0px",
        "xs-1.1": "8px",
        "xs-1.2": "10px",
        "xs-1.3": "11px",
        "xs-1.7": "86px",
        "sm-1.4": "45px",
        "sm-1.5": "125px",
        "xsm-1.1": "15px",
        "xsm-1.2": "17px",
        "xsm-1.3": "22px",
      },

      spacing: {
        0: "0px",
        px: "1px",
        0.2: "2px",
        0.5: "4px",
        0.7: "6px",
        1: "8px",
        1.5: "12px",
        1.7: "14px",
        2: "16px",
        2.2: "18px",
        2.5: "20px",
        3: "24px",
        3.5: "28px",
        3.7: "30px",

        4.5: "36px",

        5.2: "42px",
        5.5: "44px",
        6: "48px",
        6.5: "52px",

        7.5: "60px",
        8: "64px",
        9.5: "76px",

        11.2: "90px",
        12: "96px",
        13: "104px",

        15: "120px",

        25: "200px",
        25.5: "204px",

        31.2: "250px",

        35.5: "284px",
      },

      transitionDuration: {
        300: ".3s",
      },

      lineHeight: {
        1: "1",
        1.2: "1.2",
        1.3: "1.3",
        1.4: "1.4",
        1.5: "1.5",
        1.6: "1.6",
        1.7: "1.7",
      },
    },
  },

  variants: {
    extend: {
      borderWidth: ["hover", "focus"],
      opacity: ["hover", "active"],
      textColor: ["hover, active"],
      translate: ["active", "hover"],
      margin: ["group-hover"],
    },
  },

  plugins: [],
}
