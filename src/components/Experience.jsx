import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const EXPERIENCES = [
  {
    company:  'Jobox',
    role:     'Intermediate Software Developer',
    period:   'Dec 2025 – Present',
    location: 'Sandton, South Africa',
    current:  true,
    bullets: [
      'Architected the full Jobox platform rebuild — replacing legacy Firebase/Firestore with Next.js, React, TypeScript, Express.js, Prisma, and PostgreSQL.',
      'Designed a centralised Express.js API across 10+ product domains: auth, student profiles, employer profiles, jobs, applications, vetting, programmes, talent pools, interviews, uploads, and Cal.com scheduling.',
      'Modelled and migrated a 50+ Prisma-model relational schema covering students, companies, jobs, applications, programme flows, bursaries, vetting tests, interview bookings, documents, offers, and employment records.',
      'Rebuilt the frontend from legacy Vue/Firebase patterns into a modern Next.js App Router application with shared UI components, typed API clients, and responsive employer/student dashboards.',
      'Consolidated Firebase Cloud Functions into a containerised backend deployed through Docker and Google Cloud Run, improving scalability and observability.',
    ],
  },
  {
    company:  'Jobox',
    role:     'Product Engineer',
    period:   'Oct 2024 – Dec 2025',
    location: 'Sandton, South Africa',
    bullets: [
      'Designed and delivered a full-scale bursary management system with a public portal, secure document uploads, and an employer dashboard with advanced candidate filtering.',
      'Integrated an ATS with AI-powered document verification via Google Vision AI and automated certification validity checks, cutting manual review effort by over 70%.',
      'Optimised platform performance for 24,000+ student records — reducing load times from 8+ minutes to 6 seconds (98.75% improvement).',
      'Guided product evolution through user feedback, prioritising high-impact features that boosted client retention and attracted new business.',
    ],
  },
  {
    company:  'Jobox',
    role:     'Associate Software Developer',
    period:   'Nov 2023 – Oct 2024',
    location: 'Sandton, South Africa',
    bullets: [
      'Designed and deployed an advanced candidate vetting platform with dynamic quizzes, automated scoring, and cross-device session continuity.',
      'Built intelligent skill-matching logic ensuring applicants met at least 3 of 5 core requirements, cutting client screening time by 60%.',
      'Established the vetting system as a flagship product feature, securing multiple high-value client wins and significantly increasing recurring revenue.',
    ],
  },
  {
    company:  'Jobox',
    role:     'Junior Software Developer',
    period:   'Aug 2022 – Nov 2023',
    location: 'Sandton, South Africa',
    bullets: [
      'Delivered features across the full SDLC, from design to deployment.',
      'Improved performance and usability across multiple platform surfaces.',
      'Maintained API documentation and resolved production bugs.',
    ],
  },
  {
    company:  'Signature Business Solutions · Discovery',
    role:     'Junior Business Analyst',
    period:   'Apr 2022 – Aug 2022',
    location: 'Sandton, South Africa',
    bullets: [
      'Built and deployed an automation system for Dischem with Discovery Employee Benefits, processing 200K+ member accounts with zero downtime.',
      'Developed SQL workflows to extract, transform, and reconcile data — cutting processing time from 2–3 days to under 30 minutes.',
      'Automated daily and monthly fund switches and rebalancing, reducing manual intervention by 85%+.',
      'Created a live compliance dashboard with drill-down reporting for audit readiness.',
    ],
  },
]

function FadeUp({ children, delay = 0 }) {
  const ref   = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 48 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

function ExperienceCard({ exp, index }) {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [expanded, setExpanded] = useState(index === 0)

  return (
    <motion.div
      ref={ref}
      className="relative pl-10 md:pl-14"
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-5 flex items-center">
        {exp.current ? (
          <span className="relative flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60"
                  style={{ background: '#3b82f6' }} />
            <span className="relative inline-flex rounded-full h-4 w-4"
                  style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)' }} />
          </span>
        ) : (
          <span className="h-3 w-3 rounded-full border-2"
                style={{ borderColor: '#3b82f6', background: 'var(--bg)' }} />
        )}
      </div>

      {/* Card */}
      <motion.div
        className="glass-card rounded-2xl p-6 cursor-pointer"
        onClick={() => setExpanded(!expanded)}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        style={{ borderColor: expanded ? 'rgba(59,130,246,0.3)' : 'var(--card-border)' }}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-1">
          <div>
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <span className="font-display font-semibold text-base md:text-lg" style={{ color: 'var(--text)' }}>
                {exp.role}
              </span>
              {exp.current && (
                <span className="font-mono-custom text-[0.6rem] px-2 py-0.5 rounded-full"
                      style={{ background: 'rgba(59,130,246,0.12)', color: '#3b82f6', border: '1px solid rgba(59,130,246,0.3)' }}>
                  CURRENT
                </span>
              )}
            </div>
            <p className="font-semibold text-sm" style={{ color: '#3b82f6' }}>{exp.company}</p>
          </div>
          <div className="text-right shrink-0">
            <p className="font-mono-custom text-xs mb-0.5" style={{ color: 'var(--text-3)' }}>{exp.period}</p>
            <p className="font-mono-custom text-xs" style={{ color: 'var(--text-3)' }}>{exp.location}</p>
          </div>
        </div>

        {/* Bullets */}
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{    opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="mt-4 space-y-2 overflow-hidden"
            >
              {exp.bullets.map((b, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed" style={{ color: 'var(--text-2)' }}>
                  <span className="mt-1.5 shrink-0 h-1.5 w-1.5 rounded-full" style={{ background: '#3b82f6' }} />
                  {b}
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>

        {/* Expand toggle */}
        <div className="mt-3 flex items-center gap-1.5" style={{ color: 'var(--text-3)' }}>
          <span className="font-mono-custom text-xs">{expanded ? 'Show less' : 'Show details'}</span>
          <motion.svg
            width="12" height="12" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2.5"
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.25 }}
          >
            <polyline points="6 9 12 15 18 9"/>
          </motion.svg>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28" style={{ background: 'var(--bg)' }}>
      <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16">
        <FadeUp>
          <p className="section-tag mb-3">Experience</p>
          <h2 className="font-display font-bold mb-12" style={{ fontSize: 'clamp(1.75rem, 3.2vw, 2.75rem)', color: 'var(--text)' }}>
            Where I've been{' '}
            <span className="gradient-text">building</span>
          </h2>
        </FadeUp>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-[5px] md:left-[7px] top-6 bottom-6 w-px"
            style={{ background: 'linear-gradient(180deg, #3b82f6 0%, #8b5cf6 60%, transparent 100%)' }}
          />

          <div className="space-y-6">
            {EXPERIENCES.map((exp, i) => (
              <ExperienceCard key={i} exp={exp} index={i} />
            ))}
          </div>
        </div>

        {/* Freelance note */}
        <FadeUp delay={0.3}>
          <div className="mt-10 glass-card rounded-2xl p-6 pl-10 md:pl-14 relative">
            <div className="absolute left-0 top-6 h-3 w-3 rounded-full border-2"
                 style={{ borderColor: '#8b5cf6', background: 'var(--bg)' }} />
            <p className="font-display font-semibold text-base mb-1" style={{ color: 'var(--text)' }}>
              Freelance Full-Stack Developer
            </p>
            <p className="font-mono-custom text-xs mb-3" style={{ color: 'var(--text-3)' }}>
              Jan 2023 – Present · Remote
            </p>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-2)' }}>
              Delivered end-to-end web products for clients — from brand design and DNS configuration to production deployment.
              Projects include <span style={{ color: 'var(--text)' }}>BlueDrop Purified</span>,{' '}
              <span style={{ color: 'var(--text)' }}>AIHL</span>, and{' '}
              <span style={{ color: 'var(--text)' }}>DIU Forensics</span>.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
