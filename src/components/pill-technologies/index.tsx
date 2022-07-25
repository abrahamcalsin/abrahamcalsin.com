import * as React from 'react'
import { Flex, Link } from '@chakra-ui/react'

import {
  NextjsTechnology,
  ReactjsTechnology,
  TailwindcssTechnology,
  TypescriptTechnology,
  VercelTechnology,
} from '~/components/svgs'

interface TechnologyProps {
  href: string
  technology: React.ReactElement
}

function Technology(props: TechnologyProps) {
  const { href, technology } = props

  return (
    <Link
      href={href}
      rel="noreferrer"
      display="inline-flex"
      bg="primary.100"
      textColor="primary.800"
      width={{ base: '76px', sm: '90px' }}
      height={{ base: '36px', sm: '42px' }}
      borderRadius="md"
      borderWidth="1px"
      borderColor="primary.600"
      px={{ base: '8px', sm: '12px' }}
      transitionProperty="opacity"
      _hover={{
        opacity: 0.8,
      }}
      _dark={{
        bg: 'transparent', // dark:bg-secondary/10
        textColor: 'primary.200',
        borderColor: 'secondary.400',
      }}
      isExternal
    >
      {technology}
    </Link>
  )
}

export function PillTechnologies() {
  return (
    <Flex flexWrap="wrap" gap={{ base: '8px', sm: '12px' }} mt="3">
      <Technology href="https://reactjs.org" technology={<ReactjsTechnology />} />
      <Technology href="https://nextjs.org" technology={<NextjsTechnology />} />
      <Technology href="https://www.typescriptlang.org" technology={<TypescriptTechnology />} />
      <Technology href="https://tailwindcss.com" technology={<TailwindcssTechnology />} />
      <Technology href="https://vercel.com" technology={<VercelTechnology />} />
    </Flex>
  )
}
