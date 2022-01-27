import { NextjsTechnology } from '~/components/svgs/nextjs-technology'
import { ReactjsTechnology } from '~/components/svgs/reactjs-technology'
import { TailwindcssTechnology } from '~/components/svgs/tailwindcss-technology'
import { TypescriptTechnology } from '~/components/svgs/typescript-technology'
import { VercelTechnology } from '~/components/svgs/vercel-technology'

interface TechnologyProps {
	href: string
	technology: React.ReactElement
}

function Technology(props: TechnologyProps) {
	const { href, technology } = props

	return (
		<a
			href={href}
			target="_blank"
			className="inline-flex w-9.5 h-4.5 sm:w-11.2 sm:h-5.2 px-1 sm:px-1.5 text-primary-800 dark:text-primary-200 bg-primary-100 dark:bg-secondary/10 rounded-md border-px border-primary-600 dark:border-secondary transition-opacity hover:opacity-80"
		>
			{technology}
		</a>
	)
}

export const PillTechnologies = () => {
	return (
		<div className="flex flex-wrap gap-1 sm:gap-1.5">
			<Technology href="https://reactjs.org" technology={<ReactjsTechnology />} />
			<Technology href="https://nextjs.org" technology={<NextjsTechnology />} />
			<Technology
				href="https://www.typescriptlang.org"
				technology={<TypescriptTechnology />}
			/>
			<Technology href="https://tailwindcss.com" technology={<TailwindcssTechnology />} />
			<Technology href="https://vercel.com" technology={<VercelTechnology />} />
		</div>
	)
}
