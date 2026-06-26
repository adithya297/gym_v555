import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '../../utils/motion'

/**
 * Reveal — wraps children in a scroll-triggered fade-up animation.
 * Pass `variants` to override, `delay`/`i` to stagger, `as` to change the tag.
 */
export default function Reveal({
  children,
  variants = fadeUp,
  i = 0,
  className = '',
  as = 'div',
  ...rest
}) {
  const MotionTag = motion[as] || motion.div
  return (
    <MotionTag
      className={className}
      variants={variants}
      custom={i}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}
