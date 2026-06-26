import { motion } from 'framer-motion'
import { STATS, WHY_CHOOSE } from '../data/content'
import { fadeUp, staggerContainer, viewportOnce } from '../utils/motion'
import SectionHeading from './ui/SectionHeading'
import Counter from './ui/Counter'

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section relative">
      <div className="container-x">
        <SectionHeading
          eyebrow="The V555 Difference"
          title="Why"
          highlight="Choose Us"
          subtitle="Premium isn't a price tag — it's an experience. Here's what sets V555 Fitness Zone apart."
        />

        {/* Stats counters */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4"
        >
          {STATS.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className="glass rounded-2xl p-6 text-center transition-colors hover:border-gold/40"
            >
              <p className="text-4xl font-black text-gradient-gold sm:text-5xl">
                <Counter to={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-xs uppercase tracking-widest text-white/55 sm:text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Feature cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {WHY_CHOOSE.map(({ icon: Icon, title, text }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              className="group flex items-start gap-5 rounded-3xl border border-white/10 bg-ink-800/50 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-gold/40"
            >
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 text-gold transition-all duration-500 group-hover:from-gold group-hover:to-gold-deep group-hover:text-ink">
                <Icon size={26} />
              </span>
              <div>
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/55">
                  {text}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
