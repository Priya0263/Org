"use client"

import { type ReactNode, useMemo } from "react"
import { motion } from "framer-motion"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right"
}

export function ScrollReveal({ children, className = "", delay = 0, direction = "up" }: ScrollRevealProps) {
  const prefersReducedMotion = useReducedMotion()

  // Use useMemo to avoid recreating direction offset and variants on every render
  const { directionOffset, variants } = useMemo(() => {
    const getDirectionOffset = () => {
      if (prefersReducedMotion) return { x: 0, y: 0 }

      switch (direction) {
        case "up":
          return { x: 0, y: 30 }
        case "down":
          return { x: 0, y: -30 }
        case "left":
          return { x: 30, y: 0 }
        case "right":
          return { x: -30, y: 0 }
        default:
          return { x: 0, y: 30 }
      }
    }

    const offset = getDirectionOffset()

    return {
      directionOffset: offset,
      variants: {
        hidden: {
          opacity: 0,
          ...offset,
        },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            duration: 0.6,
            delay,
            ease: [0.25, 0.1, 0.25, 1],
          },
        },
      },
    }
  }, [prefersReducedMotion, direction, delay])

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={variants}
    >
      {children}
    </motion.div>
  )
}
