import { useEffect } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/dist/shared/lib/router/router'
import { useRouter } from 'next/router'
import NProgress from 'nprogress'

import { Navbar } from '~/layouts/main/components/navbar'
import * as ga from '~/lib/ga'
import { mainTheme } from '~/themes/main'

import '~/styles/index.css'
import '~/styles/nprogress.css'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: any) => {
      ga.pageview(url)
    }

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  useEffect(() => {
    const handleStart = () => {
      NProgress.start()
    }
    const handleStop = () => {
      NProgress.done()
    }

    router.events.on('routeChangeStart', handleStart)

    router.events.on('routeChangeComplete', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStop)
    }
  }, [])

  return (
    <ChakraProvider resetCSS theme={mainTheme}>
      <Navbar />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
