import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import heroImage from '../assets/hero.png'

const STATS = [
  { value: '4+',      label: 'Years Experience'     },
  { value: '10+',     label: 'Product Domains Built' },
  { value: '50+',     label: 'Data Models Designed'  },
  { value: '98.75%',  label: 'Performance Gain'      },
]

function FadeUp({ children, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default function About() {
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section id="about" className="py-20 md:py-28 relative overflow-hidden" style={{ background: 'var(--bg-2)' }}>
      {/* Subtle orb */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: '40vmax', height: '40vmax',
          top: '-10%', right: '-10%',
          background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 65%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        <FadeUp>
          <p className="section-tag mb-3">About</p>
          <h2 className="font-display font-bold mb-12" style={{ fontSize: 'clamp(1.75rem, 3.2vw, 2.75rem)', color: 'var(--text)' }}>
            The person behind{' '}
            <span className="gradient-text">the code</span>
          </h2>
        </FadeUp>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <FadeUp delay={0.1}>
            <div className="relative mx-auto md:mx-0 w-72 h-72 md:w-full md:h-96 max-w-sm">
              {/* Glow ring */}
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: 'linear-gradient(135deg, #3b82f6, #8b5cf6, #22d3ee)',
                  padding: '2px',
                  borderRadius: '1rem',
                }}
              >
                <div className="w-full h-full rounded-2xl overflow-hidden" style={{ background: 'var(--bg-2)' }}>
                  <img
                    src={heroImage}
                    alt="Yuveer Kallideen"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Location badge */}
              <motion.div
                className="absolute -bottom-4 -right-4 px-4 py-2 rounded-xl glass-card"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className="font-mono-custom text-xs" style={{ color: 'var(--text-2)' }}>
                  📍 Johannesburg, ZA
                </span>
              </motion.div>
            </div>
          </FadeUp>

          {/* Bio */}
          <div>
            <FadeUp delay={0.2}>
              <h3 className="font-display font-bold text-2xl md:text-3xl mb-5" style={{ color: 'var(--text)' }}>
                Hi, I'm Yuveer 👋
              </h3>
              <p className="text-base md:text-lg leading-relaxed mb-4" style={{ color: 'var(--text-2)' }}>
                I'm an Intermediate Software Developer at <strong style={{ color: 'var(--text)' }}>Jobox</strong>, where I've
                spent the last 3+ years growing from Junior to leading the full platform rebuild — replacing a legacy
                Firebase architecture with a modern, scalable full-stack system.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--text-3)' }}>
                I thrive at the intersection of engineering and product — designing systems that are both technically
                robust and delightful to use. Outside of work, I serve as Chairman of a residential body corporate,
                managing governance, operations, and community communication.
              </p>
            </FadeUp>

            {/* Stats grid */}
            <div ref={sectionRef} className="grid grid-cols-2 gap-4">
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="glass-card rounded-xl p-5"
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ scale: 1.04, borderColor: 'rgba(59,130,246,0.4)' }}
                >
                  <p className="font-display font-bold text-2xl gradient-text mb-1">{stat.value}</p>
                  <p className="font-mono-custom text-xs" style={{ color: 'var(--text-3)' }}>{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
