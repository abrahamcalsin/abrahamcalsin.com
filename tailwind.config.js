module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },

    maxWidth: {
      none: 'none',
      56: '56rem',
      550: '550px',
      full: 'full',
    },

    fontWeight: {
      thin: '100',
      extraLight: '200',
      light: '300',
      regular: '400',
      medium: '500',
      semiBold: '600',
      bold: '700',
      extraBold: '800',
      black: '900',
    },

    fontFamily: {
      robotoMono: 'Roboto Mono',
    },

    colors: {
      inherit: 'inherit',
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#f7f9fe',
      main: '#EFF2FA',

      primary: {
        50: '#edf8ff',
        100: '#e6f1ff',
        200: '#dce7ff',
        300: '#ccd6f6',
        400: '#a8b2d1',
        500: '#8892b0',
        600: '#606a86',
        700: '#4c5772',
        800: '#2d3952',
        DEFAULT: '#0a192f',
      },

      secondary: {
        50: '#e3f7ea',
        100: '#bbeacc',
        200: '#8ddcab',
        300: '#54ce89',
        DEFAULT: '#00c36f',
        500: '#00b854',
        600: '#00a84a',
        700: '#00963e',
        800: '#008431',
        900: '#00651d',
      },

      gray: {
        50: '#ededed',
        100: '#d1d3d6',
        200: '#b1b7bd',
        300: '#909aa4',
        400: '#788592',
        500: '#617180',
        DEFAULT: '#546370',
        700: '#45505a',
        800: '#363d45',
        900: '#24292e',
      },

      error: {
        50: '#ffeaef',
        100: '#ffcbd5',
        200: '#f8959e',
        300: '#f26a77',
        400: '#ff3e55',
        500: '#ff193a',
        DEFAULT: '#f7003a',
        700: '#e50033',
        800: '#d8002b',
        900: '#ca001e',
      },

      success: {
        50: '#E8F5E9',
        100: '#C8E6C9',
        200: '#A5D6A7',
        300: '#81C784',
        400: '#66BB6B',
        500: '#4CAF51',
        DEFAULT: '#43A048',
        700: '#388E3D',
        800: '#2E7D33',
        900: '#1B5E21',
      },

      warning: {
        50: '#fffee7',
        100: '#fefbc2',
        200: '#fcf797',
        300: '#faf36b',
        400: '#f7ef45',
        500: '#f4ea10',
        DEFAULT: '#ffe11d',
        700: '#ffc80d',
        800: '#ffaf00',
        900: '#ff8400',
      },
    },
    borderWidth: {
      0: '0',
      px: '1px',
      2: '2px',
      3: '3px',
      4: '4px',
      6: '6px',
      8: '8px',
      9: '10px',
      10: '12px',
      11: '14px',
      12: '16px',
    },

    extend: {
      spacing: {
        0: '0px',
        px: '1px',
        0.2: '2px',
        0.5: '4px',
        0.7: '6px',
        1: '8px',
        1.2: '10px',
        1.5: '12px',
        1.7: '14px',
        2: '16px',
        2.2: '18px',
        2.5: '20px',
        3: '24px',
        3.2: '26px',
        3.5: '28px',
        3.7: '30px',

        4.5: '36px',

        5.2: '42px',
        5.5: '44px',
        6: '48px',
        6.5: '52px',

        7.5: '60px',
        7.7: '62px',
        8: '64px',
        9.5: '76px',

        11: '88px',
        11.2: '90px',
        12: '96px',
        13: '104px',

        15: '120px',

        25: '200px',
        25.5: '204px',

        31.2: '250px',

        35.5: '284px',
      },

      backgroundColor: {
        inherit: 'inherit',
      },

      textColor: {
        inherit: 'inherit',
      },

      borderColor: {
        inherit: 'inherit',
      },

      gridTemplateColumns: {
        'auto-fill': 'repeat(auto-fill, minmax(12rem, 1fr))',
      },

      gridAutoRows: {
        '22rem': '22rem',
      },

      typography: theme => ({
        DEFAULT: {
          css: {
            color: theme('colors.primary.600'),
            a: {
              color: theme('colors.secondary.500'),
              '&:hover': {
                color: theme('colors.secondary.DEFAULT'),
              },
              code: { color: theme('colors.inherit') },
            },
            'h1, h2, h3, h4': {
              color: theme('colors.primary.800'),
              fontWeight: theme('fontWeight.bold'),
              marginTop: theme('margin.0'),
              marginBottom: theme('margin.3'),
              'scroll-margin-top': theme('spacing.8'),
            },
            p: {
              marginTop: theme('margin.1'),
            },
            code: {
              color: theme('colors.secondary.500'),
              padding: theme('padding.px'),
              borderRadius: '3px',
            },
            pre: {
              color: theme('colors.primary.300'),
            },
            img: {
              margin: theme('margin.auto'),
              borderRadius: '8px',
            },
            table: {
              display: 'block',
              width: theme('width.full'),
              maxWidth: theme('width.full'),
              overflow: 'auto',
            },
            thead: {
              th: {
                padding: theme('spacing.1'),
                color: theme('colors.primary.600'),
                borderWidth: theme('borderWidth.px'),
                borderColor: theme('colors.primary.500'),
              },
            },
            tbody: {
              color: theme('colors.primary.600'),
              tr: {
                td: {
                  padding: theme('spacing.1'),
                  borderColor: theme('colors.primary.500'),
                  borderWidth: theme('borderWidth.px'),
                },
              },
            },
            blockquote: {
              color: theme('colors.primary.600'),
              backgroundColor: theme('colors.primary.100'),
              padding: theme('spacing.3'),
              paddingTop: theme('spacing.2'),
              paddingBottom: theme('spacing.px'),
              borderLeftColor: theme('colors.primary.500'),
            },
            ol: {
              p: {
                marginBottom: theme('margin.1'),
              },
            },
            ul: {
              li: {
                marginBottom: theme('margin.1'),
              },
            },
            strong: {
              color: theme('colors.primary.600'),
            },
            hr: {
              borderColor: theme('colors.primary.300'),
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.primary.400'),
            a: {
              color: theme('colors.secondary.500'),
              '&:hover': {
                color: theme('colors.secondary.DEFAULT'),
              },
              code: { color: theme('colors.secondary.DEFAULT') },
            },
            thead: {
              th: {
                color: theme('colors.primary.400'),
                borderColor: theme('colors.primary.600'),
              },
            },
            tbody: {
              color: theme('colors.primary.400'),
              tr: {
                td: {
                  borderColor: theme('colors.primary.600'),
                },
              },
            },
            blockquote: {
              color: theme('colors.primary.400'),
              backgroundColor: 'rgba(255, 2555, 255, 0.1)',
              borderLeftColor: theme('colors.primary.500'),
            },
            ol: {
              p: {
                marginBottom: theme('margin.1'),
              },
            },
            ul: {
              li: {
                marginBottom: theme('margin.1'),
              },
            },
            strong: {
              color: theme('colors.primary.400'),
            },
            hr: {
              borderColor: theme('colors.primary.800'),
            },
          },
        },
      }),
    },
  },

  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/line-clamp')],
}
