import * as React from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'

import { MOTION_TRANSITION, MOTION_WHILE_TYPE_VARIANT } from '~/lib/constants/motion'

interface SunFillIconProps {
  className?: string
}

const variants = {
  initial: { opacity: 0, scale: 0 },
  animate: { opacity: 1, scale: 1, transition: MOTION_TRANSITION },
}

const rayVariants = {
  initial: { opacity: 0, scale: 0.8, originX: 'center', originY: 'center', rotate: -80 },
  animate: { opacity: 1, scale: 1, rotate: 0, transition: MOTION_TRANSITION },
}

export function SunFillIcon(props: SunFillIconProps) {
  const { className } = props

  return (
    <motion.svg
      className={clsx('dark:text-secondary', className)}
      viewBox="0 0 30 28"
      width="30px"
      height="30px"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      whileTap={MOTION_WHILE_TYPE_VARIANT}
    >
      <motion.path
        id="main-circle"
        d="M15 19.135C17.9067 19.135 20.2631 16.7786 20.2631 13.8718C20.2631 10.965 17.9067 8.60864 15 8.60864C12.0932 8.60864 9.73682 10.965 9.73682 13.8718C9.73682 16.7786 12.0932 19.135 15 19.135Z"
        fill="currentColor"
        variants={variants}
        initial="initial"
        animate="animate"
      />
      <motion.g variants={rayVariants} initial="initial" animate="animate">
        <path
          id="circle-1"
          d="M6.57895 15.4508C7.45098 15.4508 8.15789 14.7439 8.15789 13.8718C8.15789 12.9998 7.45098 12.2929 6.57895 12.2929C5.70692 12.2929 5 12.9998 5 13.8718C5 14.7439 5.70692 15.4508 6.57895 15.4508Z"
          fill="currentColor"
        />
        <path
          id="circle-2"
          d="M10.7895 8.15789C11.6615 8.15789 12.3685 7.45098 12.3685 6.57895C12.3685 5.70692 11.6615 5 10.7895 5C9.91749 5 9.21057 5.70692 9.21057 6.57895C9.21057 7.45098 9.91749 8.15789 10.7895 8.15789Z"
          fill="currentColor"
        />
        <path
          id="circle-3"
          d="M19.2105 8.15789C20.0826 8.15789 20.7895 7.45098 20.7895 6.57895C20.7895 5.70692 20.0826 5 19.2105 5C18.3385 5 17.6316 5.70692 17.6316 6.57895C17.6316 7.45098 18.3385 8.15789 19.2105 8.15789Z"
          fill="currentColor"
        />
        <path
          id="circle-4"
          d="M23.4211 15.4508C24.2931 15.4508 25.0001 14.7439 25.0001 13.8718C25.0001 12.9998 24.2931 12.2929 23.4211 12.2929C22.5491 12.2929 21.8422 12.9998 21.8422 13.8718C21.8422 14.7439 22.5491 15.4508 23.4211 15.4508Z"
          fill="currentColor"
        />
        <path
          id="circle-5"
          d="M19.2105 22.7436C20.0826 22.7436 20.7895 22.0367 20.7895 21.1646C20.7895 20.2926 20.0826 19.5857 19.2105 19.5857C18.3385 19.5857 17.6316 20.2926 17.6316 21.1646C17.6316 22.0367 18.3385 22.7436 19.2105 22.7436Z"
          fill="currentColor"
        />
        <path
          id="circle-6"
          d="M10.7895 22.7436C11.6615 22.7436 12.3685 22.0367 12.3685 21.1646C12.3685 20.2926 11.6615 19.5857 10.7895 19.5857C9.91749 19.5857 9.21057 20.2926 9.21057 21.1646C9.21057 22.0367 9.91749 22.7436 10.7895 22.7436Z"
          fill="currentColor"
        />
      </motion.g>
    </motion.svg>
  )
}
