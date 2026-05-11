import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [pos, setPos]           = useState({ x: -100, y: -100 })
  const [isHovering, setIsHovering] = useState(false)
  const [visible, setVisible]   = useState(false)
  const [isTouch, setIsTouch]   = useState(false)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true)
      return
    }

    const onMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY })
      if (!visible) setVisible(true)
    }

    const onOver = (e) => {
      if (e.target.closest('a, button, [data-hover]')) setIsHovering(true)
    }

    const onOut = (e) => {
      if (e.target.closest('a, button, [data-hover]')) setIsHovering(false)
    }

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout',  onOut)
    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout',  onOut)
    }
  }, [visible])

  if (isTouch) return null

  const size = isHovering ? 48 : 30
  const offset = size / 2

  return (
    <>
      {/* Outer ring — spring lag */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none rounded-full"
        style={{
          zIndex: 9999,
          width: size,
          height: size,
          border: `1.5px solid ${isHovering ? '#3b82f6' : 'rgba(255,255,255,0.45)'}`,
          mixBlendMode: 'difference',
        }}
        animate={{ x: pos.x - offset, y: pos.y - offset, opacity: visible ? 1 : 0 }}
        transition={{ type: 'spring', stiffness: 220, damping: 28, mass: 0.5 }}
      />
      {/* Inner dot — instant */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none rounded-full"
        style={{
          zIndex: 9999,
          width: 5,
          height: 5,
          background: isHovering ? '#3b82f6' : '#fff',
          mixBlendMode: 'difference',
        }}
        animate={{ x: pos.x - 2.5, y: pos.y - 2.5, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0 }}
      />
    </>
  )
}
