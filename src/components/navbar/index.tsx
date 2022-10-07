import { Box } from '@chakra-ui/react'

import NavbarDesktop from '~/components/navbar-desktop'
import NavbarMobile from '~/components/navbar-mobile'

export default function Navbar() {
  return (
    <Box
      as="header"
      textColor="primary.800"
      mt={{ base: '0', sm: '9' }}
      _dark={{
        textColor: 'primary.200',
      }}
    >
      <NavbarDesktop />
      <NavbarMobile />
    </Box>
  )
}
