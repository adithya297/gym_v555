import { motion } from 'framer-motion'
import { FiArrowRight, FiCheck } from 'react-icons/fi'
import { TRAINER, TRAINING_BENEFITS } from '../data/content'
import {
  fadeUp,
  slideInLeft,
  slideInRight,
  staggerContainer,
  viewportOnce,
} from '../utils/motion'
import LazyImage from './ui/LazyImage'

export default function PersonalTraining() {
  return (
    <section id="personal-training" className="section relative bg-ink-soft">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Image */}
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative order-2 lg:order-1"
        >
          <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-ember/20 via-transparent to-gold/20 blur-2xl" />
          <LazyImage
            src={TRAINER.image}
            alt={TRAINER.imageAlt}
            className="aspect-[5/6] rounded-[2rem] border border-white/10 shadow-glass"
          />
          <div className="absolute -left-4 top-8 glass-strong rounded-2xl px-5 py-4 shadow-glass sm:-left-8">
            <p className="text-sm font-semibold text-white">1-on-1 Coaching</p>
            <p className="text-xs text-white/55">Form • Focus • Faster results</p>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          variants={slideInRight}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="order-1 lg:order-2"
        >
          <span className="eyebrow">
            <span className="h-px w-8 bg-gold/60" />
            Personal Training
          </span>
          <h2 className="mt-4 text-3xl leading-tight sm:text-4xl md:text-5xl">
            Your Goals, <span className="text-gradient-gold">Our Obsession</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/65 md:text-lg">
            Get matched with an elite coach who designs every rep, meal and
            milestone around you. No guesswork, no plateaus — just a proven path
            to the strongest version of yourself.
          </p>

          <motion.ul
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-8 grid gap-4 sm:grid-cols-2"
          >
            {TRAINING_BENEFITS.map(({ icon: Icon, title, text }) => (
              <motion.li
                key={title}
                variants={fadeUp}
                className="flex items-start gap-3"
              >
                <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-gold/15 text-gold">
                  <FiCheck size={15} />
                </span>
                <div>
                  <p className="flex items-center gap-2 text-sm font-semibold text-white">
                    <Icon className="text-gold/70" size={15} />
                    {title}
                  </p>
                  <p className="mt-0.5 text-xs leading-relaxed text-white/50">
                    {text}
                  </p>
                </div>
              </motion.li>
            ))}
          </motion.ul>

          <div className="mt-10">
            <a href="#contact" className="btn-ember">
              Book Your Personal Trainer <FiArrowRight />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
