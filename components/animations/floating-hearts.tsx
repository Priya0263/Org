"use client"

import { useMemo } from "react"
import { motion } from "framer-motion"
import { Heart } from "lucide-react"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

interface FloatingHeartsProps {
  count?: number
  color?: string
  minSize?: number
  maxSize?: number
}

export function FloatingHearts({
  count = 10,
  color = "rgba(220, 38, 38, 0.5)", // Changed to red color
  minSize = 10,
  maxSize = 24,
}: FloatingHeartsProps) {
  const prefersReducedMotion = useReducedMotion()

  // Use useMemo to create hearts only once and avoid re-renders
  const hearts = useMemo(() => {
    if (prefersReducedMotion) return []

    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // Random horizontal position (0-100%)
      delay: Math.random() * 5, // Random delay (0-5s)
      size: minSize + Math.random() * (maxSize - minSize), // Random size
      duration: 10 + Math.random() * 15, // Random duration (10-25s)
      opacity: 0.3 + Math.random() * 0.4, // Random opacity (0.3-0.7)
    }))
  }, [count, minSize, maxSize, prefersReducedMotion]) // Dependencies that should trigger recalculation

  if (prefersReducedMotion || hearts.length === 0) return null

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute bottom-0"
          style={{
            left: `${heart.x}%`,
            opacity: heart.opacity,
            color,
          }}
          initial={{ y: "100%", rotate: -10 + Math.random() * 20 }}
          animate={{
            y: "-100%",
            rotate: [-10 + Math.random() * 20, -20 + Math.random() * 40],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: Math.random() * 5,
            ease: "linear",
          }}
        >
          <Heart size={heart.size} />
        </motion.div>
      ))}
    </div>
  )
}
