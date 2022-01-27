import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

import { cookieNames } from '~/utils'

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

					{/* Google Analytics */}
					<script
						async
						src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
					/>
					<script
						dangerouslySetInnerHTML={{
							__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
						}}
					/>
				</Head>
				<body className="bg-grayBlue dark:bg-primary text-primary-800 dark:text-primary-400">
					<Main />

					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
