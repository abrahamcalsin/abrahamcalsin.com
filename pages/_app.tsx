import type { AppProps } from 'next/dist/shared/lib/router/router'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import NProgress from 'nprogress'

import * as ga from '~/lib/ga'

import '~/assets/css/tailwind-css.css'
import '~/styles/globals.css'
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

	return <Component {...pageProps} />
}

export default MyApp
