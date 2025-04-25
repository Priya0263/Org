import Link from "next/link"
import Image from "next/image"
import { HelpCircle, FileQuestion, BookOpen, Phone, Library, BookText, ChevronRight, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { SiteFooter } from "@/components/site-footer"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { StaggeredChildren } from "@/components/animations/staggered-children"

export default function HelpPage() {
  // Help categories with icons and descriptions
  const helpCategories = [
    {
      title: "FAQs",
      description: "Find answers to commonly asked questions about organ donation",
      icon: FileQuestion,
      href: "/help/faqs",
      color: "bg-primary/10 text-primary",
    },
    {
      title: "Step-by-Step Guides",
      description: "Learn how to use our platform with detailed tutorials",
      icon: BookOpen,
      href: "/help/guides",
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Contact Support",
      description: "Get in touch with our support team for assistance",
      icon: Phone,
      href: "/help/contact",
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Resource Library",
      description: "Access articles, videos, and other educational materials",
      icon: Library,
      href: "/help/resources",
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Glossary",
      description: "Understand medical and technical terms related to organ donation",
      icon: BookText,
      href: "/help/glossary",
      color: "bg-amber-100 text-amber-600",
    },
  ]

  // Popular FAQs for quick access
  const popularFaqs = [
    {
      question: "What is organ donation?",
      answer:
        "Organ donation is the process of surgically removing an organ or tissue from one person (the donor) and placing it into another person (the recipient).",
      href: "/help/faqs#what-is-organ-donation",
    },
    {
      question: "Who can become an organ donor?",
      answer:
        "Almost anyone can be an organ donor, regardless of age or medical history. The medical condition of the organs is evaluated at the time of death.",
      href: "/help/faqs#who-can-become-donor",
    },
    {
      question: "How do I register as an organ donor?",
      answer:
        "You can register as an organ donor through our platform by creating an account and completing the donor registration process.",
      href: "/help/faqs#how-to-register",
    },
    {
      question: "Is there an age limit for organ donation?",
      answer:
        "There is no defined age limit for organ donation. The decision about whether to use your organs is based on strict medical criteria, not age.",
      href: "/help/faqs#age-limit",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-primary/5 to-primary/10">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                    How can we help you?
                  </h1>
                  <p className="max-w-[700px] text-muted-foreground md:text-xl">
                    Find answers, guides, and resources to help you navigate organ donation and our platform.
                  </p>
                </div>
                <div className="flex max-w-md items-center space-x-2">
                  <Input type="text" placeholder="Search for help..." className="flex-1" />
                  <Button type="submit" size="icon">
                    <Search className="h-4 w-4" />
                    <span className="sr-only">Search</span>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=500&text=Help+Center"
                  alt="Help Center"
                  width={500}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Help Categories */}
        <section className="w-full py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Help Categories</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                  Browse our help resources by category to find what you need
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 pt-10 md:grid-cols-2 lg:grid-cols-3">
              {helpCategories.map((category, i) => (
                <ScrollReveal key={category.title} delay={i * 0.1}>
                  <Link href={category.href} className="block h-full">
                    <Card className="h-full transition-all hover:shadow-md">
                      <CardHeader>
                        <div
                          className={`w-12 h-12 rounded-full ${category.color} flex items-center justify-center mb-2`}
                        >
                          <category.icon className="h-6 w-6" />
                        </div>
                        <CardTitle>{category.title}</CardTitle>
                        <CardDescription>{category.description}</CardDescription>
                      </CardHeader>
                      <CardFooter>
                        <Button variant="ghost" className="w-full justify-between">
                          Explore
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </CardFooter>
                    </Card>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Popular FAQs */}
        <section className="w-full py-12 md:py-16 lg:py-20 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Popular Questions</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                  Quick answers to the most common questions
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 pt-10">
              <StaggeredChildren>
                {popularFaqs.map((faq, i) => (
                  <Card key={i} className="overflow-hidden">
                    <CardHeader>
                      <CardTitle className="flex items-start gap-2">
                        <HelpCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                        <span>{faq.question}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="link" className="px-0" asChild>
                        <Link href={faq.href}>Read more</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </StaggeredChildren>
              <div className="flex justify-center pt-6">
                <Button asChild>
                  <Link href="/help/faqs">View all FAQs</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <section className="w-full py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <ScrollReveal>
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Need More Help?</h2>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                      Our support team is available to assist you with any questions or concerns you may have.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Button className="flex-1" asChild>
                      <Link href="/help/contact">Contact Support</Link>
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=300&width=400&text=Support+Team"
                    alt="Support Team"
                    width={400}
                    height={300}
                    className="rounded-lg object-cover"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
