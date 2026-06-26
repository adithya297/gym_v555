/**
 * Logo — V555 Fitness Zone wordmark.
 */
export default function Logo({ className = '' }) {
  return (
    <a
      href="#home"
      aria-label="V555 Fitness Zone — home"
      className={`group flex items-center gap-2.5 ${className}`}
    >
      <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-gold-soft to-gold-deep font-black text-ink shadow-gold">
        V
        <span className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full bg-ember ring-2 ring-ink" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-lg font-extrabold tracking-tight text-white">
          V555
        </span>
        <span className="text-[0.62rem] font-medium uppercase tracking-[0.28em] text-gold/80">
          Fitness Zone
        </span>
      </span>
    </a>
  )
}
