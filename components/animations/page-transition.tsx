"use client"

import { type ReactNode, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

interface PageTransitionProps {
  children: ReactNode
}

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname()
  const prefersReducedMotion = useReducedMotion()
  const prevPathRef = useRef<string | null>(null)

  // Scroll to top on page change, but only when the path actually changes
  useEffect(() => {
    if (prevPathRef.current !== pathname) {
      window.scrollTo(0, 0)
      prevPathRef.current = pathname
    }
  }, [pathname])

  const variants = {
    hidden: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        damping: 25,
        stiffness: 100,
      },
    },
    exit: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : -20,
      transition: {
        duration: 0.3,
      },
    },
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={variants}
        className="flex min-h-screen flex-col"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
