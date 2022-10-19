import { Box } from '@chakra-ui/react'

import { NavbarDesktop } from '~/layouts/main/components/navbar-desktop'
import { NavbarMobile } from '~/layouts/main/components/navbar-mobile'

export function Navbar() {
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
