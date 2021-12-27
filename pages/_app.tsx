import type { AppProps } from 'next/dist/shared/lib/router/router'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import * as ga from '~/lib/ga'

import '~/assets/css/tailwind-css.css'
import '~/styles/globals.css'

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

	return <Component {...pageProps} />
}

export default MyApp
