import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document"

import { cookieNames } from "~/utils/constants"

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="UTF-8" />
          <meta data-react-helmet="true" name="robots" content="index,follow" />
          <meta data-react-helmet="true" name="googlebot" content="index,follow" />
          <meta
            data-react-helmet="true"
            name="description"
            content="Desarrollador frontend, creador de proyectos de código abierto, escribiendo en JavaScript moderno, React.js, Next.js y TypeScript."
          />
          <meta
            data-react-helmet="true"
            name="image"
            content="https://avatars.githubusercontent.com/u/77748010?v=4"
          />
          <meta
            data-react-helmet="true"
            property="og:url"
            content="https://www.abrahamcalsin.com"
          />
          <meta data-react-helmet="true" property="og:type" content="website" />
          <meta data-react-helmet="true" property="og:title" content="Abraham Calsin" />
          <meta
            data-react-helmet="true"
            property="og:description"
            content="Desarrollador frontend, creador de proyectos de código abierto, escribiendo en JavaScript moderno, React.js, Next.js y TypeScript."
          />
          <meta
            data-react-helmet="true"
            property="og:image"
            content="https://avatars.githubusercontent.com/u/77748010?v=4"
          />
          <meta
            data-react-helmet="true"
            name="twitter:card"
            content="summary_large_image"
          />
          <meta
            data-react-helmet="true"
            name="twitter:creator"
            content="@abraham_calsin"
          />
          <meta
            data-react-helmet="true"
            name="twitter:title"
            content="Abraham Calsin - Maquetador Web"
          />
          <meta
            data-react-helmet="true"
            name="twitter:description"
            content="Desarrollador frontend, creador de proyectos de código abierto, escribiendo en JavaScript moderno, React.js, Next.js y TypeScript."
          />
          <meta
            data-react-helmet="true"
            name="twitter:image"
            content="https://avatars.githubusercontent.com/u/77748010?v=4"
          />

          <script
            id="theme-mode-script"
            dangerouslySetInnerHTML={{
              __html: `!function(){"use strict";var e="string"==typeof(e=localStorage.getItem("${cookieNames.THEME_MODE}"))?e:"boolean"==typeof(e=matchMedia("(prefers-color-scheme: dark)")).matches&&e.matches?"dark":"light";"dark"===e?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"),localStorage.setItem("${cookieNames.THEME_MODE}",e)}();`,
            }}
          />
        </Head>
        <body className="bg-grayBlue dark:bg-primary font-montserrat text-primary dark:text-white">
          <Main />

          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
