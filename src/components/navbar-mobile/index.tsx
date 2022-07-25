import React from 'react'
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
      w="100%"
      h="52px" // h-6.5
      bg="main" // bg-main/70
      backdropFilter="blur(12px)"
      position="fixed"
      borderBottom="1px"
      borderColor="primary.400"
      zIndex="10"
      _dark={{
        bg: 'primary.900', // dark:bg-primary-900/70
        borderColor: 'primary.700',
      }}
    >
      <Container maxW="52rem" w="100%" display="flex" justifyContent="space-between" alignItems="center">
        <RouterLink href="/" passHref>
          <Link className="w-9.5">
            <LogoAbrahamCalsin className="w-full" />
          </Link>
        </RouterLink>
        <DarkThemeButton />
      </Container>
    </Flex>
  )
}

interface NavigationBottomProps {
  href: string
  svgIcon: React.ReactElement
  textLink: string
}

function NavigationBottom(props: NavigationBottomProps) {
  const { href, svgIcon, textLink } = props

  const router = useRouter()

  const isActiveSelect = router.pathname === href

  return (
    <RouterLink href={href} passHref>
      <a
        className={clsx(
          'flex justify-center items-center h-full w-7.7 text-xs border-t-4 border-primary-800 dark:border-primary-200 flex-col fill-current',
          !isActiveSelect &&
            `text-primary-500 dark:text-primary-600 border-t-primary/0 dark:border-t-white/0 fill-transparent`,
        )}
      >
        {svgIcon}
        <Text as="span" fontWeight="bold" pt="2px">
          {textLink}
        </Text>
      </a>
    </RouterLink>
  )
}

export default function NavbarMobile() {
  return (
    <Box display={{ base: 'inline', sm: 'none' }}>
      <NavigationTop />
      <Flex
        w="100%"
        h="60px" // h-6.5
        justifyContent="space-evenly"
        bg="main" // bg-main/70
        backdropFilter="blur(12px)"
        position="fixed"
        bottom="0"
        borderTop="1px"
        borderColor="primary.400"
        zIndex="20"
        _dark={{
          bg: 'primary.900', // dark:bg-primary-900/70
          borderColor: 'primary.700',
        }}
      >
        <NavigationBottom href="/" svgIcon={<HomeIcon />} textLink="Inicio" />
        <NavigationBottom href="/about-me" svgIcon={<AboutMeIcon />} textLink="Sobre mi" />
        <NavigationBottom href="/projects" svgIcon={<ProjectsIcon />} textLink="Proyectos" />
        <NavigationBottom href="/blog" svgIcon={<BlogStrokeIcon />} textLink="Blog" />
      </Flex>
    </Box>
  )
}
