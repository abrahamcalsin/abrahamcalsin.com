import React from 'react'
import { Container } from '@chakra-ui/react'
import { motion } from 'framer-motion'

import { Footer } from './components/footer'

type MainLayoutProps = {
  children: React.ReactNode
}

export const MainLayout = (props: MainLayoutProps) => {
  const { children } = props

  const variants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <Container maxW="52rem" pt={{ base: '20', sm: '0' }}>
      <motion.main initial="initial" animate="animate" variants={variants}>
        {children}
      </motion.main>
      <Footer />
    </Container>
  )
}
