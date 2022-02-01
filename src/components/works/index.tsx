import * as React from 'react'

import { WorkItem } from '~/components/work-item'

export const Works = () => {
  return (
    <div className="relative my-5.5 sm:my-9.5 timeline">
      <WorkItem
        date={new Date('1/04/2022')}
        title="React GitHub Fork Banner"
        tags="Npm, TSDX, Styled Components, Storybook"
        description="Add a github banner with a link to the fork or repository of your project."
        repositoryHref="https://github.com/abrahamcalsin/github-fork-banner"
        packageHref="https://www.npmjs.com/package/react-github-fork-banner"
      />
      <WorkItem
        date={new Date('12/12/2021')}
        title="Screen Quotes"
        tags="Next.js, TailwindCSS, QuotableAPI"
        description="Generate random quotes, convert them to a PNG image and download them in one click."
        webHref="https://screen-quotes.abrahamcalsin.com"
        repositoryHref="https://github.com/abrahamcalsin/screen-quotes"
      />
      <WorkItem
        date={new Date('09/22/2021')}
        title="Tasks List"
        tags="React.js, TailwindCSS"
        description="Tasks List is an open source web application that allows you to manage your day to day tasks. Create new tasks, mark them as completed and even delete them."
        webHref="https://tasks-list.abrahamcalsin.com"
        repositoryHref="https://github.com/abrahamcalsin/task-list"
      />
      <WorkItem
        date={new Date('09/03/2021')}
        title="Munay Mikhuy Anka"
        tags="Next.js, Sass"
        description="Sitio web y/o maqueta web de un restaurante, que ofrece platos típicos de la ciudad de Puno - Perú."
        webHref="https://munay-mikhuy-anka.abrahamcalsin.com"
        repositoryHref="https://github.com/abrahamcalsin/munay-mikhuy-anka"
      />
      <WorkItem
        date={new Date('08/27/2021')}
        title="Páginas Web Ganadoras"
        tags="HTML, CSS, JavaScript"
        description="Páginas Web Ganadoras, es un template y/o página-web open source, inspirado en (paginasganadoras.com)."
        webHref="https://paginas-web-ganadoras.abrahamcalsin.com"
        repositoryHref="https://github.com/abrahamcalsin/paginas-web-ganadoras"
      />
      <WorkItem
        date={new Date('08/24/2021')}
        title="Cyber Security Tech"
        tags="HTML, CSS, JavaScript"
        description="Cyber Security Tech, es un template y/o maqueta, open source."
        webHref="https://cyber-security-tech.abrahamcalsin.com"
        repositoryHref="https://github.com/abrahamcalsin/cyber-security-tech"
      />
      <WorkItem
        date={new Date('08/07/2021')}
        title="www.abrahamcalsin.com"
        tags="Next.js, TailwindCSS, React.js, TypeScript, Dayjs"
        description="My personal website."
        webHref="https://abrahamcalsin.com"
        repositoryHref="https://github.com/abrahamcalsin/abrahamcalsin.com"
      />
      <WorkItem
        date={new Date('06/09/2021')}
        title="Motivación"
        tags="HTML, CSS, JavaScript"
        description="Lecciones del día, en imágenes, sobre desarrollo personal, negocios, liderazgo, trabajo en equipo, etc. Sólo hay que hacer un clic para descargarlas."
        webHref="https://motivation-image.abrahamcalsin.com"
      />
      <WorkItem
        date={new Date('05/16/2021')}
        title="Music Player"
        tags="Typescript, TailwindCss, Gatsby, ReactJs, Remark, Youtube Player, Spotify Api"
        description="Music player without database."
        webHref="https://musica-adventista.abrahamcalsin.com"
      />
      <WorkItem
        date={new Date('05/13/2021')}
        title="Shadow"
        tags="HTML, CSS, JavaScript"
        description="Shadow is an open source library, which allows a designer to choose modern shadows."
        webHref="https://shadow.abrahamcalsin.com"
        repositoryHref="https://github.com/abrahamcalsin/shadow"
      />
    </div>
  )
}
