import * as React from 'react'

import Link from 'next/link'

import { Meta } from '~/components/meta'
import { TitleSection } from '~/components/title-section'
import { MainLayout } from '~/layouts'

interface HyperlinkProps {
  href: string
  children: React.ReactNode
}

const Hyperlink = (props: HyperlinkProps) => {
  const { href, children } = props

  return (
    <a href={href} className={'italic !font-bold link-underline'} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  )
}

const Uses = () => {
  return (
    <MainLayout>
      <Meta title="Usos" />
      <div className="mt-0 sm:mt-11.2 sm:mb-3.7 text-primary-600 dark:text-inherit">
        <TitleSection title="Usos" externalLinkButton={false} />
        <p>
          En esta sección verás una lista de programas que uso actualmente para mi trabajo diario como{' '}
          <b>Frontend Developer.</b>
        </p>
        <h3>Editor + Terminal:</h3>
        <ul>
          <li>
            Actualmente uso <Hyperlink href="https://code.visualstudio.com">Visual Studio Code</Hyperlink> como mi
            editor principal +{' '}
            <Link href="https://abrahamcalsin.com/blog/mis-extensiones-en-vscode">
              <a className="font-bold italic link-underline">extensiones</a>
            </Link>
          </li>
          <li>
            La fuente que uso es <Hyperlink href="https://github.com/microsoft/cascadia-code">Cascadia Code</Hyperlink>{' '}
            + ligaduras
          </li>
          <li>
            <Hyperlink href="https://docs.microsoft.com/en-us/windows/wsl/install">
              Windows Subsystem for Linux
            </Hyperlink>
          </li>
          <li>
            La terminal que uso es{' '}
            <Hyperlink href="https://www.microsoft.com/en-us/p/windows-terminal/9n0dx20hk701?activetab=pivot:overviewtab">
              Windows Terminal
            </Hyperlink>
          </li>
        </ul>
        <h3>Aplicaciones de escritorio:</h3>
        <ul>
          <li>
            Como mi navegador personal, me encuentro utilizando entre{' '}
            <Hyperlink href="https://www.google.com/intl/es-419/chrome/">Chrome</Hyperlink> y{' '}
            <Hyperlink href="https://brave.com/es/download/">Brave Browser</Hyperlink>
          </li>
          <li>
            Utilizo <Hyperlink href="https://insomnia.rest/download">Insomnia</Hyperlink> para las pruebas de consumo de
            las APIs Rest
          </li>
          <li>
            Para gestionar todos mis diseños utilizo <Hyperlink href="https://www.figma.com/">Figma</Hyperlink>, tanto
            en el escritorio como en la web
          </li>
          <li>
            Utilizo <Hyperlink href="https://inkscape.org/release/inkscape-1.1.2/">Inkscape</Hyperlink> para la creación
            de vectores como iconos, logotipos y +
          </li>
          <li>
            Realizo pruebas rápidas de mi código JavaScript con <Hyperlink href="https://runjs.app/">Runjs</Hyperlink>
          </li>
          <li>
            Para el ajuste del color de mi pantalla utilizo <Hyperlink href="https://justgetflux.com/">f.lux</Hyperlink>
          </li>
          <li>
            En ocasiones utilizo <Hyperlink href="https://obsproject.com/es/download">OBS</Hyperlink> para grabar la
            pantalla de mi ordenador
          </li>
        </ul>
        <h3>Flujo de trabajo:</h3>
        <ul>
          <li>
            Utilizo <Hyperlink href="https://www.notion.so/">Notion</Hyperlink> para gestionar mis tareas
          </li>
          <li>
            Gestiono mi tiempo de trabajo y estudio con{' '}
            <Hyperlink href="https://time-to-focus.yonycalsin.com/">Time To Focus</Hyperlink>
          </li>
          <li>
            Para concentrarme en el trabajo escucho música lofi con{' '}
            <Hyperlink href="https://lofigenerator.com/">lofigenerator</Hyperlink>
          </li>
          <li>
            En cuanto a la comunicación en equipo, utilizo <Hyperlink href="https://slack.com/">Slack</Hyperlink>
          </li>
          <li>
            Utilizo <Hyperlink href="https://discord.com/">Discord</Hyperlink> para unirme a grupos de programacion como
            el de <Hyperlink href="https://discord.gg/midudev">@midudev</Hyperlink>,{' '}
            <Hyperlink href="https://discord.gg/RAGKcWAY">@goncy</Hyperlink>, <i>@holamundo</i>,{' '}
            <Hyperlink href="https://discord.com/invite/mouredev">@mouredev</Hyperlink> y +
          </li>
        </ul>
        <h3>Otros:</h3>
        <ul>
          <li>
            Para mejorar mi flujo de trabajo con github uso la{' '}
            <Hyperlink href="https://cli.github.com/">CLI de GitHub</Hyperlink>
          </li>
          <li>
            Utilizo <Hyperlink href="https://git-scm.com/">git</Hyperlink> para el control de versiones de mis proyectos
          </li>
          <li>
            Para mantener mis commits semánticamente ordenados uso{' '}
            <Hyperlink href="https://www.npmjs.com/package/git-cz">git-cz</Hyperlink>
          </li>
        </ul>
      </div>
    </MainLayout>
  )
}
export default Uses
