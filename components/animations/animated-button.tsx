"use client"

import { type ReactNode, useMemo } from "react"
import { motion } from "framer-motion"
import { Button, type ButtonProps } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

interface AnimatedButtonProps extends ButtonProps {
  children: ReactNode
}

export function AnimatedButton({ children, className, ...props }: AnimatedButtonProps) {
  const prefersReducedMotion = useReducedMotion()

  // Use useMemo to avoid recreating variants on every render
  const buttonVariants = useMemo(() => {
    return {
      hover: prefersReducedMotion
        ? {}
        : {
            scale: 1.05,
            transition: {
              type: "spring",
              stiffness: 400,
              damping: 10,
            },
          },
      tap: prefersReducedMotion
        ? {}
        : {
            scale: 0.95,
          },
    }
  }, [prefersReducedMotion])

  return (
    <motion.div whileHover="hover" whileTap="tap" variants={buttonVariants}>
      <Button className={cn(className)} {...props}>
        {children}
      </Button>
    </motion.div>
  )
}
