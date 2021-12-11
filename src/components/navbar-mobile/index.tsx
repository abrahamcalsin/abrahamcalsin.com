import React from "react"
import { useRouter } from "next/router"
import Link from "next/dist/client/link"
import clsx from "clsx"

import DarkThemeButton from "~/components/dark-theme-button"

const NavigationTop = () => {
  return (
    <div className="fixed bg-white dark:bg-primary-800 shadow-sm dark:shadow-sm-dark h-7.5 w-full flex justify-center items-center z-10">
      <div className="w-full max-w-70 flex justify-between items-center px-2.5">
        <Link href="/">
          <a className="w-11.2">
            <img
              src="/svg_image/logo-abraham-calsin.svg"
              alt="Abraham Calsin"
              className="w-full block dark:brightness-0 dark:contrast-200 dark:invert"
            />
          </a>
        </Link>

        <div className="flex items-center justify-center gap-1.5">
          <a
            href="https://resume.abrahamcalsin.com"
            target="_blank"
            className="bg-secondary dark:text-primary px-1.5 py-0.5 shadow-sm dark:shadow-sm-dark rounded-rds-1.1 font-extraBold"
          >
            Resume
          </a>

          <DarkThemeButton />
        </div>
      </div>
    </div>
  )
}

interface NavigationBottomProps {
  href: string
  iconSrc: string
  alt: string
  textLink: string
}

const NavigationBottom = (props: NavigationBottomProps) => {
  const { href, iconSrc, alt, textLink } = props

  const router = useRouter()

  const isActiveSelect = router.pathname === href

  return (
    <Link href={href}>
      <a
        className={clsx(
          "flex justify-center items-center h-full w-6 border-t-4 transition border-primary dark:border-white duration-300 flex-col",
          !isActiveSelect && "opacity-50 hover:border-primary hover:opacity-100"
        )}
      >
        <img
          src={iconSrc}
          alt={alt}
          className="-mt-0.5 block dark:brightness-0 dark:contrast-200 dark:invert"
        />
        <span className="text-xs-1.2 pt-px font-semiBold">{textLink}</span>
      </a>
    </Link>
  )
}

const NavbarMobile = () => {
  return (
    <div className="sm:hidden">
      <NavigationTop />

      <div className="flex justify-evenly fixed bg-white dark:bg-primary-800 shadow-sml dark:shadow-sm-dark w-full h-7.5 bottom-0 z-20">
        <NavigationBottom
          href="/"
          iconSrc="/icons/home-icon.svg"
          alt="Inicio"
          textLink="Inicio"
        />
        <NavigationBottom
          href="/about-me"
          iconSrc="/icons/aboutme-icon.svg"
          alt="Sobre mi"
          textLink="Sobre mi"
        />
        <NavigationBottom
          href="/projects"
          iconSrc="/icons/projects-icon.svg"
          alt="Proyectos"
          textLink="Proyectos"
        />
      </div>
    </div>
  )
}

export default NavbarMobile
