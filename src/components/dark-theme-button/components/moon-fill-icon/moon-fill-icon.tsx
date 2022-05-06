import * as React from 'react'

import { motion } from 'framer-motion'

import { MOTION_TRANSITION } from '~/lib/constants/motion'

interface MonnFillIconProps {
  className?: string
}

const coreVariants = {
  initial: { opacity: 0, rotate: -90, y: 10 },
  animate: { opacity: 1, origin: 'bottom', rotate: -0, y: 0, transition: MOTION_TRANSITION },
}

export function MoonFillIcon(props: MonnFillIconProps) {
  const { className } = props

  return (
    <motion.svg
      className={className}
      width="16px"
      height="16px"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      initial="initial"
      animate="animate"
      variants={coreVariants}
    >
      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
    </motion.svg>
  )
}
