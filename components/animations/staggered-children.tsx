"use client"

import { type ReactNode, Children } from "react"
import { motion } from "framer-motion"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

interface StaggeredChildrenProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
  initialDelay?: number
}

export function StaggeredChildren({
  children,
  className = "",
  staggerDelay = 0.1,
  initialDelay = 0,
}: StaggeredChildrenProps) {
  const prefersReducedMotion = useReducedMotion()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : staggerDelay,
        delayChildren: initialDelay,
      },
    },
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  // Properly handle children to avoid re-rendering issues
  const childrenArray = Children.toArray(children)

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      {childrenArray.map((child, index) => (
        <motion.div key={index} variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  )
}
