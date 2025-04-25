"use client"

import { useMemo } from "react"
import { motion } from "framer-motion"
import { Heart } from "lucide-react"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

interface PulsingHeartProps {
  className?: string
  size?: number
  color?: string
}

export function PulsingHeart({ className = "", size = 24, color = "currentColor" }: PulsingHeartProps) {
  const prefersReducedMotion = useReducedMotion()

  // Use useMemo to avoid recreating variants on every render
  const { pulseVariants, glowVariants } = useMemo(() => {
    return {
      pulseVariants: {
        pulse: prefersReducedMotion
          ? {}
          : {
              scale: [1, 1.1, 1],
              transition: {
                duration: 1.2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop" as const,
                ease: "easeInOut",
              },
            },
      },
      glowVariants: {
        pulse: prefersReducedMotion
          ? {}
          : {
              opacity: [0.5, 0.8, 0.5],
              scale: [1, 1.15, 1],
              transition: {
                duration: 1.2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop" as const,
                ease: "easeInOut",
              },
            },
      },
    }
  }, [prefersReducedMotion])

  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      <motion.div
        className="absolute inset-0 rounded-full bg-primary"
        variants={glowVariants}
        animate="pulse"
        style={{ filter: "blur(8px)" }}
      />
      <motion.div variants={pulseVariants} animate="pulse">
        <Heart className="text-primary" size={size} />
      </motion.div>
    </div>
  )
}
