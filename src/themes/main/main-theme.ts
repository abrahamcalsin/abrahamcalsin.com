import { extendTheme, ThemeComponentProps } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const mainTheme = extendTheme({
  config: {
    cssVarPrefix: 'abraham',
    initialColorMode: 'light',
    useSystemColorMode: true,
  },
  fonts: {
    heading: `"Sofia Pro" , sans-serif`,
    body: `"Sofia Pro" , sans-serif`,
    robotoMono: `"Roboto Mono", monospace`,
  },
  semanticTokens: {
    colors: {
      'chakra-body-text': {
        _light: 'primary.600',
        _dark: 'primary.400',
      },
      'chakra-body-bg': {
        _light: 'main',
        _dark: 'primary.900',
      },
    },
  },
  styles: {
    global: (props: ThemeComponentProps) => ({
      'html, body': {
        fontSize: {
          base: 'md',
          lg: 'lg',
        },
      },
      '::selection': {
        backgroundColor: mode('secondary.100', 'secondary.800')(props),
        color: mode('inherit', 'primary.200')(props),
      },
    }),
  },
  fontSizes: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '30px',
    '4xl': '36px',
    '5xl': '48px',
    '6xl': '60px',
    '7xl': '72px',
    '8xl': '96px',
    '9xl': '128px',
  },
  colors: {
    inherit: 'inherit',
    transparent: 'transparent',
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
      900: '#0a192f',
    },
    secondary: {
      50: '#e3f7ea',
      100: '#bbeacc',
      200: '#8ddcab',
      300: '#54ce89',
      400: '#00c36f',
      500: '#00b854',
      600: '#00a84a',
      700: '#00963e',
      800: '#008431',
      900: '#00651d',
    },
    error: {
      50: '#FFE9EF',
      100: '#FFC9D5',
      200: '#F8919D',
      300: '#F26276',
      400: '#FF2D54',
      500: '#FF0038',
      600: '#F70038',
      700: '#E50031',
      800: '#D80029',
      900: '#C9001D',
    },
    success: {
      50: '#E8F5E9',
      100: '#C8E6C9',
      200: '#A5D6A7',
      300: '#81C784',
      400: '#66BB6B',
      500: '#4CAF51',
      600: '#43A048',
      700: '#388E3D',
      800: '#2E7D33',
      900: '#1B5E21',
    },
    warning: {
      50: '#FFFEE7',
      100: '#FDFBC2',
      200: '#FBF898',
      300: '#F9F46B',
      400: '#F6EF45',
      500: '#FFF627',
      600: '#FFE21D',
      700: '#FFC90C',
      800: '#FFB000',
      900: '#FF8500',
    },
    gray: {
      50: '#eaecee',
      100: '#cad1d6',
      200: '#a7b2ba',
      300: '#8494a0',
      400: '#6b7e8c',
      500: '#526979',
      600: '#465b69',
      700: '#384854',
      800: '#2a363f',
      900: '#192229',
    },
  },
  sizes: {
    space: {
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
    // container: {
    //   sm: '640px',
    //   md: '768px',
    //   lg: '1024px',
    //   xl: '1280px',
    //   '2xl': '1536px',
    // },
  },
  mdx: {
    h1: {
      mb: '4',
      lineHeight: 1.2,
      fontWeight: 'bold',
      fontSize: { base: '3xl', sm: '4xl' },
      letterSpacing: '-.025em',
    },
    h2: {
      mb: '4',
      lineHeight: 1.2,
      fontWeight: 'bold',
      fontSize: { base: '2xl', sm: '3xl' },
      letterSpacing: '-.025em',
      color: 'primary.800',
      _dark: {
        color: 'primary.200',
      },
    },
    h3: {
      mb: '4',
      lineHeight: 1.2,
      fontWeight: 'bold',
      fontSize: { base: 'xl', sm: '2xl' },
      letterSpacing: '-.025em',
      color: 'primary.800',
      _dark: {
        color: 'primary.200',
      },
    },
    h4: {
      mb: '4',
      lineHeight: 1.2,
      fontWeight: 'bold',
      fontSize: { base: 'lg', sm: 'xl' },
      letterSpacing: '-.025em',
      color: 'primary.800',
      _dark: {
        color: 'primary.200',
      },
    },
    a: {
      color: 'secondary.400',
      textDecoration: 'underline',
      _hover: {
        opacity: '0.8',
      },
    },
    p: {
      mb: { base: '16px', sm: '24px' },
      fontSize: { base: 'md', sm: 'lg' },
      fontWeight: 'medium',
      lineHeight: { base: '24px', sm: '36px' },
      'blockquote &': {
        mb: 0,
      },
    },
    hr: {
      my: '2rem',
    },
    blockquote: {
      backgroundColor: 'white',
      px: '25px',
      py: '15px',
      my: { base: '16px', sm: '30px' },
      fontStyle: 'italic',
      borderRadius: 'md',
      borderLeft: '4px solid',
      borderColor: 'primary.500',
      _dark: {
        backgroundColor: 'primary.800',
      },
    },
    ul: {
      mb: { base: '16px', sm: '20px' },
      ml: '40px',
      'blockquote &': { mt: 0 },
      '& > * + *': {
        mt: '5px',
      },
    },
    img: {
      display: 'block',
      mx: 'auto',
      mb: '2rem',
      borderRadius: '8px',
    },
  },
})

export default mainTheme
