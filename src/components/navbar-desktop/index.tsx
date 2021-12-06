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

  const activeLinkSelect = router.pathname === href

  return (
    <Link href={href}>
      <a
        className={clsx(
          "relative after:content-[' '] after:block after:h-0.5 after:bg-primary dark:after:bg-white after:w-full pb-0.5 hover:after:w-full hover:after:right-auto hover:after:left-0 after:transition-all after:duration-300",
          !activeLinkSelect && "after:w-0 after:right-0"
        )}
      >
        {textLink}
      </a>
    </Link>
  )
}

const NavbarDesktop = () => {
  return (
    <div className="hidden sm:flex justify-between items-center max-w-70 m-auto px-5.5">
      <Link href="/">
        <a className="w-11.2">
          <img
            src="/svg_image/logo-abraham-calsin.svg"
            alt="Abraham Calsin"
            className="w-full block dark:filter dark:brightness-0 dark:contrast-200 dark:invert"
          />
        </a>
      </Link>

      <div className="flex items-center gap-x-3 font-bold text-lg">
        <NavigationLink href="/" textLink="Inicio" />
        <NavigationLink href="/about-me" textLink="Sobre Mi" />
        <NavigationLink href="/projects" textLink="Proyectos" />

        <a
          href="https://resume.abrahamcalsin.com"
          className="bg-secondary dark:text-primary px-2 py-1 rounded-rds-1.1 shadow-sm dark:shadow-sm-dark transition-opacity duration-300 hover:opacity-80"
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
