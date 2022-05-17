import * as React from 'react'

import { motion } from 'framer-motion'
import { MOTION_TRANSITION, MOTION_WHILE_TYPE_VARIANT } from '~/lib/constants/motion'

interface MoonFillIconProps {
  className?: string
}

const variants = {
  initial: { opacity: 0, scale: 0.8, originX: 'center', originY: 'center', rotate: -80 },
  animate: { opacity: 1, scale: 1, rotate: 0, transition: MOTION_TRANSITION },
}

export function MoonFillIcon(props: MoonFillIconProps) {
  const { className } = props

  return (
    <motion.svg
      className={`w-full ${className}`}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      variants={variants}
      initial="initial"
      animate="animate"
      whileTap={MOTION_WHILE_TYPE_VARIANT}
    >
      <path
        d="M22.9676 15.8873C22.9105 15.7017 22.7816 15.5461 22.6096 15.4552C22.4376 15.3643 22.2371 15.3456 22.051 15.4032C19.3832 16.1366 16.5275 15.3803 14.5719 13.4233C12.6169 11.4664 11.8629 8.60971 12.5986 5.94282C12.6759 5.68461 12.6052 5.40485 12.4144 5.21412C12.2242 5.02386 11.9444 4.95357 11.6862 5.03089C7.43259 6.22164 4.63589 10.2803 5.03843 14.6792C5.4405 19.0781 8.92653 22.5623 13.3259 22.962C17.7248 23.3617 21.7821 20.5631 22.9705 16.3086C23.0108 16.1713 23.0098 16.0246 22.9676 15.8873Z"
        fill="currentColor"
      />
    </motion.svg>
  )
}
