import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, viewportOnce } from '../../utils/motion'

/**
 * SectionHeading — consistent eyebrow + title + subtitle block.
 */
export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  subtitle,
  align = 'center',
  className = '',
}) {
  const alignment =
    align === 'center' ? 'text-center mx-auto items-center' : 'text-left items-start'

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={`flex max-w-3xl flex-col gap-4 ${alignment} ${className}`}
    >
      {eyebrow && (
        <motion.span variants={fadeUp} className="eyebrow">
          <span className="h-px w-8 bg-gold/60" />
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        variants={fadeUp}
        className="text-3xl leading-[1.1] sm:text-4xl md:text-5xl"
      >
        {title} {highlight && <span className="text-gradient-gold">{highlight}</span>}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeUp}
          className="max-w-2xl text-base leading-relaxed text-white/60 md:text-lg"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  )
}
