import Link from 'next/link'

import { MainLayout } from '~/layouts/main.layout'
import { Meta } from '~/components/meta'
import { TitleSection } from '~/components/title-section'
import { PillTechnologies } from '~/components/pill-technologies'
import { PillContactLink } from '~/components/pill-contact-link'
import { OctocatStrokeIcon, LinkedinStrokeIcon, TwitterStrokeIcon, EmailStrokeIcon } from '~/components/svgs/icons'

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
          Hey, hola! Soy Abraham Calsin una persona autodidacta, me apasiona la programación, actualmente me desempeño
          como desarrollador frontend, creo proyectos de código abierto.
        </p>
        <p>
          A lo largo de mi aventura en el mundo del desarrollo web, me involucre en el desarrollo de varios proyectos,
          proponiéndome retos, los cuales me enseñaron a corregir mis propios errores al desarrollar un Sitio Web.
          Puedes ver mi trabajo en la sección de
          <Link href="/projects">
            <a className="font-bold link-underline ml-0.7">Proyectos.</a>
          </Link>
        </p>
        <h3>Habilidades:</h3>
        <p>Estas son algunas de mis tecnologías favoritas.</p>
        <PillTechnologies />
        <h3 className="mt-2.5">Contacto:</h3>
        <p>Siempre puedes contactarme por los siguientes medios.</p>
        <div className="grid grid-cols-2 sm:grid-cols-auto-fill gap-1 sm:gap-3">
          <PillContactLink
            svgIcon={<EmailStrokeIcon />}
            socialNetworkName="Email"
            href="mailto:hello.abrahamcalsin@gmail.com"
            username="@abrahamcalsin"
          />
          <PillContactLink
            svgIcon={<LinkedinStrokeIcon />}
            socialNetworkName="LinkedIn"
            href="https://www.linkedin.com/in/abrahamcalsin"
            username="@abrahamcalsin"
          />
          <PillContactLink
            svgIcon={<TwitterStrokeIcon />}
            socialNetworkName="Twitter"
            href="https://twitter.com/abraham_calsin"
            username="@abraham_calsin"
          />
          <PillContactLink
            svgIcon={<OctocatStrokeIcon />}
            socialNetworkName="GitHub"
            href="https://github.com/abrahamcalsin"
            username="@abrahamcalsin"
          />
        </div>
      </div>
    </MainLayout>
  )
}
export default AboutMe
