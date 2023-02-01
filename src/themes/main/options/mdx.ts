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
    bg: 'white',
    px: '6',
    py: '3.5',
    my: { base: '4', sm: '8' },
    fontStyle: 'italic',
    rounded: 'md',
    borderLeft: '4px solid',
    borderColor: 'primary.500',
    _dark: {
      bg: 'primary.800',
    },
  },

  ol: {
    position: 'relative',
    mb: { base: '4', sm: '5' },
    ml: { base: '0.5', sm: '2' },
    counterReset: 'li',
    listStyle: 'none',
    lineHeight: '1.5',
    fontSize: { base: 'md', sm: 'lg' },

    'blockquote &': { mt: 0 },

    '& > * + *': {
      mt: '1',
    },

    li: {
      mt: '3',
      ml: '3',
      pt: '0',
      pb: '1',
      pl: { base: '6', sm: '8' },
      pr: '0',
      position: 'relative',
      listStyle: 'none',
      borderLeftWidth: '0.6px',
      borderColor: 'primary.300',

      '& > p': {
        mb: '0',
        pt: { base: '1', sm: '0' },
      },

      '& pre': {
        lineHeight: '6',
      },

      _before: {
        content: 'counter(li)',
        counterIncrement: 'li',
        position: 'absolute',
        w: '8',
        h: '8',
        top: '0',
        left: '-4',
        mr: '2',
        fontSize: { base: 'sm', sm: 'md' },
        p: '1.5',
        lineHeight: '1.3',
        textAlign: 'center',
        fontWeight: '600',
        borderWidth: '0.5px',
        borderColor: 'primary.300',
        bg: '#fff',
        rounded: 'full',
      },
    },

    _dark: {
      '& li': {
        borderColor: 'primary.600',

        _before: {
          bg: 'primary.800',
          borderColor: 'primary.600',
        },
      },
    },
  },

  img: {
    display: 'block',
    mx: 'auto',
    mb: '8',
    rounded: '2',
  },
}

export default mdx
