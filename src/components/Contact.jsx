import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiClock,
  FiSend,
  FiCheckCircle,
} from 'react-icons/fi'
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa'
import { BRAND } from '../data/content'
import {
  fadeUp,
  slideInLeft,
  slideInRight,
  staggerContainer,
  viewportOnce,
} from '../utils/motion'
import SectionHeading from './ui/SectionHeading'

const SOCIALS = [
  { Icon: FaInstagram, href: BRAND.social.instagram, label: 'Instagram' },
  { Icon: FaFacebookF, href: BRAND.social.facebook, label: 'Facebook' },
  { Icon: FaTwitter, href: BRAND.social.twitter, label: 'Twitter' },
  { Icon: FaYoutube, href: BRAND.social.youtube, label: 'YouTube' },
]

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Demo only — wire up to a real backend / email service.
    setSent(true)
    e.target.reset()
    setTimeout(() => setSent(false), 5000)
  }

  const contactCards = [
    { Icon: FiPhone, label: 'Call Us', value: BRAND.phone, href: BRAND.phoneHref },
    { Icon: FiMail, label: 'Email Us', value: BRAND.email, href: BRAND.emailHref },
    { Icon: FiMapPin, label: 'Visit Us', value: BRAND.address, href: '#map' },
  ]

  return (
    <section id="contact" className="section relative bg-ink-soft">
      <div className="container-x">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Start Your"
          highlight="Transformation"
          subtitle="Drop by, call, or send a message — our team will help you pick the perfect plan and book your free trial."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Left: form */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="glass rounded-3xl p-7 sm:p-9"
          >
            <h3 className="text-xl font-semibold text-white">Send us a message</h3>
            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field id="name" label="Full Name" type="text" placeholder="John Doe" required />
                <Field id="phone" label="Phone" type="tel" placeholder="+91 98765 43210" required />
              </div>
              <Field id="email" label="Email" type="email" placeholder="you@email.com" required />

              <div>
                <label htmlFor="interest" className="mb-1.5 block text-sm font-medium text-white/70">
                  I&apos;m interested in
                </label>
                <select
                  id="interest"
                  name="interest"
                  className="w-full rounded-xl border border-white/10 bg-ink-800 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-gold"
                >
                  <option>Membership</option>
                  <option>Free Trial</option>
                  <option>Personal Training</option>
                  <option>Group Classes</option>
                  <option>Nutrition Guidance</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-white/70">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Tell us about your fitness goals..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-ink-800 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-gold"
                />
              </div>

              <button type="submit" className="btn-gold w-full">
                {sent ? (
                  <>
                    <FiCheckCircle /> Message Sent!
                  </>
                ) : (
                  <>
                    Send Message <FiSend />
                  </>
                )}
              </button>
              {sent && (
                <p className="text-center text-sm text-gold">
                  Thanks! Our team will reach out within 24 hours.
                </p>
              )}
            </form>
          </motion.div>

          {/* Right: info + map + hours */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="flex flex-col gap-6"
          >
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="grid gap-4"
            >
              {contactCards.map(({ Icon, label, value, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  variants={fadeUp}
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-ink-800/60 p-5 transition-colors hover:border-gold/40"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gold/10 text-gold transition-colors group-hover:bg-gold group-hover:text-ink">
                    <Icon size={20} />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/45">
                      {label}
                    </p>
                    <p className="text-sm font-medium text-white">{value}</p>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* Business hours */}
            <div className="rounded-2xl border border-white/10 bg-ink-800/60 p-5">
              <p className="flex items-center gap-2 text-sm font-semibold text-white">
                <FiClock className="text-gold" /> Business Hours
              </p>
              <ul className="mt-3 space-y-2 text-sm">
                {BRAND.hours.map((h) => (
                  <li key={h.day} className="flex justify-between text-white/60">
                    <span>{h.day}</span>
                    <span className="text-white/80">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div className="flex items-center gap-3">
              {SOCIALS.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-ink-800/60 text-white/70 transition-all hover:-translate-y-0.5 hover:border-gold hover:text-gold"
                >
                  <Icon />
                </a>
              ))}
            </div>

            {/* Google Maps embed placeholder */}
            <div
              id="map"
              className="relative overflow-hidden rounded-2xl border border-white/10"
            >
              <iframe
                title="V555 Fitness Zone location"
                src="https://www.google.com/maps?q=fitness+gym&output=embed"
                className="h-56 w-full grayscale-[0.4] contrast-110"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Field({ id, label, type, placeholder, required }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-white/70">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-white/10 bg-ink-800 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-gold"
      />
    </div>
  )
}
