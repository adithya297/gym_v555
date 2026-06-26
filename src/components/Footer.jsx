import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa'
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi'
import Logo from './Logo'
import { BRAND, NAV_LINKS } from '../data/content'

const SOCIALS = [
  { Icon: FaInstagram, href: BRAND.social.instagram, label: 'Instagram' },
  { Icon: FaFacebookF, href: BRAND.social.facebook, label: 'Facebook' },
  { Icon: FaTwitter, href: BRAND.social.twitter, label: 'Twitter' },
  { Icon: FaYoutube, href: BRAND.social.youtube, label: 'YouTube' },
]

export default function Footer() {
  const year = 2026

  return (
    <footer className="relative border-t border-white/10 bg-ink">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="lg:col-span-1">
          <Logo />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/55">
            {BRAND.tagline} Join the V555 community and experience fitness the
            premium way.
          </p>
          <div className="mt-6 flex gap-3">
            {SOCIALS.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/5 text-white/70 transition-all hover:-translate-y-0.5 hover:border-gold hover:text-gold"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-white">
            Quick Links
          </h4>
          <ul className="mt-5 space-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-white/55 transition-colors hover:text-gold"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Programs */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-white">
            Programs
          </h4>
          <ul className="mt-5 space-y-3">
            {[
              'Strength Training',
              'Weight Loss',
              'Muscle Building',
              'HIIT',
              'Group Classes',
            ].map((p) => (
              <li key={p}>
                <a
                  href="#services"
                  className="text-sm text-white/55 transition-colors hover:text-gold"
                >
                  {p}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-white">
            Contact
          </h4>
          <ul className="mt-5 space-y-4 text-sm text-white/55">
            <li className="flex items-start gap-3">
              <FiMapPin className="mt-0.5 shrink-0 text-gold" />
              <span>{BRAND.address}</span>
            </li>
            <li className="flex items-center gap-3">
              <FiPhone className="shrink-0 text-gold" />
              <a href={BRAND.phoneHref} className="hover:text-gold">
                {BRAND.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FiMail className="shrink-0 text-gold" />
              <a href={BRAND.emailHref} className="hover:text-gold">
                {BRAND.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-center text-xs text-white/45 sm:flex-row sm:text-left">
          <p>
            © {year} {BRAND.name}. All rights reserved.
          </p>
          <p>
            Crafted with <span className="text-ember">♥</span> for those who never
            settle.
          </p>
        </div>
      </div>
    </footer>
  )
}
