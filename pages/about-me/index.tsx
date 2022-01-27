import Link from 'next/link'

import { MainLayout } from '~/layouts/main.layout'
import { Meta } from '~/components/meta'
import { TitleSection } from '~/components/title-section'
import { PillTechnologies } from '~/components/pill-technologies'
import { OctocatStrokeIcon } from '~/components/svgs/icons/octocat-stroke-icon'
import { LinkedinStrokeIcon } from '~/components/svgs/icons/linkedin-stroke-icon'
import { TwitterStrokeIcon } from '~/components/svgs/icons/twitter-stroke-icon'
import { EmailStrokeIcon } from '~/components/svgs/icons/email-stroke-icon'

interface ContactLinks {
	svgIcon: React.ReactElement
	nameIcon: string
	href: string
	username: string
}

const ContactLinks = (props: ContactLinks) => {
	const { svgIcon, nameIcon, href, username } = props

	return (
		<div className="flex items-center mb-0.7 sm:mb-1.2">
			<div className="w-2.5 mr-0.7">{svgIcon}</div>
			<p className="mb-0 mr-1 font-bold leading-none">{nameIcon}</p>
			<a href={href} target="_blank" className="font-medium link-underline">
				{username}
			</a>
		</div>
	)
}

const AboutMe = () => {
	return (
		<MainLayout>
			<Meta title="Sobre Mi" />

			<div className="mt-0 sm:mt-11.2 sm:mb-3.7 text-primary-600 dark:text-inherit">
				<TitleSection
					title="Sobre Mi"
					externalLinkButton={true}
					href="https://resume.abrahamcalsin.com"
					linkText="Para más detalles, consulta mi"
					linkTextBold="CV"
				/>

				<p>
					Hey, hola! Soy Abraham Calsin una persona autodidacta, me apasiona la programación,
					actualmente me desempeño como desarrollador frontend, creo proyectos de código
					abierto.
				</p>

				<p>
					A lo largo de mi aventura en el mundo del desarrollo web, me involucre en el
					desarrollo de varios proyectos, proponiéndome retos, los cuales me enseñaron a
					corregir mis propios errores al desarrollar un Sitio Web. Puedes ver mi trabajo en la
					sección de
					<Link href="/projects">
						<a className="font-bold link-underline ml-0.7">Proyectos.</a>
					</Link>
				</p>

				<h3>Habilidades:</h3>

				<p>Estas son algunas de mis tecnologías favoritas.</p>

				<PillTechnologies />

				<h3 className="mt-2.5">Contacto:</h3>

				<p>Siempre puedes contactarme por los siguientes medios.</p>

				<ContactLinks
					svgIcon={<EmailStrokeIcon />}
					nameIcon="Email:"
					href="mailto:hello.abrahamcalsin@gmail.com"
					username="@abrahamcalsin"
				/>

				<ContactLinks
					svgIcon={<LinkedinStrokeIcon />}
					nameIcon="LinkedIn:"
					href="https://github.com/abrahamcalsin"
					username="@abrahamcalsin"
				/>

				<ContactLinks
					svgIcon={<TwitterStrokeIcon />}
					nameIcon="Twitter:"
					href="https://github.com/abrahamcalsin"
					username="@abraham_calsin"
				/>

				<ContactLinks
					svgIcon={<OctocatStrokeIcon />}
					nameIcon="GitHub:"
					href="https://github.com/abrahamcalsin"
					username="@abrahamcalsin"
				/>
			</div>
		</MainLayout>
	)
}
export default AboutMe
