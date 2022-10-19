import * as React from 'react'
import { Box, Container, Flex, Link, Text } from '@chakra-ui/react'
import clsx from 'clsx'
import RouterLink from 'next/link'
import { useRouter } from 'next/router'

import { DarkThemeButton } from '~/components/dark-theme-button'
import { LogoAbrahamCalsin } from '~/components/svgs'
import { AboutMeIcon, BlogStrokeIcon, HomeIcon, ProjectsIcon } from '~/components/svgs/icons'

function NavigationTop() {
  return (
    <Flex
      w="full"
      h="12"
      bg="main"
      position="fixed"
      borderBottom="1px"
      borderColor="primary.400"
      zIndex="10"
      _dark={{
        bg: 'primary.900',
        borderColor: 'primary.700',
      }}
    >
      <Container maxW="52rem" w="100%" display="flex" justifyContent="space-between" alignItems="center">
        <RouterLink href="/" passHref>
          <Link width="20">
            <LogoAbrahamCalsin />
          </Link>
        </RouterLink>
        <DarkThemeButton />
      </Container>
    </Flex>
  )
}

interface NavigationBottomProps {
  href: string
  icon: React.ReactElement
  linkLabel: string
}

function NavigationBottom(props: NavigationBottomProps) {
  const { href, icon, linkLabel } = props

  const router = useRouter()

  const isActive = router.pathname === href

  return (
    <RouterLink href={href} passHref>
      <Link
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        fill={clsx(!isActive ? 'transparent' : 'currentcolor')}
        width="16"
        height="full"
        fontSize="xs"
        borderTopWidth="4px"
        borderColor={clsx(!isActive ? 'primary.300' : 'primary.800')}
        textColor={clsx(!isActive && 'primary.500')}
        _hover={{
          textDecor: 'none',
        }}
        _dark={{
          borderColor: `${clsx(!isActive ? 'primary.800' : 'inherit')}`,
          textColor: `${clsx(!isActive && 'primary.600')}`,
        }}
      >
        {icon}
        <Text as="span" fontWeight="bold" pt="0.5">
          {linkLabel}
        </Text>
      </Link>
    </RouterLink>
  )
}

export function NavbarMobile() {
  return (
    <Box display={{ base: 'inline', sm: 'none' }}>
      <NavigationTop />
      <Flex
        w="full"
        h="14"
        justifyContent="space-evenly"
        bg="main"
        position="fixed"
        bottom="0"
        borderTop="1px"
        borderColor="primary.400"
        zIndex="20"
        _dark={{
          bg: 'primary.900',
          borderColor: 'primary.700',
        }}
      >
        <NavigationBottom href="/" icon={<HomeIcon />} linkLabel="Inicio" />
        <NavigationBottom href="/about-me" icon={<AboutMeIcon />} linkLabel="Sobre mi" />
        <NavigationBottom href="/projects" icon={<ProjectsIcon />} linkLabel="Proyectos" />
        <NavigationBottom href="/blog" icon={<BlogStrokeIcon />} linkLabel="Blog" />
      </Flex>
    </Box>
  )
}
