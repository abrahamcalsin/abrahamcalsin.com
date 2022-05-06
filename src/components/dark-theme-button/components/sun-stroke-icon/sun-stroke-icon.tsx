import * as React from 'react'

import { motion } from 'framer-motion'

import { MOTION_TRANSITION } from '~/lib/constants/motion'

interface SunStrokeIconProps {
  className?: string
}

const coreVariants = {
  initial: { opacity: 0, rotate: -90, y: 10 },
  animate: { opacity: 1, origin: 'bottom', rotate: -0, y: 0, transition: MOTION_TRANSITION },
}

export function SunStrokeIcon(props: SunStrokeIconProps) {
  const { className } = props

  return (
    <motion.svg
      className={className}
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      initial="initial"
      animate="animate"
      variants={coreVariants}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </motion.svg>
  )
}
