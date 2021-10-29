import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
          />
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
        </Head>
        <body className="bg-grayBlue">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
