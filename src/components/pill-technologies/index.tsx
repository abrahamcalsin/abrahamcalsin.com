import * as React from 'react'
import { FaReact } from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiVercel } from 'react-icons/si'
import { Flex } from '@chakra-ui/react'

import { Technology } from './components/technology'

export function PillTechnologies() {
  return (
    <Flex flexWrap="wrap" gap={{ base: '2', sm: '2.5' }} mt="3">
      <Technology href="https://reactjs.org" label="React.js" fill="cyan.500" icon={FaReact} />
      <Technology href="https://nextjs.org" label="Next.js" fill="primary.800" icon={SiNextdotjs} />
      <Technology href="https://www.typescriptlang.org" label="TypeScript" fill="blue.500" icon={SiTypescript} />
      <Technology href="https://tailwindcss.com" label="TailwindCSS" fill="cyan.700" icon={SiTailwindcss} />
      <Technology href="https://vercel.com" label="Vercel" fill="primary.800" icon={SiVercel} />
    </Flex>
  )
}
