"use client"

import { type ReactNode, useMemo } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

interface AnimatedCardProps {
  children: ReactNode
  className?: string
  delay?: number
  index?: number
}

export function AnimatedCard({ children, className = "", delay = 0, index = 0 }: AnimatedCardProps) {
  const prefersReducedMotion = useReducedMotion()

  // Calculate the effective delay once
  const effectiveDelay = delay || index * 0.1

  // Use useMemo to avoid recreating variants on every render
  const variants = useMemo(() => {
    return {
      hidden: {
        opacity: 0,
        y: prefersReducedMotion ? 0 : 20,
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          delay: effectiveDelay,
          ease: [0.25, 0.1, 0.25, 1],
        },
      },
      hover: prefersReducedMotion
        ? {}
        : {
            y: -5,
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 20,
            },
          },
    }
  }, [prefersReducedMotion, effectiveDelay])

  return (
    <motion.div
      className={cn("relative overflow-hidden rounded-lg border", className)}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-100px" }}
      variants={variants}
    >
      {children}
    </motion.div>
  )
}
