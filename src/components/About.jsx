import { motion } from 'framer-motion'
import {
  fadeUp,
  slideInLeft,
  slideInRight,
  staggerContainer,
  viewportOnce,
} from '../utils/motion'
import { ABOUT, BRAND } from '../data/content'
import LazyImage from './ui/LazyImage'
import Reveal from './ui/Reveal'

export default function About() {
  return (
    <section id="about" className="section relative">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Image side */}
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative"
        >
          <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-tr from-gold/20 to-transparent blur-xl" />
          <LazyImage
            src={ABOUT.image}
            alt={ABOUT.imageAlt}
            className="aspect-[4/5] rounded-[2rem] border border-white/10 shadow-glass"
          />
          {/* Floating stat card */}
          <Reveal
            className="absolute -bottom-6 -right-4 glass-strong rounded-2xl px-6 py-5 shadow-glass sm:-right-8"
            i={2}
          >
            <p className="text-3xl font-black text-gradient-gold">12+</p>
            <p className="text-xs uppercase tracking-widest text-white/60">
              Years of Excellence
            </p>
          </Reveal>
        </motion.div>

        {/* Content side */}
        <motion.div
          variants={slideInRight}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <span className="eyebrow">
            <span className="h-px w-8 bg-gold/60" />
            About {BRAND.short}
          </span>
          <h2 className="mt-4 text-3xl leading-tight sm:text-4xl md:text-5xl">
            Where Ambition Meets{' '}
            <span className="text-gradient-gold">Iron &amp; Excellence</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/65 md:text-lg">
            {BRAND.name} isn&apos;t just a gym — it&apos;s a destination for those
            who refuse to settle. From strength and cardio to weight loss and
            muscle gain, every detail is engineered to help you perform, recover
            and transform in a space that feels as premium as your goals.
          </p>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-9 grid gap-5 sm:grid-cols-2"
          >
            {ABOUT.points.map(({ icon: Icon, title, text }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="group flex gap-4 rounded-2xl border border-white/10 bg-ink-800/60 p-5 transition-colors hover:border-gold/40"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gold/10 text-gold transition-colors group-hover:bg-gold group-hover:text-ink">
                  <Icon size={20} />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-white">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/55">
                    {text}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
