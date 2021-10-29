// import React, { useRef } from "react";
import clsx from "clsx"
import { useRouter } from "next/dist/client/router"
import Link from "next/link"

const NavTabLink = (props) => {
  const { href, contentNavLink } = props

  const router = useRouter()

  const activeLinkSelect = router.pathname === href

  return (
    <Link href={href}>
      <a
        className={clsx(
          "relative after:content-[' '] after:block after:h-0.5 after:bg-primary pb-0.5 after:w-full",
          !activeLinkSelect &&
            "after:w-0 after:right-0 after:transition-all after:duration-300 hover:after:w-full hover:after:right-auto hover:after:left-0"
        )}
      >
        {contentNavLink}
      </a>
    </Link>
  )
}

const NavTabIcon = (props) => {
  const { href, iconSrc, targetBlank, alt, contentLinkSection } = props

  const router = useRouter()

  const isActiveSelect = router.pathname === href

  return (
    <Link href={href}>
      <a
        className={clsx(
          "flex justify-center items-center h-full w-6 border-t-4 transition border-primary duration-300 flex-col",
          !isActiveSelect &&
            "border-transparent opacity-50 hover:border-primary hover:opacity-100"
        )}
        target={targetBlank}
      >
        <img src={iconSrc} alt={alt} className="-mt-0.5 block" />
        <p className="text-xs-1.2 pt-px font-semiBold">{contentLinkSection}</p>
      </a>
    </Link>
  )
}

const Navbar = () => {
  return (
    <header className="sm:mt-1.5">
      {/* Navbar Logo Fixed Mobile */}
      <div className="fixed sm:static bg-white sm:bg-transparent shadow-sm sm:shadow-none  h-7.5 w-full flex justify-center items-center z-10">
        <div className="w-full max-w-70 flex justify-between items-center sm:justify-between px-2.5 sm:px-5.5">
          <Link href="/">
            <a className="w-11.2">
              <img
                src="/svg_image/logo-abraham-calsin.svg"
                alt="Abraham Calsin"
                className="w-full block"
              />
            </a>
          </Link>
          <a
            href="https://resume.abrahamcalsin.com"
            target="_blank"
            className="bg-secondary px-1.5 py-0.5 shadow-sm rounded-rds-1.1 font-extraBold sm:hidden"
          >
            Resume
          </a>
          {/* Navbar Links Desktop*/}
          <div className="hidden sm:flex sm:items-center sm:gap-x-3 font-bold text-lg">
            <NavTabLink href="/" contentNavLink="Inicio" />
            <NavTabLink href="/about-me" contentNavLink="Sobre Mi" />
            <NavTabLink href="/projects" contentNavLink="Proyectos" />
            <a
              href="https://resume.abrahamcalsin.com"
              className="bg-secondary px-2 py-1 rounded-rds-1.1 shadow-sm transition duration-300 hover:opacity-80"
              target="_blank"
            >
              Resume
            </a>
          </div>
          {/* ----- */}
        </div>
      </div>
      {/* Navbar Icons/Links Fixed Mobile*/}
      <div className="flex justify-evenly fixed bg-white shadow-sml w-full h-7.5 bottom-0 sm:hidden z-20">
        <NavTabIcon href="/" iconSrc="/icons/home-icon.svg" contentLinkSection="Inicio" />
        <NavTabIcon
          href="/about-me"
          iconSrc="/icons/aboutme-icon.svg"
          alt="Sobre mi"
          contentLinkSection="Sobre mi"
        />
        <NavTabIcon
          href="/projects"
          iconSrc="/icons/projects-icon.svg"
          alt="Proyectos"
          contentLinkSection="Proyectos"
        />
      </div>
      {/* ----- */}
    </header>
  )
}
export default Navbar
