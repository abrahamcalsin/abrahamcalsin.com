import React from "react"
import Head from "next/head"

import MainLayout from "~/components/layout"
import ContProjects from "~/components/cont-projects"

const Projects = () => {
  return (
    <MainLayout>
      <Head>
        <title>Proyectos - Abraham Calsin</title>
      </Head>

      <div className="mt-0 mb-3.7 sm:pt-11.2">
        <div className="bg-primary dark:bg-white w-9.5 h-0.2 my-0.7 sm:m-0 sm:mb-1 sm:h-0.5 sm:w-13"></div>

        <h1 className="font-extraBold text-xsm-1.3 sm:text-sm-1.4">
          {"{"}Proyectos{"}"}
        </h1>

        <p className="text-sm leading-1.7 sm:leading-9 font-medium mt-0.7 px-0 sm:text-xl">
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

        <ContProjects />
      </div>
    </MainLayout>
  )
}
export default Projects
