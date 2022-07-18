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
    <RouterLink href={href}>
      <a className={clsx('hover:text-secondary', isActive && 'pointer-events-none text-secondary')}>{textLink}</a>
    </RouterLink>
  )
}

export default function NavbarDesktop() {
  return (
    <Container maxW="52rem" display={{ base: 'none', sm: 'flex' }} justifyContent="space-between" alignItems="center">
      <RouterLink href="/" passHref>
        <Link className="w-11.2">
          <LogoAbrahamCalsin className="w-full" />
        </Link>
      </RouterLink>
      <Flex alignItems="center" fontSize="lg" fontWeight="bold" columnGap="24px">
        <NavigationLink href="/" textLink="Inicio" />
        <NavigationLink href="/about-me" textLink="Sobre Mi" />
        <NavigationLink href="/projects" textLink="Proyectos" />
        <NavigationLink href="/blog" textLink="Blog" />
        <DarkThemeButton />
      </Flex>
    </Container>
  )
}
