import React from "react"
import MainLayout from "../../components/layout"
import Head from "next/head"
// Font Awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTags, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

import Timline from "../../components/timeline"

const ContentProject = (props) => {
  const {
    titleProject,
    descriptionProject,
    tagLanguajes,
    hrefProjectDemo,
    hrefProjectCode,
  } = props

  return (
    <div className="flex gap-2.2 sm:gap-3.7 mb-6.5">
      <Timline />
      <div className="-mt-0.7">
        <h1 className="leading-1.2 sm:leading-normal text-xsm-1.3 sm:text-3xl font-extraBold">
          {titleProject}
        </h1>
        <div className="flex items-center text-secondary-600 text-xs sm:text-sm">
          <span className="transform -scale-x-1 mr-1 text-xs-1.3 sm:text-xs">
            <FontAwesomeIcon icon={faTags} />
          </span>{" "}
          <p className="font-extraBold">{tagLanguajes}</p>
        </div>
        <p className="text-sm sm:text-xl font-medium">{descriptionProject}</p>
        <a
          href={hrefProjectDemo}
          target="__blank"
          rel="noreferrer"
          className="underline font-extraBold mr-1 mt-1 inline-block bg-secondary py-1 px-2 rounded-rds-1.1 shadow-sm text-xs-1.3 transition duration-300 hover:opacity-80 sm:text-sm"
        >
          VER DEMO{" "}
          <span className="text-xs ml-px">
            <FontAwesomeIcon icon={faExternalLinkAlt} />
          </span>
        </a>
        {hrefProjectCode ? (
          <a
            href={hrefProjectCode}
            target="__blank"
            rel="noreferrer"
            className="underline font-extraBold mt-1 inline-block bg-secondary py-1 px-2 rounded-rds-1.1 shadow-sm text-xs-1.3 transition duration-300 hover:opacity-80 sm:text-sm"
          >
            VER CÓDIGO{" "}
            <span className="text-xs ml-px">
              <FontAwesomeIcon icon={faGithub} />
            </span>
          </a>
        ) : null}
      </div>
    </div>
  )
}

const Projects = () => {
  return (
    <MainLayout>
      <Head>
        <title>Proyectos - Abraham Calsin</title>
      </Head>
      <div className="mt-0 mb-3.7 sm:pt-7.5">
        <div className="bg-primary w-9.5 h-0.2 my-0.7 sm:m-0 sm:mb-1 sm:h-0.5 sm:w-13"></div>
        <h1 className="font-extraBold text-xsm-1.3 sm:text-sm-1.4">
          {"{"}Proyectos{"}"}
        </h1>
        <p className="text-sm leading-loose font-medium mt-0.7 px-0 sm:text-xl">
          En esta sección puedes ver algunos de mis proyectos más destacados. También
          puedes ver más proyectos en mi{" "}
          <a
            href="https://github.com/abrahamcalsin"
            target="__blank"
            rel="noreferrer"
            className="font-bold underline"
          >
            GitHub.
          </a>
        </p>
        <div className="relative my-5.5 sm:my-9.5 timeline">
          <ContentProject
            dateProject={new Date("09/22/2021")}
            titleProject="Tasks List"
            tagLanguajes="React.js, Tailwind."
            descriptionProject="Tasks List is an open source web application that allows you to manage your day to day tasks. Create new tasks, mark them as completed and even delete them."
            hrefProjectDemo="https://tasks-list.abrahamcalsin.com"
            hrefProjectCode="https://github.com/abrahamcalsin/task-list"
          />
          <ContentProject
            dateProject={new Date("09/03/2021")}
            titleProject="Munay Mikhuy Anka"
            tagLanguajes="Next.js, Sass"
            descriptionProject="Sitio web y/o maqueta web de un restaurante, que ofrece platos típicos de la ciudad de Puno - Perú."
            hrefProjectDemo="https://munay-mikhuy-anka.abrahamcalsin.com"
            hrefProjectCode="https://github.com/abrahamcalsin/munay-mikhuy-anka"
          />
          <ContentProject
            dateProject={new Date("08/27/2021")}
            titleProject="Páginas Web Ganadoras"
            tagLanguajes="HTML, CSS, JavaScript"
            descriptionProject="Páginas Web Ganadoras, es un template y/o página-web open source, inspirado en (paginasganadoras.com)."
            hrefProjectDemo="https://paginas-web-ganadoras.abrahamcalsin.com"
            hrefProjectCode="https://github.com/abrahamcalsin/paginas-web-ganadoras"
          />
          <ContentProject
            dateProject={new Date("08/24/2021")}
            titleProject="Cyber Security Tech"
            tagLanguajes="HTML, CSS, JavaScript"
            descriptionProject="Cyber Security Tech, es un template y/o maqueta, open source."
            hrefProjectDemo="https://cyber-security-tech.abrahamcalsin.com"
            hrefProjectCode="https://github.com/abrahamcalsin/cyber-security-tech"
          />
          <ContentProject
            dateProject={new Date("06/09/2021")}
            titleProject="Motivación"
            tagLanguajes="HTML, CSS, JavaScript"
            descriptionProject="Lecciones del día, en imágenes, sobre desarrollo personal, negocios, liderazgo, trabajo en equipo, etc. Sólo hay que hacer un clic para descargarlas."
            hrefProjectDemo="https://motivation-image.abrahamcalsin.com"
          />
          <ContentProject
            dateProject={new Date("05/13/2021")}
            titleProject="Shadow"
            tagLanguajes="HTML, CSS, JavaScript"
            descriptionProject="Shadow is an open source library, which allows a designer to choose modern shadows."
            hrefProjectDemo="https://shadow.abrahamcalsin.com"
            hrefProjectCode="https://github.com/abrahamcalsin/shadow"
          />
        </div>
      </div>
    </MainLayout>
  )
}
export default Projects
