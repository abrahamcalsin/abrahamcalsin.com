import * as React from 'react'
import { Container, Flex, Link } from '@chakra-ui/react'
import clsx from 'clsx'
import RouterLink from 'next/link'
import { useRouter } from 'next/router'

import { DarkThemeButton } from '~/components/dark-theme-button'
import { LogoAbrahamCalsin } from '~/components/svgs'

interface NavigationLinkProps {
  href: string
  textLink: string
}

function NavigationLink(props: NavigationLinkProps) {
  const { href, textLink } = props

  const router = useRouter()

  const isActive = router.pathname === href

  return (
    <RouterLink href={href} passHref>
      <Link
        _hover={{
          textColor: 'secondary.400',
        }}
        pointerEvents={isActive ? 'none' : undefined}
        textColor={clsx(isActive && 'secondary.400')}
      >
        {textLink}
      </Link>
    </RouterLink>
  )
}

export default function NavbarDesktop() {
  return (
    <Container maxW="52rem" display={{ base: 'none', sm: 'flex' }} justifyContent="space-between" alignItems="center">
      <RouterLink href="/" passHref>
        <Link width="20">
          <LogoAbrahamCalsin />
        </Link>
      </RouterLink>
      <Flex alignItems="center" fontSize="lg" fontWeight="bold" columnGap="5">
        <NavigationLink href="/" textLink="Inicio" />
        <NavigationLink href="/about-me" textLink="Sobre Mi" />
        <NavigationLink href="/projects" textLink="Proyectos" />
        <NavigationLink href="/blog" textLink="Blog" />
        <DarkThemeButton />
      </Flex>
    </Container>
  )
}
