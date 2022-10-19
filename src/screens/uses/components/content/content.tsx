import * as React from 'react'
import { Box, Heading, Link, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import RouterLink from 'next/link'

import { Introduction } from '~/components/introduction'

interface HyperlinkProps {
  href: string
  children: React.ReactNode
}

const Hyperlink = (props: HyperlinkProps) => {
  const { href, children } = props

  return (
    <Link
      href={href}
      fontWeight="bold"
      fontStyle="italic"
      className="link-underline"
      referrerPolicy="no-referrer"
      isExternal
      _hover={{
        textDecor: 'none',
      }}
    >
      {children}
    </Link>
  )
}

export function Content() {
  return (
    <Box
      textColor="primary.600"
      mt={{ base: '0', sm: '20' }}
      mb={{ base: '0', sm: '8' }}
      _dark={{ textColor: 'inherit' }}
    >
      <Introduction title="Usos">
        <Text>
          En esta sección verás una lista de programas que uso actualmente para mi trabajo diario como{' '}
          <b>Frontend Developer.</b>
        </Text>
      </Introduction>
      <Heading
        as="h3"
        fontSize="2xl"
        fontWeight="black"
        textColor="primary.800"
        my="5"
        _dark={{
          color: 'primary.200',
        }}
      >
        Editor + Terminal:
      </Heading>
      <UnorderedList>
        <ListItem>
          Actualmente uso <Hyperlink href="https://code.visualstudio.com">Visual Studio Code</Hyperlink> como mi editor
          principal +{' '}
          <RouterLink href="blog/mis-extensiones-en-vscode">
            <Link
              fontWeight="bold"
              fontStyle="italic"
              className="link-underline"
              _hover={{
                textDecor: 'none',
              }}
            >
              extensiones
            </Link>
          </RouterLink>
        </ListItem>
        <ListItem>
          La fuente que uso es <Hyperlink href="https://github.com/microsoft/cascadia-code">Cascadia Code</Hyperlink> +
          ligaduras
        </ListItem>
        <ListItem>
          <Hyperlink href="https://docs.microsoft.com/en-us/windows/wsl/install">Windows Subsystem for Linux</Hyperlink>
        </ListItem>
        <ListItem>
          La terminal que uso es{' '}
          <Hyperlink href="https://www.microsoft.com/en-us/p/windows-terminal/9n0dx20hk701?activetab=pivot:overviewtab">
            Windows Terminal
          </Hyperlink>
        </ListItem>
      </UnorderedList>
      <Heading
        as="h3"
        fontSize="2xl"
        fontWeight="black"
        textColor="primary.800"
        my="5"
        _dark={{
          color: 'primary.200',
        }}
      >
        Aplicaciones de escritorio:
      </Heading>
      <UnorderedList>
        <ListItem>
          Como mi navegador personal, me encuentro utilizando entre{' '}
          <Hyperlink href="https://www.google.com/intl/es-419/chrome/">Chrome</Hyperlink> y{' '}
          <Hyperlink href="https://brave.com/es/download/">Brave Browser</Hyperlink>
        </ListItem>
        <ListItem>
          Utilizo <Hyperlink href="https://insomnia.rest/download">Insomnia</Hyperlink> para las pruebas de consumo de
          las APIs Rest
        </ListItem>
        <ListItem>
          Para gestionar todos mis diseños utilizo <Hyperlink href="https://www.figma.com/">Figma</Hyperlink>, tanto en
          el escritorio como en la web
        </ListItem>
        <ListItem>
          Utilizo <Hyperlink href="https://inkscape.org/release/inkscape-1.1.2/">Inkscape</Hyperlink> para la creación
          de vectores como iconos, logotipos y +
        </ListItem>
        <ListItem>
          Realizo pruebas rápidas de mi código JavaScript con <Hyperlink href="https://runjs.app/">Runjs</Hyperlink>
        </ListItem>
        <ListItem>
          Para el ajuste del color de mi pantalla utilizo <Hyperlink href="https://justgetflux.com/">f.lux</Hyperlink>
        </ListItem>
        <ListItem>
          En ocasiones utilizo <Hyperlink href="https://obsproject.com/es/download">OBS</Hyperlink> para grabar la
          pantalla de mi ordenador
        </ListItem>
      </UnorderedList>
      <Heading
        as="h3"
        fontSize="2xl"
        fontWeight="black"
        textColor="primary.800"
        my="5"
        _dark={{
          color: 'primary.200',
        }}
      >
        Flujo de trabajo:
      </Heading>
      <UnorderedList>
        <ListItem>
          Utilizo <Hyperlink href="https://www.notion.so/">Notion</Hyperlink> para gestionar mis tareas
        </ListItem>
        <ListItem>
          Gestiono mi tiempo de trabajo y estudio con{' '}
          <Hyperlink href="https://time-to-focus.yonycalsin.com/">Time To Focus</Hyperlink>
        </ListItem>
        <ListItem>
          Para concentrarme en el trabajo escucho música lofi con{' '}
          <Hyperlink href="https://lofigenerator.com/">lofigenerator</Hyperlink>
        </ListItem>
        <ListItem>
          En cuanto a la comunicación en equipo, utilizo <Hyperlink href="https://slack.com/">Slack</Hyperlink>
        </ListItem>
        <ListItem>
          Utilizo <Hyperlink href="https://discord.com/">Discord</Hyperlink> para unirme a grupos de programacion como
          el de <Hyperlink href="https://discord.gg/midudev">@midudev</Hyperlink>,{' '}
          <Hyperlink href="https://discord.gg/RAGKcWAY">@goncy</Hyperlink>, <i>@holamundo</i>,{' '}
          <Hyperlink href="https://discord.com/invite/mouredev">@mouredev</Hyperlink> y +
        </ListItem>
      </UnorderedList>
      <Heading
        as="h3"
        fontSize="2xl"
        fontWeight="black"
        textColor="primary.800"
        my="5"
        _dark={{
          color: 'primary.200',
        }}
      >
        Otros:
      </Heading>
      <UnorderedList>
        <ListItem>
          Para mejorar mi flujo de trabajo con github uso la{' '}
          <Hyperlink href="https://cli.github.com/">CLI de GitHub</Hyperlink>
        </ListItem>
        <ListItem>
          Utilizo <Hyperlink href="https://git-scm.com/">git</Hyperlink> para el control de versiones de mis proyectos
        </ListItem>
        <ListItem>
          Para mantener mis commits semánticamente ordenados uso{' '}
          <Hyperlink href="https://www.npmjs.com/package/git-cz">git-cz</Hyperlink>
        </ListItem>
      </UnorderedList>
    </Box>
  )
}
