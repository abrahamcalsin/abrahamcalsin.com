const mdx = {
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
}

export default mdx
