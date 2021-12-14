import Link from "next/link"
import MainLayout from "~/components/layout"

const custom404 = () => {
  return (
    <MainLayout>
      <title>404 Error!</title>
      <div className="flex flex-col justify-center items-center text-3xl text-center mx-auto mb-9.5 mt-0.7 sm:my-13 sm:text-sm-1.4 font-black">
        <h1>404</h1>

        <p>Página No Encontrada</p>

        <Link href="/">
          <a className="bg-secondary w-25.5 text-base rounded-full shadow-lg shadow-primary/5 py-1.5 px-2.2 mt-2.2 hover:opacity-80 sm:w-31.2 sm:text-xsm-1.3">
            {" "}
            Volver a Inicio
          </a>
        </Link>
      </div>
    </MainLayout>
  )
}
export default custom404
