import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document"

import { cookieNames } from "~/utils"

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
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
