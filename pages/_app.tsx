import { AppProps } from "next/dist/next-server/lib/router/router"
import "~/assets/css/tailwind-css.css"
import "~/styles/globals.css"

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
