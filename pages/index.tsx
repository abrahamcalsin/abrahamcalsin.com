import type { NextPage } from 'next'

import { Meta } from '~/components/meta'

import { MainLayout } from '~/layouts/main.layout'
import QuoteAbrahamCalsin from '~/components/quote-abrahamcalsin'
import { SocialNetworkButton } from '~/components/social-network-button'
import { GithubSocialNetwork } from '~/components/svgs/github-social-network'
import { LinkedinSocialNetwork } from '~/components/svgs/linkedin-social-network'

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Meta />

      <div className="text-primary-500">
        <div className="text-left sm:pt-11.2 leading-7 sm:leading-10">
          <p className="mb-0.7 font-semiBold">Hola, mi nombre es</p>

          <h1 className="font-extraBold text-primary-800 dark:text-primary-200">
            Abraham Calsin.
            <span className="block text-primary-600 dark:text-primary-400 mt-0.7">Construyo cosas para la web.</span>
          </h1>

          <p className="mt-0.7 font-semiBold">
            Soy Desarrollador Frontend, apasionado por la programación, creo proyectos de código abierto.
          </p>

          <div className="flex justify-start gap-1.7">
            <SocialNetworkButton
              href="https://www.linkedin.com/in/abrahamcalsin/"
              svgSocialNetwork={<LinkedinSocialNetwork />}
            />
            <SocialNetworkButton href="https://github.com/abrahamcalsin" svgSocialNetwork={<GithubSocialNetwork />} />
          </div>
        </div>

        <QuoteAbrahamCalsin />
      </div>
    </MainLayout>
  )
}
export default Home
