import Link from "next/link"

import NavDesktop from "~/components/nav-desktop"
import NavMobile from "~/components/nav-mobile"
import DarkModeButton from "~/components/dark-mode-button"

const Navbar = () => {
  return (
    <header className="sm:mt-3">
      {/* Navbar Logo Fixed Mobile */}
      <div className="fixed sm:static bg-white dark:bg-primary-800 sm:dark:bg-transparent sm:bg-transparent shadow-sm dark:shadow-sm-dark sm:dark:shadow-none sm:shadow-none  h-7.5 w-full flex justify-center items-center z-10">
        <div className="w-full max-w-70 flex justify-between items-center sm:justify-between px-2.5 sm:px-5.5">
          <Link href="/">
            <a className="w-11.2">
              <img
                src="/svg_image/logo-abraham-calsin.svg"
                alt="Abraham Calsin"
                className="w-full block dark:filter dark:brightness-0 dark:contrast-200 dark:invert"
              />
            </a>
          </Link>

          <NavDesktop />

          <div className="flex items-center justify-center gap-1.5 sm:hidden">
            <a
              href="https://resume.abrahamcalsin.com"
              target="_blank"
              className="bg-secondary dark:text-primary px-1.5 py-0.5 shadow-sm dark:shadow-sm-dark rounded-rds-1.1 font-extraBold sm:hidden"
            >
              Resume
            </a>

            <DarkModeButton />
          </div>
        </div>
      </div>

      <NavMobile />
    </header>
  )
}
export default Navbar
