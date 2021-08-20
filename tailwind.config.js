module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      // => @media (min-width: 640px) { ... }
      sm: "640px",

      // => @media (min-width: 768px) { ... }
      md: "768px",

      // => @media (min-width: 1024px) { ... }
      lg: "1024px",

      // => @media (min-width: 1280px) { ... }
      xl: "1280px",

      // => @media (min-width: 1536px) { ... }
      "2xl": "1536px",
    },
    maxWidth: {
      70: "65rem",
      500: "500px",
    },

    fontSize: {
      "size-1": "10px",
      "size-2": "11.39px",
      "size-3": "12.39px",
      "size-4": "14.5px",
      "size-5": "16px",
      "size-6": "22px",
      "size-6.1": "85.6324px",
      "size-6.2": "17px",
      // -----------------
      "size-7-desk": "14.41px",
      "size-7.1-desk": "15px",
      "size-7.2-desk": "18px",
      "size-8-desk": "17.60px",
      "size-8.1-desk": "20px",
      "size-8.2-desk": "45px",
      "size-8.3-desk": "30px",
      "size-9-desk": "125px",
    },
    letterSpacing: {
      "ltr-1": "0.02em",
    },
    textColor: {
      clrPrimary: "#183153",
      clrSecondary: "#EA9100",
      "clrOption-1": "rgba(24, 49, 83, 0.57)",
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
    boxShadow: {
      sm: "0px 5px 14px rgba(204, 209, 230, 0.4)",
      sml: "0px -5px 50px rgba(204, 209, 230, 0.46)",
      none: "none",
    },
    backgroundColor: {
      primary: "#fff",
      secondary: "#ECEFFC",
      "clrOption-1": "#183153",
      "clrOption-2": "rgba(252, 163, 17, 0.34)",
      "clrOptin-3": "#f7f9fe",
      transparent: "transparent",
    },
    borderColor: {
      brdPrimary: "#183153",
      brdsecondary: "#fff",
      "brdOption-1": "rgba(24, 49, 83, 0.57)",
    },
    borderWidth: {
      0: "0",
      "2/1": "1px",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
    },
    borderRadius: {
      "rds-1": "7.35px",
      "rds-1.1": "900px",
      // Px radius desk
      "rds-2-desk": "10px",
      "rds-3-desk": "20px",
      "rds-4-desk": "15px",
    },
    opacity: {
      0: "0",
      25: ".25",
      50: ".5",
      75: ".75",
      10: ".1",
      20: ".2",
      30: ".3",
      40: ".4",
      50: ".5",
      60: ".6",
      70: ".7",
      80: ".8",
      90: ".9",
      100: "1",
    },

    extend: {
      spacing: {
        auto: "auto",
        "0-1": "-3px",
        0: "0px",
        1: "1px",
        "1-2": "2px",
        "2-6": "3px",
        "2-8": "4px",
        2: "6px",
        3: "9px",
        4: "12px",
        5: "15px",
        6: "18px",
        7: "21px",
        8: "24px",
        9: "27px",
        10: "30px",
        11: "33px",
        12: "36px",
        13: "39px",
        14: "42px",
        15: "45px",
        16: "48px",
        17: "51px",
        18: "54px",
        19: "57px",
        20: "60px",
        21: "63px",
        22: "66px",
        23: "69px",
        24: "72px",
        25: "75px",
        26: "78px",
        27: "81px",
        28: "84px",
        29: "87px",
        30: "90px",
        31: "93px",
        32: "96px",
        33: "99px",
        34: "102px",
        35: "105px",
        // Px desk
        "36-dek": "200px",
        "36.1-desk": "205px",
        "36.2-desk": "120px",
        "36.3-desk": "250px",
        // Px others
        37: "139px",
        285: "285px",
        710: "710px",
      },
      inset: {
        0: "0",
        auto: "auto",
      },
      gridTemplateColumns: {
        autoGrid: "repeat(auto-fill, minmax(14rem, 1fr))",
      },
      lineHeight: {
        loose: "1.7",
      },
      transitionDuration: {
        300: ".3s",
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ["hover", "focus"],
      opacity: ["hover", "active"],
      textColor: ["hover, active"],
      inset: ["hover", "focus"],
    },
  },
  plugins: [],
};
