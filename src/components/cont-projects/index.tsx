import dayjs from 'dayjs'
import { dateFormat } from '~/utils'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import Tag from '~/components/tag'

export interface ProjectProps {
	projectTitle?: string
	projectDescription?: string
	tags?: string
	hrefProjectDemo?: string
	hrefProjectCode?: string
	projectDate?: Date
}

const Project = (props: ProjectProps) => {
	const {
		projectTitle,
		projectDescription,
		tags,
		hrefProjectDemo,
		hrefProjectCode,
		projectDate = new Date(),
	} = props

	return (
		<div className="flex gap-2.2 sm:gap-3.7 mb-6.5">
			<div>
				<div className="relative text-xs-1.1 sm:text-xs text-white dark:text-primary dark:font-semiBold italic bg-primary dark:bg-white h-3 w-8 sm:w-12 px-0 py-0.7 sm:py-2 flex items-center justify-center rounded arrow-left">
					<span>{dayjs(projectDate).format(dateFormat.project)}</span>
				</div>
			</div>

			<div className="mt-0.2 sm:-mt-0.7">
				<h1 className="leading-6 sm:leading-normal text-base sm:text-3xl font-extraBold">
					{projectTitle}
				</h1>

				<Tag label={tags} />

				<p className="text-sm sm:text-xl font-medium mb-0.5">{projectDescription}</p>

				{hrefProjectDemo ? (
					<a
						href={hrefProjectDemo}
						target="__blank"
						rel="noreferrer"
						className="underline font-extraBold mr-1 mt-1 inline-block bg-secondary py-1 px-2 rounded-full shadow-lg shadow-primary/5 dark:shadow-gray-900/30 text-xs-1.3 dark:text-primary transition-opacity duration-300 hover:opacity-80 sm:text-sm"
					>
						VER DEMO{' '}
						<span className="text-xs ml-px">
							<FontAwesomeIcon icon={faExternalLinkAlt} />
						</span>
					</a>
				) : null}

				{hrefProjectCode ? (
					<a
						href={hrefProjectCode}
						target="__blank"
						rel="noreferrer"
						className="underline font-extraBold mt-1 inline-block bg-secondary py-1 px-2 rounded-full shadow-lg shadow-primary/5 dark:shadow-gray-900/30 text-xs-1.3 dark:text-primary transition-opacity duration-300 hover:opacity-80 sm:text-sm"
					>
						VER CÓDIGO{' '}
						<span className="text-xs ml-px">
							<FontAwesomeIcon icon={faGithub} />
						</span>
					</a>
				) : null}
			</div>
		</div>
	)
}

const ContProjects = () => {
	return (
		<div className="relative my-5.5 sm:my-9.5 timeline">
			<Project
				projectDate={new Date('1/04/2022')}
				projectTitle="React GitHub Fork Banner"
				tags="Npm, TSDX, Styled Components, Storybook."
				projectDescription="Add a github banner with a link to the fork or repository of your project."
				hrefProjectCode="https://github.com/abrahamcalsin/github-fork-banner"
			/>
			<Project
				projectDate={new Date('12/12/2021')}
				projectTitle="Screen Quotes"
				tags="Next.js, TailwindCSS, QuotableAPI."
				projectDescription="Generate random quotes, convert them to a PNG image and download them in one click."
				hrefProjectDemo="https://screen-quotes.abrahamcalsin.com"
				hrefProjectCode="https://github.com/abrahamcalsin/screen-quotes"
			/>
			<Project
				projectDate={new Date('09/22/2021')}
				projectTitle="Tasks List"
				tags="React.js, TailwindCSS."
				projectDescription="Tasks List is an open source web application that allows you to manage your day to day tasks. Create new tasks, mark them as completed and even delete them."
				hrefProjectDemo="https://tasks-list.abrahamcalsin.com"
				hrefProjectCode="https://github.com/abrahamcalsin/task-list"
			/>
			<Project
				projectDate={new Date('09/03/2021')}
				projectTitle="Munay Mikhuy Anka"
				tags="Next.js, Sass"
				projectDescription="Sitio web y/o maqueta web de un restaurante, que ofrece platos típicos de la ciudad de Puno - Perú."
				hrefProjectDemo="https://munay-mikhuy-anka.abrahamcalsin.com"
				hrefProjectCode="https://github.com/abrahamcalsin/munay-mikhuy-anka"
			/>
			<Project
				projectDate={new Date('08/27/2021')}
				projectTitle="Páginas Web Ganadoras"
				tags="HTML, CSS, JavaScript"
				projectDescription="Páginas Web Ganadoras, es un template y/o página-web open source, inspirado en (paginasganadoras.com)."
				hrefProjectDemo="https://paginas-web-ganadoras.abrahamcalsin.com"
				hrefProjectCode="https://github.com/abrahamcalsin/paginas-web-ganadoras"
			/>
			<Project
				projectDate={new Date('08/24/2021')}
				projectTitle="Cyber Security Tech"
				tags="HTML, CSS, JavaScript"
				projectDescription="Cyber Security Tech, es un template y/o maqueta, open source."
				hrefProjectDemo="https://cyber-security-tech.abrahamcalsin.com"
				hrefProjectCode="https://github.com/abrahamcalsin/cyber-security-tech"
			/>
			<Project
				projectDate={new Date('08/07/2021')}
				projectTitle="www.abrahamcalsin.com"
				tags="Next.js, TailwindCSS, React.js, TypeScript, Dayjs"
				projectDescription="My personal website."
				hrefProjectDemo="https://abrahamcalsin.com"
				hrefProjectCode="https://github.com/abrahamcalsin/abrahamcalsin.com"
			/>
			<Project
				projectDate={new Date('06/09/2021')}
				projectTitle="Motivación"
				tags="HTML, CSS, JavaScript"
				projectDescription="Lecciones del día, en imágenes, sobre desarrollo personal, negocios, liderazgo, trabajo en equipo, etc. Sólo hay que hacer un clic para descargarlas."
				hrefProjectDemo="https://motivation-image.abrahamcalsin.com"
			/>
			<Project
				projectDate={new Date('05/13/2021')}
				projectTitle="Shadow"
				tags="HTML, CSS, JavaScript"
				projectDescription="Shadow is an open source library, which allows a designer to choose modern shadows."
				hrefProjectDemo="https://shadow.abrahamcalsin.com"
				hrefProjectCode="https://github.com/abrahamcalsin/shadow"
			/>
		</div>
	)
}

export default ContProjects
