import Link from "next/link"
import Image from "next/image"
import { BookOpen, ChevronRight, FileText, UserPlus, Search, Heart, Stethoscope } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ScrollReveal } from "@/components/animations/scroll-reveal"

export default function GuidesPage() {
  // Step-by-step guides
  const guides = [
    {
      id: "register-donor",
      title: "How to Register as a Donor",
      description: "Complete step-by-step guide to registering as an organ donor on our platform",
      icon: UserPlus,
      image: "/placeholder.svg?height=200&width=300&text=Register+as+Donor",
      steps: 5,
      time: "5 min",
      color: "bg-primary/10 text-primary",
      href: "/help/guides/register-donor",
    },
    {
      id: "check-status",
      title: "Checking Your Donor Status",
      description: "Learn how to view and update your donor status and preferences",
      icon: Search,
      image: "/placeholder.svg?height=200&width=300&text=Check+Status",
      steps: 3,
      time: "2 min",
      color: "bg-blue-100 text-blue-600",
      href: "/help/guides/check-status",
    },
    {
      id: "recipient-registration",
      title: "Registering as a Recipient",
      description: "Guide for those in need of an organ transplant to register on our platform",
      icon: Heart,
      image: "/placeholder.svg?height=200&width=300&text=Recipient+Registration",
      steps: 7,
      time: "10 min",
      color: "bg-green-100 text-green-600",
      href: "/help/guides/recipient-registration",
    },
    {
      id: "health-tracking",
      title: "Using Health Tracking Features",
      description: "How to track and share your health information with medical professionals",
      icon: Stethoscope,
      image: "/placeholder.svg?height=200&width=300&text=Health+Tracking",
      steps: 4,
      time: "4 min",
      color: "bg-purple-100 text-purple-600",
      href: "/help/guides/health-tracking",
    },
    {
      id: "update-medical",
      title: "Updating Medical Information",
      description: "Keep your medical information current for better matching",
      icon: FileText,
      image: "/placeholder.svg?height=200&width=300&text=Update+Medical+Info",
      steps: 3,
      time: "3 min",
      color: "bg-amber-100 text-amber-600",
      href: "/help/guides/update-medical",
    },
    {
      id: "contact-support",
      title: "Contacting Support",
      description: "Different ways to get help from our support team",
      icon: BookOpen,
      image: "/placeholder.svg?height=200&width=300&text=Contact+Support",
      steps: 2,
      time: "1 min",
      color: "bg-red-100 text-red-600",
      href: "/help/guides/contact-support",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-16 bg-primary/5">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Step-by-Step Guides</h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                  Detailed tutorials to help you navigate our platform and the organ donation process
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Guides Grid */}
        <section className="w-full py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {guides.map((guide, i) => (
                <ScrollReveal key={guide.id} delay={i * 0.1}>
                  <Card className="h-full overflow-hidden">
                    <div className="aspect-video w-full overflow-hidden">
                      <Image
                        src={guide.image || "/placeholder.svg"}
                        alt={guide.title}
                        width={300}
                        height={200}
                        className="h-full w-full object-cover transition-transform hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <div className={`w-10 h-10 rounded-full ${guide.color} flex items-center justify-center mb-2`}>
                        <guide.icon className="h-5 w-5" />
                      </div>
                      <CardTitle>{guide.title}</CardTitle>
                      <CardDescription>{guide.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <FileText className="mr-1 h-4 w-4" />
                          <span>{guide.steps} steps</span>
                        </div>
                        <div className="flex items-center">
                          <BookOpen className="mr-1 h-4 w-4" />
                          <span>{guide.time} read</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" asChild>
                        <Link href={guide.href}>
                          View Guide
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Back to Help Center */}
        <section className="w-full py-8 md:py-12 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex justify-center">
              <Button variant="outline" asChild>
                <Link href="/help">Back to Help Center</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
