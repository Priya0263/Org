"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Heart, Home } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useAuth } from "./auth-context"

export function MainNav() {
  const pathname = usePathname()
  const { isLoggedIn, logout } = useAuth()

  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4 container">
        <div className="mr-8 flex items-center">
          <Heart className="h-6 w-6 text-primary" />
          <span className="ml-2 text-xl font-bold">Organate</span>
        </div>

        <nav className="flex items-center space-x-6 text-sm font-medium flex-1">
          <Link
            href="/"
            className={cn(
              "transition-colors hover:text-primary",
              pathname === "/" ? "text-primary" : "text-muted-foreground",
            )}
          >
            <div className="flex items-center">
              <Home className="mr-1 h-4 w-4" />
              Home
            </div>
          </Link>

          {!isLoggedIn && (
            <>
              <Link
                href="/auth/register"
                className={cn(
                  "transition-colors hover:text-primary",
                  pathname === "/auth/register" ? "text-primary" : "text-muted-foreground",
                )}
              >
                Register
              </Link>
              <Link
                href="/auth/login"
                className={cn(
                  "transition-colors hover:text-primary",
                  pathname === "/auth/login" ? "text-primary" : "text-muted-foreground",
                )}
              >
                Login
              </Link>
            </>
          )}

          {isLoggedIn && (
            <Link
              href="/dashboard"
              className={cn(
                "transition-colors hover:text-primary",
                pathname === "/dashboard" ? "text-primary" : "text-muted-foreground",
              )}
            >
              Dashboard
            </Link>
          )}

          <Link
            href="/blog"
            className={cn(
              "transition-colors hover:text-primary",
              pathname === "/blog" ? "text-primary" : "text-muted-foreground",
            )}
          >
            Blog
          </Link>

          <Link
            href="/success-stories"
            className={cn(
              "transition-colors hover:text-primary",
              pathname === "/success-stories" ? "text-primary" : "text-muted-foreground",
            )}
          >
            Success Stories
          </Link>

          <Link
            href={isLoggedIn ? "/dashboard/health" : "/health-tracking-info"}
            className={cn(
              "transition-colors hover:text-primary",
              pathname === "/dashboard/health" || pathname === "/health-tracking-info"
                ? "text-primary"
                : "text-muted-foreground",
            )}
          >
            <div className="flex items-center">
              <Heart className="mr-1 h-4 w-4" />
              Health Tracking
            </div>
          </Link>

          <Link
            href="/help"
            className={cn(
              "transition-colors hover:text-primary",
              pathname.startsWith("/help") ? "text-primary" : "text-muted-foreground",
            )}
          >
            Help
          </Link>

          {isLoggedIn && (
            <Button variant="ghost" className="text-muted-foreground hover:text-primary" onClick={logout}>
              Logout
            </Button>
          )}
        </nav>
      </div>
    </div>
  )
}
