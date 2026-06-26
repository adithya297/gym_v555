import { motion } from 'framer-motion'
import { SERVICES } from '../data/content'
import { fadeUp, staggerContainer, viewportOnce } from '../utils/motion'
import SectionHeading from './ui/SectionHeading'

export default function Services() {
  return (
    <section id="services" className="section relative overflow-hidden">
      {/* Radial gold accent */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-radial-gold" />

      <div className="container-x">
        <SectionHeading
          eyebrow="What We Offer"
          title="Gym"
          highlight="Services"
          subtitle="From building raw strength to shedding fat and mastering movement — every program is coached, structured and built for real results."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {SERVICES.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-ink-800/50 p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/40 hover:bg-ink-800"
            >
              {/* Hover glow */}
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

              <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 text-gold transition-all duration-500 group-hover:from-gold group-hover:to-gold-deep group-hover:text-ink">
                <Icon size={26} />
              </span>
              <h3 className="relative mt-5 text-lg font-semibold text-white">
                {title}
              </h3>
              <p className="relative mt-2 text-sm leading-relaxed text-white/55">
                {desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
