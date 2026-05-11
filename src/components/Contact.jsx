import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const LINKS = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label:    'yuveerkal01@gmail.com',
    href:     'mailto:yuveerkal01@gmail.com',
    sublabel: 'Email',
    color:    '#3b82f6',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
    label:    'linkedin.com/in/yuveer',
    href:     'https://linkedin.com/in/yuveer',
    sublabel: 'LinkedIn',
    color:    '#8b5cf6',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
      </svg>
    ),
    label:    '(+27) 69 946 7188',
    href:     'tel:+27699467188',
    sublabel: 'Phone',
    color:    '#22d3ee',
  },
]

function FadeUp({ children, delay = 0 }) {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 45 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 relative overflow-hidden" style={{ background: 'var(--bg-2)' }}>
      {/* Aurora orbs */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: '50vmax', height: '50vmax',
          top: '-20%', left: '-15%',
          background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 65%)',
          filter: 'blur(70px)',
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          width: '40vmax', height: '40vmax',
          bottom: '-20%', right: '-10%',
          background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 65%)',
          filter: 'blur(70px)',
        }}
      />

      <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
        <FadeUp>
          <p className="section-tag mb-3">Contact</p>
          <h2
            className="font-display font-bold mb-5 leading-tight"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.8rem)', color: 'var(--text)' }}
          >
            Let's build something{' '}
            <span className="gradient-text">extraordinary</span>
          </h2>
          <p className="text-base md:text-lg max-w-xl mx-auto mb-14" style={{ color: 'var(--text-2)' }}>
            I'm open to new opportunities, freelance work, and interesting collaborations.
            If you have a project or position in mind — let's talk.
          </p>
        </FadeUp>

        {/* Primary CTA */}
        <FadeUp delay={0.15}>
          <motion.a
            href="mailto:yuveerkal01@gmail.com"
            className="btn-primary inline-flex items-center gap-3 px-10 py-4 rounded-2xl font-semibold text-base text-white mb-14"
            whileHover={{ scale: 1.05, boxShadow: '0 0 60px rgba(59,130,246,0.5)' }}
            whileTap={{ scale: 0.97 }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            Say Hello
          </motion.a>
        </FadeUp>

        {/* Contact cards */}
        <FadeUp delay={0.25}>
          <div className="grid sm:grid-cols-3 gap-4">
            {LINKS.map((link, i) => (
              <motion.a
                key={link.sublabel}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="glass-card rounded-2xl p-5 flex flex-col items-center gap-3 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.04, borderColor: `${link.color}50` }}
                whileTap={{ scale: 0.97 }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-200"
                  style={{ background: `${link.color}15`, color: link.color, border: `1px solid ${link.color}30` }}
                >
                  {link.icon}
                </div>
                <div>
                  <p className="font-mono-custom text-[0.6rem] mb-1" style={{ color: 'var(--text-3)' }}>
                    {link.sublabel}
                  </p>
                  <p className="text-sm font-medium" style={{ color: 'var(--text)' }}>
                    {link.label}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
