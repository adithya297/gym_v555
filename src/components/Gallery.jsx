import { motion } from 'framer-motion'
import { GALLERY } from '../data/content'
import { scaleIn, staggerContainer, viewportOnce } from '../utils/motion'
import SectionHeading from './ui/SectionHeading'
import LazyImage from './ui/LazyImage'

export default function Gallery() {
  return (
    <section id="gallery" className="section relative bg-ink-soft">
      <div className="container-x">
        <SectionHeading
          eyebrow="Step Inside"
          title="Our"
          highlight="Gallery"
          subtitle="A glimpse into the V555 experience — from the iron paradise to the cardio deck and beyond."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid auto-rows-[200px] grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4"
        >
          {GALLERY.map((img, i) => (
            <motion.figure
              key={i}
              variants={scaleIn}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 ${
                img.span || ''
              }`}
            >
              <LazyImage
                src={img.src}
                alt={img.alt}
                className="h-full w-full"
                imgClassName="transition-transform duration-[900ms] ease-out group-hover:scale-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <figcaption className="absolute bottom-4 left-4 translate-y-3 text-sm font-semibold text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                {img.alt}
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
