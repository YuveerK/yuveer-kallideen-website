import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const BUILT_WITH = [
  {
    name:    'Google Vision AI',
    where:   'Jobox · Product Engineer',
    color:   '#4ade80',
    icon:    '👁️',
    desc:    'Integrated into the ATS to automate document verification and certification validity checks — cutting manual review effort by over 70%.',
  },
  {
    name:    'Vertex AI / Gemini',
    where:   'Jobox · Intermediate SWE',
    color:   '#3b82f6',
    icon:    '✦',
    desc:    'Powered internal tooling for intelligent candidate screening and decision-support workflows across the Jobox platform rebuild.',
  },
]

const DAILY_TOOLS = [
  { name: 'Claude Code', label: 'CLI Agent',       color: '#f59e0b', icon: '◆' },
  { name: 'Cursor',      label: 'AI Editor',        color: '#8b5cf6', icon: '◈' },
  { name: 'v0.dev',      label: 'UI Generation',    color: '#22d3ee', icon: '◇' },
  { name: 'Lovable',     label: 'Full-Stack Gen',   color: '#ec4899', icon: '♡' },
  { name: 'Antigravity', label: 'Code Assist',      color: '#4ade80', icon: '◉' },
  { name: 'OpenAI Codex',label: 'Code Generation',  color: '#94a3b8', icon: '◎' },
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

export default function AISection() {
  return (
    <section id="ai" className="py-20 md:py-28 relative overflow-hidden" style={{ background: 'var(--bg)' }}>

      {/* Background accent */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: '55vmax', height: '55vmax',
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(59,130,246,0.07) 0%, rgba(139,92,246,0.05) 40%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Dot-grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(100,116,139,0.18) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* Header */}
        <FadeUp>
          <p className="section-tag mb-3">AI</p>
          <h2 className="font-display font-bold mb-4" style={{ fontSize: 'clamp(1.75rem, 3.2vw, 2.75rem)', color: 'var(--text)' }}>
            Engineering with <span className="gradient-text">AI</span>
          </h2>
          <p className="text-base mb-14 max-w-2xl" style={{ color: 'var(--text-2)' }}>
            AI isn't a novelty in my workflow — it's infrastructure. I've built production systems
            powered by AI models and use AI tooling daily to ship faster without sacrificing quality.
          </p>
        </FadeUp>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* ── LEFT: Built & Shipped ── */}
          <div>
            <FadeUp delay={0.05}>
              <p className="font-mono-custom text-xs mb-6" style={{ color: 'var(--text-3)', letterSpacing: '0.15em' }}>
                AI I'VE SHIPPED TO PRODUCTION
              </p>
            </FadeUp>

            <div className="flex flex-col gap-5">
              {BUILT_WITH.map((item, i) => (
                <motion.div
                  key={item.name}
                  className="glass-card rounded-2xl p-6 relative overflow-hidden group"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: 0.1 + i * 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ scale: 1.02, borderColor: `${item.color}40` }}
                >
                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                    style={{ background: `radial-gradient(circle at top left, ${item.color}10 0%, transparent 55%)` }}
                  />

                  <div className="flex items-start gap-4 relative">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center text-lg shrink-0"
                      style={{ background: `${item.color}15`, border: `1px solid ${item.color}35` }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1 flex-wrap">
                        <span className="font-display font-semibold text-base" style={{ color: 'var(--text)' }}>
                          {item.name}
                        </span>
                        <span
                          className="font-mono-custom text-[0.6rem] px-2 py-0.5 rounded-full"
                          style={{ background: `${item.color}15`, color: item.color, border: `1px solid ${item.color}30` }}
                        >
                          {item.where}
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed" style={{ color: 'var(--text-2)' }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Daily Tooling + Philosophy ── */}
          <div>
            <FadeUp delay={0.1}>
              <p className="font-mono-custom text-xs mb-6" style={{ color: 'var(--text-3)', letterSpacing: '0.15em' }}>
                AI TOOLS IN MY DAILY WORKFLOW
              </p>
            </FadeUp>

            <div className="grid grid-cols-2 gap-3 mb-10">
              {DAILY_TOOLS.map((tool, i) => (
                <motion.div
                  key={tool.name}
                  className="glass-card rounded-xl p-4 flex items-center gap-3 group"
                  initial={{ opacity: 0, scale: 0.88 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: 0.15 + i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ scale: 1.04, borderColor: `${tool.color}50` }}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-sm shrink-0 font-bold"
                    style={{ background: `${tool.color}18`, color: tool.color, border: `1px solid ${tool.color}30` }}
                  >
                    {tool.icon}
                  </div>
                  <div>
                    <p className="font-display font-semibold text-xs leading-tight" style={{ color: 'var(--text)' }}>
                      {tool.name}
                    </p>
                    <p className="font-mono-custom text-[0.6rem]" style={{ color: 'var(--text-3)' }}>
                      {tool.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Philosophy card */}
            <FadeUp delay={0.25}>
              <div
                className="rounded-2xl p-6 relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(59,130,246,0.08) 0%, rgba(139,92,246,0.08) 100%)',
                  border: '1px solid rgba(139,92,246,0.2)',
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#8b5cf6' }} />
                  <span className="font-mono-custom text-xs" style={{ color: '#8b5cf6', letterSpacing: '0.12em' }}>
                    PHILOSOPHY
                  </span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-2)' }}>
                  I treat AI as a{' '}
                  <span style={{ color: 'var(--text)', fontWeight: 600 }}>force multiplier</span>,
                  not a replacement for engineering judgement. The goal is always the same —
                  ship well-architected, production-grade software.
                  AI just means I can do it{' '}
                  <span style={{ color: 'var(--text)', fontWeight: 600 }}>faster and at higher quality</span>.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  )
}
