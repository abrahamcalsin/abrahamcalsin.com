import NavbarMobile from "~/components/navbar-mobile"
import NavbarDesktop from "~/components/navbar-desktop"

const Navbar = () => {
  return (
    <header className="sm:mt-4.5">
      <NavbarDesktop />
      <NavbarMobile />
    </header>
  )
}
export default Navbar
