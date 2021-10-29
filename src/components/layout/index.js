import Navbar from "../navbar/index"
import Footer from "../footer/index"

const MainLayout = (props) => (
  <div className="font-montserrat text-primary">
    <Navbar />
    <main className="mx-auto max-w-70 pt-13 sm:pt-0 py-3.7 px-2.5 sm:px-5.5">
      {props.children}
    </main>
    <Footer />
  </div>
)
export default MainLayout
