import { useRouter } from "next/router"
import Link from "next/dist/client/link"
import clsx from "clsx"

import DarkThemeButton from "~/components/dark-theme-button"

interface NavigationLinkProps {
  href: string
  textLink: string
}

const NavigationLink = (props: NavigationLinkProps) => {
  const { href, textLink } = props

  const router = useRouter()

  const isActive = router.pathname === href

  return (
    <Link href={href}>
      <a
        className={clsx(
          "line-after",
          isActive && "pointer-events-none line-after-active"
        )}
      >
        {textLink}
      </a>
    </Link>
  )
}

const NavbarDesktop = () => {
  return (
    <div className="hidden sm:flex justify-between items-center max-w-65 m-auto px-5.5">
      <Link href="/">
        <a className="w-11.2">
          <img
            src="/svg_image/logo-abraham-calsin.svg"
            alt="Abraham Calsin"
            className="w-full block dark:brightness-0 dark:contrast-200 dark:invert"
          />
        </a>
      </Link>

      <div className="flex items-center gap-x-3 font-bold text-lg">
        <NavigationLink href="/" textLink="Inicio" />
        <NavigationLink href="/about-me" textLink="Sobre Mi" />
        <NavigationLink href="/projects" textLink="Proyectos" />

        <a
          href="https://resume.abrahamcalsin.com"
          className="bg-secondary dark:text-primary px-2 py-1 rounded-full shadow-lg shadow-primary/5 dark:shadow-gray-900/30 transition-opacity duration-300 hover:opacity-80"
          target="_blank"
        >
          Resume
        </a>

        <DarkThemeButton />
      </div>
    </div>
  )
}

export default NavbarDesktop
