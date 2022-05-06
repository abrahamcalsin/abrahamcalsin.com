import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/dist/client/link'
import clsx from 'clsx'

import { DarkThemeButton } from '~/components/dark-theme-button'
import { LogoAbrahamCalsin } from '~/components/svgs'
import { HomeIcon, AboutMeIcon, ProjectsIcon, BlogStrokeIcon } from '~/components/svgs/icons'

function NavigationTop() {
  return (
    <div className="fixed backdrop-filter backdrop-blur-md bg-main/70 dark:bg-primary/70 border-b-px border-b-primary-500/60 h-6.5 w-full flex justify-center items-center z-10">
      <div className="container flex items-center justify-between w-full">
        <Link href="/">
          <a className="w-9.5 sm:w-11.2">
            <LogoAbrahamCalsin className="block w-full" />
          </a>
        </Link>

        <DarkThemeButton />
      </div>
    </div>
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
    <Link href={href}>
      <a
        className={clsx(
          'flex justify-center items-center h-full w-7.7 text-xs border-t-4 border-primary-800 dark:border-primary-200 flex-col fill-current',
          !isActiveSelect &&
            'text-primary-500 dark:text-primary-600 border-t-primary/0 dark:border-t-white/0 fill-transparent',
        )}
      >
        {svgIcon}
        <span className="pt-0.2 font-bold">{textLink}</span>
      </a>
    </Link>
  )
}

export default function NavbarMobile() {
  return (
    <div className="sm:hidden">
      <NavigationTop />
      <div className="flex justify-evenly fixed backdrop-filter backdrop-blur-md bg-main/70 dark:bg-primary/60 border-t-px border-t-primary-500/60 w-full h-7.5 bottom-0 z-20">
        <NavigationBottom href="/" svgIcon={<HomeIcon />} textLink="Inicio" />
        <NavigationBottom href="/about-me" svgIcon={<AboutMeIcon />} textLink="Sobre mi" />
        <NavigationBottom href="/projects" svgIcon={<ProjectsIcon />} textLink="Proyectos" />
        <NavigationBottom href="/blog" svgIcon={<BlogStrokeIcon />} textLink="Blog" />
      </div>
    </div>
  )
}
