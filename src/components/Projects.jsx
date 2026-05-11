import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const PROJECTS = [
  {
    icon:  '💧',
    name:  'BlueDrop Purified',
    type:  'Freelance · Client',
    desc:  'Marketing platform for a Roodepoort-based water purification plant with a custom product catalogue and automated quote-request workflow.',
    tech:  ['React', 'CSS', 'Vercel'],
    color: '#22d3ee',
  },
  {
    icon:  '🏥',
    name:  'AIHL',
    type:  'Freelance · Client',
    desc:  'Responsive informational portal for a healthcare leadership institute with an optimised Netlify deployment pipeline for rapid content updates.',
    tech:  ['React', 'Netlify', 'Responsive Design'],
    color: '#4ade80',
  },
  {
    icon:  '🔍',
    name:  'DIU Forensics',
    type:  'Freelance · Client',
    desc:  'Privacy-focused landing page for a digital investigation firm — translating sensitive business requirements into a professional, high-trust UI.',
    tech:  ['React', 'Vercel', 'UI/UX'],
    color: '#8b5cf6',
  },
  {
    icon:  '📊',
    name:  'Covid-19 Tracker',
    type:  'Personal Project',
    desc:  'Real-time data visualisation dashboard tracking global pandemic statistics via third-party RESTful APIs with dynamic charting and sub-second render performance.',
    tech:  ['React', 'disease.sh API', 'Chart.js'],
    color: '#f59e0b',
    link:  'https://github.com/yuveer',
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

function ProjectCard({ project, index }) {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.article
      ref={ref}
      className="glass-card rounded-2xl p-7 flex flex-col h-full group relative overflow-hidden"
      initial={{ opacity: 0, y: 45 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.02, borderColor: `${project.color}40` }}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{ background: `radial-gradient(circle at top left, ${project.color}10 0%, transparent 60%)` }}
      />

      {/* Top row */}
      <div className="flex items-start justify-between mb-4">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
          style={{ background: `${project.color}15`, border: `1px solid ${project.color}30` }}
        >
          {project.icon}
        </div>
        {project.link && (
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg flex items-center justify-center glass-card"
            style={{ color: 'var(--text-3)' }}
            whileHover={{ scale: 1.12, color: project.color }}
            whileTap={{ scale: 0.92 }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
          </motion.a>
        )}
      </div>

      {/* Text */}
      <p className="font-mono-custom text-xs mb-2" style={{ color: project.color }}>{project.type}</p>
      <h3 className="font-display font-bold text-lg mb-3" style={{ color: 'var(--text)' }}>
        {project.name}
      </h3>
      <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: 'var(--text-2)' }}>
        {project.desc}
      </p>

      {/* Tech chips */}
      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="font-mono-custom text-[0.65rem] px-2.5 py-1 rounded-full"
            style={{
              background: `${project.color}12`,
              border: `1px solid ${project.color}30`,
              color: project.color,
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </motion.article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28" style={{ background: 'var(--bg)' }}>
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        <FadeUp>
          <p className="section-tag mb-3">Projects</p>
          <h2 className="font-display font-bold mb-4" style={{ fontSize: 'clamp(1.75rem, 3.2vw, 2.75rem)', color: 'var(--text)' }}>
            Things I've <span className="gradient-text">shipped</span>
          </h2>
          <p className="text-base mb-12 max-w-xl" style={{ color: 'var(--text-2)' }}>
            From client platforms to personal experiments — all built end-to-end.
          </p>
        </FadeUp>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
