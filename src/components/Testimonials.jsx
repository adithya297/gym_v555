import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi'
import { FaQuoteRight } from 'react-icons/fa'
import { TESTIMONIALS } from '../data/content'
import SectionHeading from './ui/SectionHeading'

const AUTO_MS = 6000

export default function Testimonials() {
  const [[index, dir], setState] = useState([0, 0])
  const [paused, setPaused] = useState(false)

  const paginate = useCallback((step) => {
    setState(([prev]) => {
      const next = (prev + step + TESTIMONIALS.length) % TESTIMONIALS.length
      return [next, step]
    })
  }, [])

  const goTo = (i) => setState(([prev]) => [i, i > prev ? 1 : -1])

  useEffect(() => {
    if (paused) return
    const t = setInterval(() => paginate(1), AUTO_MS)
    return () => clearInterval(t)
  }, [paginate, paused])

  const active = TESTIMONIALS[index]

  const variants = {
    enter: (d) => ({ opacity: 0, x: d > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit: (d) => ({ opacity: 0, x: d > 0 ? -60 : 60 }),
  }

  return (
    <section id="testimonials" className="section relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-radial-gold" />
      <div className="container-x">
        <SectionHeading
          eyebrow="Member Stories"
          title="What Our"
          highlight="Members Say"
          subtitle="Real people. Real transformations. Real V555 energy."
        />

        <div
          className="relative mx-auto mt-14 max-w-3xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative min-h-[320px] sm:min-h-[280px]">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.blockquote
                key={index}
                custom={dir}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="glass-strong relative rounded-3xl p-8 text-center shadow-glass sm:p-10"
              >
                <FaQuoteRight className="absolute right-7 top-7 text-4xl text-gold/15" />

                <div className="mx-auto mb-5 flex justify-center gap-1 text-gold">
                  {Array.from({ length: active.rating }).map((_, i) => (
                    <FiStar key={i} fill="currentColor" />
                  ))}
                </div>

                <p className="text-lg leading-relaxed text-white/85 sm:text-xl">
                  “{active.review}”
                </p>

                <div className="mt-7 flex items-center justify-center gap-4">
                  <img
                    src={active.photo}
                    alt={active.name}
                    loading="lazy"
                    className="h-14 w-14 rounded-full border-2 border-gold/40 object-cover"
                  />
                  <div className="text-left">
                    <p className="font-semibold text-white">{active.name}</p>
                    <p className="text-sm text-gold/80">{active.role}</p>
                  </div>
                </div>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-center gap-5">
            <button
              type="button"
              onClick={() => paginate(-1)}
              aria-label="Previous testimonial"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:border-gold hover:text-gold"
            >
              <FiChevronLeft size={20} />
            </button>

            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index ? 'w-7 bg-gold' : 'w-2 bg-white/25 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => paginate(1)}
              aria-label="Next testimonial"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:border-gold hover:text-gold"
            >
              <FiChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
