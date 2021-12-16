import Link from "next/link"
import Head from "next/head"

import MainLayout from "~/components/layout"
import { Meta } from "~/components/meta"

interface ContactLinkProps {
  href: string
  iconSrc: string
  alt: string
  content: string
  iconLink: string
}

const ContactLink = (props: ContactLinkProps) => {
  const { href, iconSrc, alt, content, iconLink } = props

  return (
    <li className="flex items-center my-0.7 sm:my-1.2 sm:text-xsm-1.2 text-sm">
      <img
        src={iconSrc}
        className="w-2.2 sm:w-2.5 dark:brightness-0 dark:contrast-200 dark:invert"
        alt={alt}
      />
      <span className="font-extraBold mx-1">{content}</span>
      <a href={href} target="_blank" rel="noreferrer" className="link-underline">
        {iconLink}
      </a>
    </li>
  )
}

const AboutMe = () => {
  return (
    <MainLayout>
      <Meta title="Sobre Mi" />

      <div className="mt-0 sm:mt-11.2 sm:mb-3.7">
        <div className="bg-primary dark:bg-white w-9.5 h-0.2 my-0.7 sm:m-0 sm:mb-1 sm:h-0.5 sm:w-13"></div>

        <h1 className="font-extraBold text-xsm-1.3 sm:text-sm-1.4">
          {"{"}Sobre Mi{"}"}
        </h1>

        <p className="text-sm leading-6 font-medium mt-0.7 px-0 sm:text-xl sm:leading-9">
          Hey, hola! Soy Abraham Calsin un individuo autodidacta, me apasiona la
          programación, actualmente me desempeño como desarrollador frontend, creo
          proyectos de código abierto, escribo en JavaScript moderno, React.js, Next.js y
          TypeScript.
        </p>
        <p className="text-sm leading-6 font-medium mt-0.7 px-0 sm:text-xl sm:leading-9">
          Me fascina el asunto del trabajo en equipo, a lo largo de mi aventura en el
          mundo del desarrollo web, me involucre en el desarrollo de varios proyectos,
          proponiéndome retos, los cuales me enseñaron a corregir mis propios errores al
          desarrollar un Sitio Web. Puedes ver mi trabajo en la sección de
          <Link href="/projects">
            <a className="font-bold link-underline ml-0.7">Proyectos.</a>
          </Link>
        </p>

        <p className="font-semiBold text-xsm-1.2 sm:text-xsm-1.3 mt-5.5 sm:mt-6.5">
          ¿Te interesa lo que hago?, ¡Trabajemos juntos!.
          <span className="block mt-0.7 relative font-bold before:content-[' '] before:inline-block before:h-0.5 before:w-3.5 sm:before:w-3.7 before:mb-0.5 sm:before:mb-0.7 before:mr-0.7 before:rounded-full before:bg-primary dark:before:bg-white">
            Contáctame:
          </span>
        </p>

        <div className="font-semiBold my-1 mb-5.5 sm:mb-0">
          <ContactLink
            iconSrc="/icons/email.svg"
            alt="Email"
            content="Email:"
            iconLink="@abrahamcalsin"
            href="mailto:hello.abrahamcalsin@gmail.com"
          />
          <ContactLink
            iconSrc="/icons/linkedin.svg"
            alt="LinkedIn"
            content="LinkedIn:"
            href="https://www.linkedin.com/in/abrahamcalsin"
            iconLink="@abrahamcalsin"
          />
          <ContactLink
            iconSrc="/icons/twitter.svg"
            alt="Twitter"
            content="Twitter:"
            href="https://twitter.com/abraham_calsin"
            iconLink="@abraham_calsin"
          />
          <ContactLink
            iconSrc="/icons/github.svg"
            alt="GitHub"
            content="GitHub:"
            href="https://github.com/abrahamcalsin"
            iconLink="@abrahamcalsin"
          />
        </div>
      </div>
    </MainLayout>
  )
}
export default AboutMe
