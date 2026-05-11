import { useScroll, useSpring, motion } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 origin-left"
      style={{
        scaleX,
        height: '2px',
        background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #22d3ee)',
        zIndex: 9998,
      }}
    />
  )
}
