import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const CATEGORIES = [
  {
    icon: '⚡',
    name: 'Languages & Frameworks',
    skills: ['TypeScript', 'JavaScript', 'React', 'Next.js', 'Express.js', 'Vue.js', 'React Native', 'Java', 'PHP', 'C'],
  },
  {
    icon: '🗄️',
    name: 'Databases & ORM',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Firebase', 'Prisma ORM', 'MSSQL', 'Cloud SQL'],
  },
  {
    icon: '☁️',
    name: 'Cloud & DevOps',
    skills: ['Google Cloud Platform', 'Docker', 'Cloud Run', 'Cloud Functions', 'Firebase Functions', 'Vercel', 'Netlify', 'GitHub', 'CI/CD'],
  },
  {
    icon: '🎨',
    name: 'Frontend & UI',
    skills: ['Tailwind CSS', 'Responsive Design', 'UI/UX', 'Wireframing', 'SEO', 'Email.js', 'Component Libraries'],
  },
  {
    icon: '🤖',
    name: 'AI & Tooling',
    skills: ['Claude Code', 'Cursor', 'v0.dev', 'Lovable', 'Vertex AI / Gemini', 'Google Vision AI', 'OpenAI Codex'],
  },
  {
    icon: '🏗️',
    name: 'Architecture & Practices',
    skills: ['API Design', 'Event-Driven Architecture', 'Agile / Scrum', 'Performance Optimisation', 'Scalable System Design', 'Observability'],
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

function CategoryCard({ cat, index }) {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      className="glass-card rounded-2xl p-6 h-full"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.02, borderColor: 'rgba(59,130,246,0.3)' }}
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="text-2xl">{cat.icon}</span>
        <h3 className="font-display font-semibold text-sm" style={{ color: 'var(--text)' }}>
          {cat.name}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {cat.skills.map((skill) => (
          <motion.span
            key={skill}
            className="skill-badge"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 relative overflow-hidden" style={{ background: 'var(--bg-2)' }}>
      {/* Orb */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: '40vmax', height: '40vmax',
          bottom: '-10%', left: '-10%',
          background: 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 65%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        <FadeUp>
          <p className="section-tag mb-3">Skills</p>
          <h2 className="font-display font-bold mb-4" style={{ fontSize: 'clamp(1.75rem, 3.2vw, 2.75rem)', color: 'var(--text)' }}>
            The tools I use to{' '}
            <span className="gradient-text">build great things</span>
          </h2>
          <p className="text-base mb-12 max-w-xl" style={{ color: 'var(--text-2)' }}>
            A broad, production-tested stack — from frontend to infrastructure.
          </p>
        </FadeUp>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CATEGORIES.map((cat, i) => (
            <CategoryCard key={cat.name} cat={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
