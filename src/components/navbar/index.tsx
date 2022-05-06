import NavbarMobile from '~/components/navbar-mobile'
import NavbarDesktop from '~/components/navbar-desktop'

export default function Navbar() {
  return (
    <header className="sm:mt-4.5 dark:text-primary-200">
      <NavbarDesktop />
      <NavbarMobile />
    </header>
  )
}
