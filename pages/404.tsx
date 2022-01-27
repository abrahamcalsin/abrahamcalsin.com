import Link from 'next/link'
import { MainLayout } from '~/layouts/main.layout'
import { Meta } from '~/components/meta'

const custom404 = () => {
	return (
		<MainLayout>
			<Meta title="404" />

			<div className="flex flex-col justify-center items-center text-3xl text-center mx-auto mb-9.5 mt-0.7 sm:my-13 font-black">
				<h1>404</h1>

				<p>Página No Encontrada</p>

				<Link href="/">
					<a className="bg-secondary w-25.5 text-base rounded-full shadow-lg shadow-primary/5 py-1.5 px-2.2 mt-2.2 hover:opacity-80 sm:w-31.2">
						{' '}
						Volver a Inicio
					</a>
				</Link>
			</div>
		</MainLayout>
	)
}
export default custom404
