import Link from "next/link"
import Image from "next/image"
import { Heart, BabyIcon as Kidney, Eye, TreesIcon as Lungs, Brain, Calendar, User } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { CountUp } from "@/components/animations/count-up"
import { SiteFooter } from "@/components/site-footer"

export default function SuccessStoriesPage() {
  // Featured success stories
  const featuredStories = [
    {
      id: 1,
      title: "A Second Chance at Life – John's Heart Transplant Story",
      excerpt:
        "John, a 45-year-old father, received a life-saving heart transplant last year. He now cherishes every moment with his family.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Heart",
      date: "March 15, 2025",
      author: "Emily Thompson",
    },
    {
      id: 2,
      title: "Sarah's Journey: From Kidney Recipient to Advocate",
      excerpt:
        "After receiving a kidney donation at 28, Sarah dedicated her life to advocating for organ donation awareness.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Kidney",
      date: "February 22, 2025",
      author: "Michael Chen",
    },
    {
      id: 3,
      title: "The Gift of Sight: Michael's Cornea Transplant",
      excerpt:
        "After years of deteriorating vision, Michael received a cornea transplant that restored his ability to see his grandchildren.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Cornea",
      date: "January 10, 2025",
      author: "Lisa Johnson",
    },
  ]

  // More success stories
  const moreStories = [
    {
      id: 4,
      title: "Brothers in Life: David's Liver Donation to His Sibling",
      excerpt:
        "When his brother needed a liver transplant, David didn't hesitate to become a living donor, strengthening their bond forever.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Liver",
      date: "December 5, 2024",
      author: "Robert Garcia",
    },
    {
      id: 5,
      title: "A Mother's Gift: Maria's Living Kidney Donation",
      excerpt:
        "When Maria discovered her daughter needed a kidney, she immediately volunteered as a donor, showing the ultimate maternal love.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Kidney",
      date: "November 15, 2024",
      author: "Jennifer Williams",
    },
    {
      id: 6,
      title: "From Recipient to Doctor: Dr. James' Inspiring Journey",
      excerpt:
        "After receiving a heart transplant as a teenager, James dedicated his life to becoming a transplant surgeon to help others.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Heart",
      date: "October 20, 2024",
      author: "David Wilson",
    },
  ]

  // Organ donation statistics
  const organStats = [
    { name: "Kidneys", icon: Kidney, count: 17382, color: "bg-blue-100" },
    { name: "Liver", icon: Heart, count: 8273, color: "bg-red-100" },
    { name: "Eyes/Corneas", icon: Eye, count: 21495, color: "bg-green-100" },
    { name: "Lungs", icon: Lungs, count: 5621, color: "bg-purple-100" },
    { name: "Heart", icon: Heart, count: 3842, color: "bg-pink-100" },
    { name: "Brain Tissue", icon: Brain, count: 1253, color: "bg-amber-100" },
  ]

  // Testimonials
  const testimonials = [
    {
      quote:
        "The day I received my new heart was the day I was truly reborn. Every heartbeat is a reminder of the incredible gift I received.",
      name: "Thomas Reynolds",
      role: "Heart Recipient",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "Donating my kidney to my brother was the most meaningful thing I've ever done. Seeing him healthy again is worth everything.",
      name: "Rebecca Chen",
      role: "Living Donor",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "After my cornea transplant, I saw my grandchildren's faces clearly for the first time. There are no words to express my gratitude.",
      name: "Eleanor Martinez",
      role: "Cornea Recipient",
      image: "/placeholder.svg?height=100&width=100",
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
                    Success Stories
                  </h1>
                  <p className="max-w-[700px] text-muted-foreground md:text-xl">
                    Inspiring journeys of hope, courage, and new beginnings through the gift of organ donation.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild>
                    <Link href="/auth/register">Become a Donor</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/about">Learn More</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=500&text=Lives+Changed"
                  alt="Lives Changed Through Donation"
                  width={500}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Stories */}
        <section className="w-full py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Featured Stories</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover how organ donation has transformed lives and created lasting legacies.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {featuredStories.map((story, i) => (
                <ScrollReveal key={story.id} delay={i * 0.1}>
                  <Card className="overflow-hidden">
                    <div className="aspect-video overflow-hidden">
                      <Image
                        src={story.image || "/placeholder.svg"}
                        alt={story.title}
                        width={600}
                        height={400}
                        className="object-cover transition-transform hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-4">
                      <Badge className="mb-2">{story.category}</Badge>
                      <h3 className="font-bold line-clamp-2">{story.title}</h3>
                      <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{story.excerpt}</p>
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Calendar className="mr-1 h-3 w-3" />
                          <span>{story.date}</span>
                        </div>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <User className="mr-1 h-3 w-3" />
                          <span>{story.author}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="link" className="p-0 h-auto text-xs text-primary" asChild>
                        <Link href={`/success-stories/${story.id}`}>Read story</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Statistics */}
        <section className="w-full py-12 md:py-16 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Lives Changed Through Organ Donation
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Every number represents a life transformed through the gift of donation.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-12">
              {organStats.map((organ, i) => (
                <ScrollReveal key={organ.name} delay={i * 0.1}>
                  <Card className="text-center">
                    <CardContent className="pt-6">
                      <div
                        className={`mx-auto rounded-full p-4 ${organ.color} mb-4 w-16 h-16 flex items-center justify-center`}
                      >
                        <organ.icon className="h-8 w-8" />
                      </div>
                      <h3 className="font-bold mb-1">{organ.name}</h3>
                      <div className="text-2xl font-bold text-primary">
                        <CountUp end={organ.count} />
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">Donors</p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* More Stories */}
        <section className="w-full py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">More Inspiring Stories</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore more journeys of hope and transformation.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {moreStories.map((story, i) => (
                <ScrollReveal key={story.id} delay={i * 0.1}>
                  <Card className="overflow-hidden">
                    <div className="aspect-video overflow-hidden">
                      <Image
                        src={story.image || "/placeholder.svg"}
                        alt={story.title}
                        width={400}
                        height={300}
                        className="object-cover transition-transform hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-4">
                      <Badge variant="outline" className="mb-2">
                        {story.category}
                      </Badge>
                      <h3 className="font-bold line-clamp-2">{story.title}</h3>
                      <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{story.excerpt}</p>
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Calendar className="mr-1 h-3 w-3" />
                          <span>{story.date}</span>
                        </div>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <User className="mr-1 h-3 w-3" />
                          <span>{story.author}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="link" className="p-0 h-auto text-xs text-primary" asChild>
                        <Link href={`/success-stories/${story.id}`}>Read story</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="w-full py-12 md:py-16 bg-primary/5">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">In Their Words</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear directly from those whose lives have been touched by organ donation.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-3">
              {testimonials.map((testimonial, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <Card className="h-full">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 overflow-hidden rounded-full">
                          <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            width={48}
                            height={48}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <CardTitle className="text-base">{testimonial.name}</CardTitle>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="italic text-muted-foreground">"{testimonial.quote}"</p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Be Part of Someone's Success Story
                </h2>
                <p className="max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Your decision to become a donor could give someone a second chance at life.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/auth/register">Register as a Donor</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                  asChild
                >
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
