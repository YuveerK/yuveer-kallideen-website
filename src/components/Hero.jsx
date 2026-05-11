import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const ROLES = [
  'Full-Stack Engineer',
  'Product Builder',
  'Platform Architect',
  'System Designer',
]

function useTypewriter(words) {
  const [index, setIndex]   = useState(0)
  const [text, setText]     = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[index]
    const delay   = deleting ? 45 : 80

    const t = setTimeout(() => {
      if (!deleting) {
        if (text.length < current.length) {
          setText(current.slice(0, text.length + 1))
        } else {
          setTimeout(() => setDeleting(true), 2400)
        }
      } else {
        if (text.length > 0) {
          setText(current.slice(0, text.length - 1))
        } else {
          setDeleting(false)
          setIndex((i) => (i + 1) % words.length)
        }
      }
    }, delay)

    return () => clearTimeout(t)
  }, [text, deleting, index, words])

  return text
}

function Orb({ style, className }) {
  return (
    <div
      className={className}
      style={{
        position: 'absolute',
        borderRadius: '50%',
        filter: 'blur(70px)',
        pointerEvents: 'none',
        ...style,
      }}
    />
  )
}

export default function Hero() {
  const role = useTypewriter(ROLES)

  const first = 'Yuveer'
  const last  = 'Kallideen'

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">

      {/* ── Aurora background ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Orb
          className="animate-aurora-1"
          style={{
            width: '65vmax', height: '65vmax',
            top: '-20%', left: '-15%',
            background: 'radial-gradient(circle, rgba(59,130,246,0.38) 0%, transparent 68%)',
          }}
        />
        <Orb
          className="animate-aurora-2"
          style={{
            width: '55vmax', height: '55vmax',
            bottom: '-18%', right: '-15%',
            background: 'radial-gradient(circle, rgba(139,92,246,0.32) 0%, transparent 68%)',
          }}
        />
        <Orb
          className="animate-aurora-3"
          style={{
            width: '38vmax', height: '38vmax',
            top: '38%', left: '42%',
            background: 'radial-gradient(circle, rgba(34,211,238,0.22) 0%, transparent 68%)',
          }}
        />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 dark:opacity-[0.025] opacity-[0.04]"
          style={{
            backgroundImage: [
              'linear-gradient(rgba(100,116,139,1) 1px, transparent 1px)',
              'linear-gradient(90deg, rgba(100,116,139,1) 1px, transparent 1px)',
            ].join(','),
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: '#4ade80' }} />
            <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: '#4ade80' }} />
          </span>
          <span className="font-mono-custom text-xs" style={{ color: 'var(--text-2)' }}>
            Available for opportunities
          </span>
        </motion.div>

        {/* Name — first line gradient, second line solid */}
        <div className="mb-4 select-none">
          <h1 className="font-display font-bold leading-[0.88] tracking-tight overflow-hidden"
              style={{ fontSize: 'clamp(3rem, 9vw, 7rem)' }}>
            {first.split('').map((ch, i) => (
              <motion.span
                key={`f${i}`}
                className="inline-block gradient-text"
                initial={{ opacity: 0, y: '100%' }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 + i * 0.055, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              >
                {ch}
              </motion.span>
            ))}
          </h1>
          <h1 className="font-display font-bold leading-[0.88] tracking-tight overflow-hidden"
              style={{ fontSize: 'clamp(3rem, 9vw, 7rem)', color: 'var(--text)' }}>
            {last.split('').map((ch, i) => (
              <motion.span
                key={`l${i}`}
                className="inline-block"
                initial={{ opacity: 0, y: '100%' }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65 + i * 0.055, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              >
                {ch}
              </motion.span>
            ))}
          </h1>
        </div>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.55 }}
          className="flex items-center justify-center gap-1 mb-6"
          style={{ minHeight: '2.5rem' }}
        >
          <span className="font-mono-custom text-xl md:text-2xl" style={{ color: '#3b82f6' }}>
            {role}
          </span>
          <span className="animate-blink font-mono-custom text-xl md:text-2xl" style={{ color: '#3b82f6' }}>
            |
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.6 }}
          className="text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
          style={{ color: 'var(--text-2)' }}
        >
          Building scalable, production-grade systems — from architecture to deployment.{' '}
          <span style={{ color: 'var(--text-3)' }}>Based in Johannesburg, ZA.</span>
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.85, duration: 0.55 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <motion.a
            href="#projects"
            onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="btn-primary px-7 py-3.5 rounded-xl font-semibold text-sm text-white flex items-center gap-2"
            whileHover={{ scale: 1.04, boxShadow: '0 0 40px rgba(59,130,246,0.45)' }}
            whileTap={{ scale: 0.97 }}
          >
            View My Work
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </motion.a>

          <motion.a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="px-7 py-3.5 rounded-xl font-semibold text-sm glass-card flex items-center gap-2"
            style={{ color: 'var(--text)' }}
            whileHover={{ scale: 1.04, borderColor: 'rgba(59,130,246,0.5)' }}
            whileTap={{ scale: 0.97 }}
          >
            Get in Touch
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
          </motion.a>
        </motion.div>

        {/* Social row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.05 }}
          className="flex items-center justify-center gap-6"
        >
          {[
            { label: 'LinkedIn', href: 'https://linkedin.com/in/yuveer' },
            { label: 'Email',    href: 'mailto:yuveerkal01@gmail.com'   },
            { label: 'Phone',    href: 'tel:+27699467188'               },
          ].map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              target={s.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="font-mono-custom text-xs transition-colors duration-200"
              style={{ color: 'var(--text-3)' }}
              whileHover={{ color: '#3b82f6', y: -2 }}
            >
              {s.label}
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-scroll-cue"
        style={{ color: 'var(--text-3)' }}
      >
        <span className="font-mono-custom text-[0.6rem] tracking-[0.3em]">SCROLL</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
      </motion.div>
    </section>
  )
}
