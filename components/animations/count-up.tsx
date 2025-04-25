"use client"

import { useEffect, useState, useRef } from "react"
import { useInView } from "framer-motion"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

interface CountUpProps {
  end: number
  duration?: number
  delay?: number
  prefix?: string
  suffix?: string
  className?: string
}

export function CountUp({ end, duration = 2, delay = 0, prefix = "", suffix = "", className = "" }: CountUpProps) {
  const [count, setCount] = useState(0)
  const prefersReducedMotion = useReducedMotion()
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const animationRef = useRef<number>()
  const startTimeRef = useRef<number>()

  useEffect(() => {
    if (!isInView) return

    // If reduced motion is preferred, just set the end value
    if (prefersReducedMotion) {
      setCount(end)
      return
    }

    // Cleanup function to cancel animation frame
    const cleanup = () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }

    // Delay the animation start if needed
    const timeoutId = setTimeout(() => {
      const animate = (timestamp: number) => {
        if (!startTimeRef.current) startTimeRef.current = timestamp
        const progress = Math.min((timestamp - startTimeRef.current) / (duration * 1000), 1)

        // Use easeOutExpo for a nice deceleration effect
        const easeOutExpo = 1 - Math.pow(2, -10 * progress)
        setCount(Math.floor(easeOutExpo * end))

        if (progress < 1) {
          animationRef.current = requestAnimationFrame(animate)
        } else {
          setCount(end)
        }
      }

      animationRef.current = requestAnimationFrame(animate)
    }, delay * 1000)

    return () => {
      clearTimeout(timeoutId)
      cleanup()
    }
  }, [end, duration, delay, isInView, prefersReducedMotion])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}
