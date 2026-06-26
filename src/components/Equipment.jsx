import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import { EQUIPMENT } from '../data/content'
import { fadeUp, staggerContainer, viewportOnce } from '../utils/motion'
import SectionHeading from './ui/SectionHeading'
import LazyImage from './ui/LazyImage'

export default function Equipment() {
  return (
    <section id="equipment" className="section relative bg-ink-soft">
      <div className="container-x">
        <SectionHeading
          eyebrow="World-Class Gear"
          title="Premium"
          highlight="Equipment Showcase"
          subtitle="Train on meticulously maintained, commercial-grade machines designed for performance, safety and results."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {EQUIPMENT.map((item) => (
            <motion.article
              key={item.name}
              variants={fadeUp}
              className="card group overflow-hidden hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-gold"
            >
              <div className="relative overflow-hidden">
                <LazyImage
                  src={item.image}
                  alt={item.name}
                  className="aspect-[4/3] w-full"
                  imgClassName="transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent opacity-80" />
                <span className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-ink/70 text-gold opacity-0 backdrop-blur transition-all duration-300 group-hover:opacity-100">
                  <FiArrowUpRight />
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-gold">
                  {item.name}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/55">
                  {item.desc}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
