import { motion } from 'framer-motion'

const NAV = [
  { label: 'About',      href: '#about'      },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills',     href: '#skills'     },
  { label: 'AI',         href: '#ai'         },
  { label: 'Projects',   href: '#projects'   },
  { label: 'Contact',    href: '#contact'    },
]

function scrollTo(id) {
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Footer() {
  return (
    <footer
      className="py-12 relative overflow-hidden"
      style={{ background: 'var(--bg)', borderTop: '1px solid var(--card-border)' }}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <motion.a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            className="font-display font-bold text-2xl gradient-text select-none"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            YK
          </motion.a>

          {/* Nav links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {NAV.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="font-mono-custom text-xs transition-colors duration-200"
                style={{ color: 'var(--text-3)' }}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
                whileHover={{ color: '#3b82f6' }}
              >
                {link.label}
              </motion.a>
            ))}
          </nav>

          {/* Social */}
          <div className="flex items-center gap-4">
            {[
              { label: 'LI', href: 'https://linkedin.com/in/yuveer', title: 'LinkedIn' },
              { label: 'EM', href: 'mailto:yuveerkal01@gmail.com',   title: 'Email'    },
            ].map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                title={s.title}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg glass-card flex items-center justify-center font-mono-custom text-xs font-bold"
                style={{ color: 'var(--text-3)' }}
                whileHover={{ scale: 1.12, color: '#3b82f6', borderColor: 'rgba(59,130,246,0.4)' }}
                whileTap={{ scale: 0.92 }}
              >
                {s.label}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
             style={{ borderTop: '1px solid var(--card-border)' }}>
          <p className="font-mono-custom text-xs" style={{ color: 'var(--text-3)' }}>
            © {new Date().getFullYear()} Yuveer Kallideen. All rights reserved.
          </p>
          <p className="font-mono-custom text-xs" style={{ color: 'var(--text-3)' }}>
            Built with React · Framer Motion · Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
