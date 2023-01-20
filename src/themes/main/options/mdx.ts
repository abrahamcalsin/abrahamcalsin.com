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
    mb: { base: '4', sm: '6' },
    fontSize: { base: 'md', sm: 'lg' },
    fontWeight: 'medium',
    lineHeight: { base: '6', sm: '9' },
    'blockquote &': {
      mb: 0,
    },
  },
  hr: {
    my: '8',
  },
  blockquote: {
    backgroundColor: 'white',
    px: '6',
    py: '3.5',
    my: { base: '4', sm: '8' },
    fontStyle: 'italic',
    borderRadius: 'md',
    borderLeft: '4px solid',
    borderColor: 'primary.500',
    _dark: {
      backgroundColor: 'primary.800',
    },
  },
  ul: {
    mb: { base: '4', sm: '5' },
    ml: '10',
    'blockquote &': { mt: 0 },
    '& > * + *': {
      mt: '1',
    },

    li: {
      mb: '0',
    },
  },
  img: {
    display: 'block',
    mx: 'auto',
    mb: '8',
    borderRadius: '2',
  },
}

export default mdx
