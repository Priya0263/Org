"use client"

import { useMemo } from "react"
import { motion } from "framer-motion"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

interface FloatingElement {
  id: number
  x: number
  y: number
  size: number
  delay: number
  duration: number
  opacity: number
  shape: "circle" | "square"
  color: string
}

interface FloatingElementsProps {
  count?: number
  colors?: string[]
  className?: string
}

export function FloatingElements({
  count = 15,
  colors = ["rgba(220, 38, 38, 0.2)", "rgba(255, 255, 255, 0.2)"],
  className = "",
}: FloatingElementsProps) {
  const prefersReducedMotion = useReducedMotion()

  // Use useMemo to create elements only once and avoid re-renders
  const elements = useMemo(() => {
    if (prefersReducedMotion) return []

    const shapes: Array<"circle" | "square"> = ["circle", "square"]

    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // Random horizontal position (0-100%)
      y: Math.random() * 100, // Random vertical position (0-100%)
      size: 10 + Math.random() * 40, // Random size (10-50px)
      delay: Math.random() * 2, // Random delay (0-2s)
      duration: 15 + Math.random() * 20, // Random duration (15-35s)
      opacity: 0.1 + Math.random() * 0.3, // Random opacity (0.1-0.4)
      shape: shapes[Math.floor(Math.random() * shapes.length)],
      color: colors[Math.floor(Math.random() * colors.length)],
    }))
  }, [count, colors, prefersReducedMotion]) // Dependencies that should trigger recalculation

  if (prefersReducedMotion || elements.length === 0) return null

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {elements.map((element) => {
        let shapeElement

        switch (element.shape) {
          case "circle":
            shapeElement = (
              <div
                className="rounded-full"
                style={{
                  width: element.size,
                  height: element.size,
                  backgroundColor: element.color,
                  opacity: element.opacity,
                }}
              />
            )
            break
          case "square":
            shapeElement = (
              <div
                className="rounded-md"
                style={{
                  width: element.size,
                  height: element.size,
                  backgroundColor: element.color,
                  opacity: element.opacity,
                  transform: `rotate(${Math.random() * 45}deg)`,
                }}
              />
            )
            break
          default:
            shapeElement = null
        }

        return (
          <motion.div
            key={element.id}
            className="absolute"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
            }}
            animate={{
              x: [0, Math.random() * 50 - 25, Math.random() * 50 - 25, 0],
              y: [0, Math.random() * 50 - 25, Math.random() * 50 - 25, 0],
              rotate: [0, Math.random() * 60 - 30, Math.random() * 60 - 30, 0],
            }}
            transition={{
              duration: element.duration,
              delay: element.delay,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          >
            {shapeElement}
          </motion.div>
        )
      })}
    </div>
  )
}
