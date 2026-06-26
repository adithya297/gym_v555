import { motion } from 'framer-motion'
import { FiArrowRight, FiChevronDown } from 'react-icons/fi'
import { BRAND } from '../data/content'

const HERO_IMG =
  'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1920&q=80'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
}
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      {/* Background image with gradient overlay */}
      <div className="absolute inset-0 -z-10">
        <img
          src={HERO_IMG}
          alt="Athlete training inside V555 Fitness Zone"
          fetchpriority="high"
          className="h-full w-full scale-105 object-cover"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/40 to-transparent" />
      </div>

      {/* Decorative gold glow */}
      <div className="pointer-events-none absolute -left-32 top-1/3 -z-10 h-96 w-96 rounded-full bg-gold/20 blur-[120px]" />

      <div className="container-x w-full pt-28 pb-24">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <motion.span
            variants={item}
            className="eyebrow mb-6 rounded-full border border-white/15 bg-white/5 px-4 py-2 backdrop-blur"
          >
            ★ Premium Luxury Fitness Experience
          </motion.span>

          <motion.h1
            variants={item}
            className="text-4xl font-black leading-[1.05] sm:text-6xl lg:text-7xl"
          >
            Transform Your Body.
            <br />
            <span className="text-gradient-gold">Transform Your Life.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg"
          >
            Welcome to {BRAND.name} — where world-class equipment, certified
            coaches and a relentless community push you beyond your limits in an
            environment built for champions.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap gap-4">
            <a href="#contact" className="btn-gold">
              Join Now <FiArrowRight />
            </a>
            <a href="#personal-training" className="btn-ghost">
              Book a Free Trial
            </a>
          </motion.div>

          {/* Quick proof points */}
          <motion.div
            variants={item}
            className="mt-12 flex flex-wrap gap-x-10 gap-y-4 text-sm text-white/60"
          >
            {['5000+ Members', '25+ Certified Trainers', 'Open 7 Days'].map(
              (stat) => (
                <span key={stat} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  {stat}
                </span>
              ),
            )}
          </motion.div>
        </motion.div>
      </div>

      {/* Animated scroll indicator */}
      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute inset-x-0 bottom-7 mx-auto flex w-max flex-col items-center gap-2 text-white/50 transition-colors hover:text-gold"
      >
        <span className="text-[0.65rem] uppercase tracking-widest">Scroll</span>
        <span className="flex h-9 w-5.5 justify-center rounded-full border border-white/30 p-1">
          <span className="h-2 w-1 animate-scroll-dot rounded-full bg-gold" />
        </span>
        <FiChevronDown className="animate-bounce" />
      </a>
    </section>
  )
}
