"use client"

import Link from "next/link"
import { Heart } from "lucide-react"
import { motion } from "framer-motion"
import { useReducedMotion } from "@/hooks/use-reduced-motion"
import { useMemo } from "react"

export function SiteFooter() {
  const prefersReducedMotion = useReducedMotion()

  // Use useMemo to avoid recreating animation variants on every render
  const { footerVariants, itemVariants } = useMemo(() => {
    return {
      footerVariants: {
        initial: { opacity: 0 },
        animate: {
          opacity: 1,
          transition: {
            duration: 0.5,
            staggerChildren: prefersReducedMotion ? 0 : 0.1,
          },
        },
      },
      itemVariants: {
        initial: { opacity: 0, y: 10 },
        animate: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
          },
        },
      },
    }
  }, [prefersReducedMotion])

  const footerLinks = [
    { href: "/about", label: "About" },
    { href: "/help/contact", label: "Contact" },
    { href: "/help", label: "Help" },
  ]

  return (
    <motion.footer
      className="w-full border-t py-6 md:py-0"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={footerVariants}
    >
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <motion.div className="flex items-center gap-2" variants={itemVariants}>
          <motion.div
            animate={
              prefersReducedMotion
                ? {}
                : {
                    scale: [1, 1.1, 1],
                    transition: {
                      duration: 1.5,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "loop",
                      ease: "easeInOut",
                    },
                  }
            }
          >
            <Heart className="h-5 w-5 text-primary" />
          </motion.div>
          <p className="text-sm text-muted-foreground">© 2025 ORGANATE. All rights reserved.</p>
        </motion.div>
        <motion.nav className="flex gap-4 sm:gap-6" variants={itemVariants}>
          {footerLinks.map((link) => (
            <motion.div
              key={link.href}
              whileHover={{ y: prefersReducedMotion ? 0 : -2 }}
              transition={{ duration: 0.2 }}
            >
              <Link href={link.href} className="text-sm font-medium text-muted-foreground hover:text-primary">
                {link.label}
              </Link>
            </motion.div>
          ))}
        </motion.nav>
      </div>
    </motion.footer>
  )
}
