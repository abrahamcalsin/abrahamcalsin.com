import React, { useState, useEffect } from 'react'

import Navbar from '~/components/navbar'
import Footer from '~/components/footer'

type MainLayoutProps = {
	children: React.ReactNode
}

export const MainLayout = (props: MainLayoutProps) => {
	const { children } = props

	const [fullLoad, setFullLoad] = useState(false)

	useEffect(() => {
		setFullLoad(true)
	}, [])

	const style = {
		transition: 'transform 500ms ease-in-out, opacity 500ms ease-in-out',
	}

	return (
		<div>
			<Navbar />
			<main
				className={`container pt-11 sm:pt-0 ${
					fullLoad ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
				}`}
				style={style}
			>
				{children}
			</main>
			<Footer />
		</div>
	)
}
