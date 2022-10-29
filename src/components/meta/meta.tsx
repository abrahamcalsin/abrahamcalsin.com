import * as React from 'react'
import Head from 'next/head'

import { MetaProps } from '~/typings/components/meta'

export function Meta(props: MetaProps) {
  const { titleTemplate, defaultTitle, defaultDescription, defaultUrl } = {
    titleTemplate: '%s - Abraham Calsin',
    defaultTitle: 'Abraham Calsin',
    defaultUrl: 'https://www.abrahamcalsin.com',
    defaultDescription:
      'Desarrollador frontend, creador de proyectos de código abierto, escribiendo en JavaScript moderno, React.js, Next.js y TypeScript.',
  }

  const schemaOrgJSONLD = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      url: 'https://www.abrahamcalsin.com',
      name: defaultTitle,
      alternateName: defaultTitle,
    },
  ]

  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="robots" content="index,follow" />
      <meta name="googlebot" content="index,follow" />

      <meta name="description" content={props.description ? props.description : defaultDescription} />
      <meta name="image" content="https://avatars.githubusercontent.com/u/77748010?v=4" />

      <script type="application/ld+json">{JSON.stringify(schemaOrgJSONLD)}</script>

      <meta property="og:url" content={props.url ? `${defaultUrl}${props.url}` : defaultUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={defaultTitle} />
      <meta property="og:description" content={props.description ? props.description : defaultDescription} />
      <meta property="og:image" content="https://avatars.githubusercontent.com/u/77748010?v=4" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@abraham_calsin" />
      <meta name="twitter:title" content={defaultTitle} />
      <meta
        name="twitter:description"
        content="Desarrollador frontend, creador de proyectos de código abierto, escribiendo en JavaScript moderno, React.js, Next.js y TypeScript."
      />
      <meta name="twitter:image" content="https://avatars.githubusercontent.com/u/77748010?v=4" />

      <title aria-label="title">{props.title ? titleTemplate.replace('%s', props.title) : 'Abraham Calsin'}</title>
    </Head>
  )
}
