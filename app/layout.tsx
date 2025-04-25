import type React from "react"
import "@/app/globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import { AuthProvider } from "@/components/auth-context"
import { SiteHeader } from "@/components/site-header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Organate - Organ Donation Platform",
  description: "A platform for organ donation and transplantation.",
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.className)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <AuthProvider>
            <div className="relative flex min-h-screen flex-col">
              <SiteHeader />
              <div className="flex-1">{children}</div>
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
