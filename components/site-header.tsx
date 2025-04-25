"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Heart, HelpCircle, Home, BookOpen, Users, Activity, Menu, X } from "lucide-react"
import { motion, useCycle, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useReducedMotion } from "@/hooks/use-reduced-motion"
import { useMemo } from "react"
import { cn } from "@/lib/utils"
import { useAuth } from "./auth-context"

export function SiteHeader() {
  const prefersReducedMotion = useReducedMotion()
  const [isOpen, toggleOpen] = useCycle(false, true)
  const pathname = usePathname()
  const { isLoggedIn } = useAuth()

  // Use useMemo to avoid recreating animation variants on every render
  const { logoVariants, navItemVariants } = useMemo(() => {
    return {
      logoVariants: {
        initial: { opacity: 0, y: -10 },
        animate: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: "easeOut",
          },
        },
      },
      navItemVariants: {
        initial: { opacity: 0, y: -10 },
        animate: (i: number) => ({
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: "easeOut",
            delay: prefersReducedMotion ? 0 : 0.1 + i * 0.1,
          },
        }),
      },
    }
  }, [prefersReducedMotion])

  const navItems = [
    { href: "/", label: "Home", icon: <Home className="mr-1 h-4 w-4" /> },
    { href: "/auth/register", label: "Register", icon: null, hideWhenLoggedIn: true },
    { href: "/auth/login", label: "Login", icon: null, hideWhenLoggedIn: true },
    { href: "/dashboard", label: "Dashboard", icon: null, showWhenLoggedIn: true },
    { href: "/blog", label: "Blog", icon: <BookOpen className="mr-1 h-4 w-4" /> },
    { href: "/success-stories", label: "Success Stories", icon: <Users className="mr-1 h-4 w-4" /> },
    {
      href: isLoggedIn ? "/dashboard/health" : "/health-tracking-info",
      label: "Health Tracking",
      icon: <Activity className="mr-1 h-4 w-4" />,
    },
    { href: "/help", label: "Help", icon: <HelpCircle className="mr-1 h-4 w-4" /> },
  ]

  // Filter nav items based on login status
  const filteredNavItems = navItems.filter((item) => {
    if (isLoggedIn && item.hideWhenLoggedIn) return false
    if (!isLoggedIn && item.showWhenLoggedIn) return false
    return true
  })

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <motion.div className="flex items-center gap-2" initial="initial" animate="animate" variants={logoVariants}>
          <Link href="/">
            <div className="flex items-center gap-2">
              <motion.div
                whileHover={{
                  scale: prefersReducedMotion ? 1 : 1.1,
                  rotate: prefersReducedMotion ? 0 : [0, -10, 10, -5, 5, 0],
                  transition: {
                    scale: { duration: 0.2 },
                    rotate: { duration: 0.5, ease: "easeInOut" },
                  },
                }}
              >
                <Heart className="h-6 w-6 text-primary" />
              </motion.div>
              <span className="text-xl font-bold">ORGANATE</span>
            </div>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center">
          <div className="flex items-center justify-between space-x-6">
            {filteredNavItems.map((item, i) => (
              <motion.div key={item.href} custom={i} initial="initial" animate="animate" variants={navItemVariants}>
                <Link
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-all hover:text-primary hover:scale-105 flex items-center",
                    pathname === item.href ? "text-primary font-semibold" : "text-muted-foreground",
                  )}
                >
                  {item.icon}
                  {item.label}
                </Link>
              </motion.div>
            ))}
            {/* Removed "Become a Donor" button */}
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => toggleOpen()}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <span className="sr-only">Toggle menu</span>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-background border-b"
          >
            <div className="container py-4 space-y-3">
              {filteredNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center py-2 text-base font-medium transition-colors",
                    pathname === item.href ? "text-primary font-semibold" : "text-muted-foreground",
                  )}
                  onClick={() => toggleOpen(0)}
                >
                  {item.icon}
                  {item.label}
                </Link>
              ))}
              {/* Removed "Become a Donor" button */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
