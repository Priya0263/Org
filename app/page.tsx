import Link from "next/link"
import Image from "next/image"
import { Users, BookOpen, ArrowRight, ChevronRight, CheckCircle, Shield, Bell } from "lucide-react"
import { SiteFooter } from "@/components/site-footer"
import { AnimatedButton } from "@/components/animations/animated-button"
import { PulsingHeart } from "@/components/animations/pulsing-heart"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { StaggeredChildren } from "@/components/animations/staggered-children"
import { AnimatedCard } from "@/components/animations/animated-card"
import { CountUp } from "@/components/animations/count-up"
import { FloatingHearts } from "@/components/animations/floating-hearts"
import { FloatingElements } from "@/components/animations/floating-elements"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AuthProvider } from "@/components/auth-context"

// Remove SiteHeader and SiteFooter from the page component since they're now in the layout
export default function Home() {
  // Statistics for CountUp components
  const statistics = [
    { value: 5000, label: "Lives Saved", prefix: "", suffix: "+" },
    { value: 2500, label: "Organs Donated", prefix: "", suffix: "+" },
    { value: 10000, label: "Registered Donors", prefix: "", suffix: "+" },
    { value: 98, label: "Recipient Satisfaction", prefix: "", suffix: "%" },
  ]

  // Features list
  const features = [
    {
      title: "Secure Platform",
      description: "Your information is protected with the highest level of security and privacy standards.",
      icon: Shield,
    },
    {
      title: "Real-time Updates",
      description: "Stay informed with instant notifications about your donation status.",
      icon: Bell,
    },
    {
      title: "Medical Support",
      description: "Access to a network of specialized healthcare professionals throughout your journey.",
      icon: Users,
    },
  ]

  // Testimonials
  const testimonials = [
    {
      quote:
        "Thanks to ORGANATE, I found a kidney donor who saved my life. Their platform made the entire process seamless.",
      author: "Sarah Johnson",
      role: "Kidney Recipient",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "Being able to donate part of my liver and see the impact it had on someone's life was incredibly rewarding.",
      author: "Michael Chen",
      role: "Liver Donor",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <AuthProvider>
      <div className="flex min-h-screen flex-col">
        <main className="flex-1">
          {/* Hero Section - Modern Split Design */}
          <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
            <div className="absolute inset-0 overflow-hidden">
              <FloatingElements
                count={15}
                className="opacity-30"
                colors={["rgba(220, 38, 38, 0.2)", "rgba(255, 255, 255, 0.3)"]}
              />
            </div>

            <div className="container relative z-10 grid min-h-[calc(100vh-4rem)] grid-cols-1 items-center gap-8 py-12 md:grid-cols-2 md:py-24">
              <StaggeredChildren className="flex flex-col justify-center space-y-6">
                <Badge className="w-fit bg-primary/10 text-primary hover:bg-primary/20">Saving Lives Together</Badge>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                  <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                    Connect
                  </span>{" "}
                  and{" "}
                  <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                    Donate
                  </span>
                </h1>
                <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl">
                  Join our community of donors and recipients to make a difference. Every donation has the power to
                  transform lives.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <AnimatedButton size="lg" className="bg-primary hover:bg-primary/90" asChild>
                    <Link href="/auth/register">Register as a Donor</Link>
                  </AnimatedButton>
                  <AnimatedButton size="lg" variant="outline" className="group" asChild>
                    <Link href="/about">
                      Learn More
                      <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </AnimatedButton>
                </div>

                <div className="mt-8 flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="h-10 w-10 overflow-hidden rounded-full border-2 border-background">
                        <Image
                          src={`/placeholder.svg?height=40&width=40&text=${i}`}
                          alt={`User ${i}`}
                          width={40}
                          height={40}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">1,200+</span> people joined this month
                  </p>
                </div>
              </StaggeredChildren>

              <ScrollReveal className="relative mx-auto aspect-square w-full max-w-[500px]" delay={0.3}>
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 blur-3xl" />
                <div className="relative h-full w-full overflow-hidden rounded-3xl border bg-background/50 shadow-xl backdrop-blur-sm">
                  <Image
                    src="/placeholder.svg?height=800&width=800&text=Mother+and+child+embracing"
                    alt="Mother and child embracing after successful transplant"
                    width={800}
                    height={800}
                    className="h-full w-full object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="text-xl font-bold">Make a Difference Today</p>
                    <p className="text-sm opacity-90">One donor can save up to 8 lives</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Curved divider */}
            <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
              <svg
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
                className="absolute bottom-0 h-[100px] w-full fill-background"
              >
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.11,140.83,94.17,208.18,70.28,289.4,41.64,204,121.32,321.39,56.44Z" />
              </svg>
            </div>
          </section>

          {/* Features Section - Clean Cards with Icons */}
          <section className="w-full py-20 md:py-32">
            <div className="container px-4 md:px-6">
              <ScrollReveal className="mx-auto max-w-[800px] text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How ORGANATE Works</h2>
                <p className="mt-4 text-muted-foreground md:text-lg">
                  Our platform connects donors with recipients, making the organ donation process transparent and
                  efficient.
                </p>
              </ScrollReveal>

              <div className="mt-16 grid gap-8 md:grid-cols-3">
                {features.map((feature, i) => (
                  <AnimatedCard
                    key={feature.title}
                    index={i}
                    className="group flex flex-col items-start space-y-4 rounded-xl border bg-background p-6 transition-all hover:border-primary/50 hover:shadow-lg"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground">
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                    <Button variant="link" className="group mt-auto p-0 text-primary" asChild>
                      <Link href="/about">
                        Learn more
                        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </AnimatedCard>
                ))}
              </div>

              {/* Process Steps */}
              <div className="mt-24">
                <ScrollReveal className="mx-auto max-w-[800px] text-center">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">The Donation Process</h2>
                  <p className="mt-4 text-muted-foreground md:text-lg">
                    A simple, transparent journey from registration to life-saving donation
                  </p>
                </ScrollReveal>

                <div className="relative mt-16">
                  {/* Connection line */}
                  <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-primary/80 via-primary/50 to-primary/20 md:left-[calc(50%-12rem)]" />

                  {/* Steps */}
                  <div className="space-y-24">
                    <ScrollReveal className="relative grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16">
                      <div className="flex flex-col items-center text-center md:items-end md:text-right">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                          1
                        </div>
                        <h3 className="text-2xl font-bold">Register</h3>
                        <p className="mt-2 text-muted-foreground">
                          Sign up as a donor or recipient and complete your profile with essential medical information.
                        </p>
                      </div>
                      <div className="relative hidden md:block">
                        <div className="absolute left-0 top-0 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-background bg-primary" />
                        <div className="h-full rounded-xl border bg-primary/5 p-6">
                          <Image
                            src="/placeholder.svg?height=300&width=400&text=Person+registering+online"
                            alt="Person registering as an organ donor online"
                            width={400}
                            height={300}
                            className="h-full w-full rounded-lg object-cover"
                          />
                        </div>
                      </div>
                    </ScrollReveal>

                    <ScrollReveal className="relative grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16">
                      <div className="relative order-2 hidden md:block md:order-1">
                        <div className="absolute left-0 top-0 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-background bg-primary" />
                        <div className="h-full rounded-xl border bg-primary/5 p-6">
                          <Image
                            src="/placeholder.svg?height=300&width=400&text=Doctor+with+patient"
                            alt="Doctor discussing organ donation with patient"
                            width={400}
                            height={300}
                            className="h-full w-full rounded-lg object-cover"
                          />
                        </div>
                      </div>
                      <div className="order-1 flex flex-col items-center text-center md:order-2 md:items-start md:text-left">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                          2
                        </div>
                        <h3 className="text-2xl font-bold">Connect</h3>
                        <p className="mt-2 text-muted-foreground">
                          Our platform helps connect donors and recipients based on compatibility and need.
                        </p>
                      </div>
                    </ScrollReveal>

                    <ScrollReveal className="relative grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16">
                      <div className="flex flex-col items-center text-center md:items-end md:text-right">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                          3
                        </div>
                        <h3 className="text-2xl font-bold">Transform Lives</h3>
                        <p className="mt-2 text-muted-foreground">
                          Medical professionals facilitate the donation process, helping you make a life-changing
                          impact.
                        </p>
                      </div>
                      <div className="relative hidden md:block">
                        <div className="absolute left-0 top-0 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-background bg-primary" />
                        <div className="h-full rounded-xl border bg-primary/5 p-6">
                          <Image
                            src="/placeholder.svg?height=300&width=400&text=Emotional+reunion"
                            alt="Emotional reunion between donor family and recipient"
                            width={400}
                            height={300}
                            className="h-full w-full rounded-lg object-cover"
                          />
                        </div>
                      </div>
                    </ScrollReveal>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Impact Section with Image */}
          <section className="w-full bg-primary/5 py-20 md:py-32">
            <div className="container px-4 md:px-6">
              <div className="grid gap-12 md:grid-cols-2">
                <ScrollReveal className="relative order-last md:order-first">
                  <div className="relative h-full min-h-[400px] w-full overflow-hidden rounded-3xl">
                    <Image
                      src="/placeholder.svg?height=600&width=800&text=Heart+transplant+recipient"
                      alt="Heart transplant recipient living a full life"
                      width={800}
                      height={600}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <p className="text-2xl font-bold">Every Donation Matters</p>
                      <p className="mt-2 text-sm opacity-90">One organ donor can save up to 8 lives</p>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal className="flex flex-col justify-center">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Making a Real Impact</h2>
                  <p className="mt-4 text-lg text-muted-foreground">
                    Organ donation is one of the most profound gifts one person can give to another. At ORGANATE, we've
                    facilitated thousands of life-saving connections.
                  </p>
                  <ul className="mt-8 space-y-4">
                    {[
                      "Over 5,000 lives saved through our platform",
                      "Reduced waiting times for critical organs",
                      "Comprehensive support for donors and recipients",
                      "Partnerships with leading medical institutions",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <AnimatedButton className="bg-primary hover:bg-primary/90" asChild>
                      <Link href="/success-stories">Read Success Stories</Link>
                    </AnimatedButton>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </section>

          {/* Testimonials Section - Modern Design */}
          <section className="w-full py-20 md:py-32">
            <div className="container px-4 md:px-6">
              <div className="grid gap-12 md:grid-cols-2">
                <ScrollReveal className="flex flex-col justify-center">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Real Stories, Real Impact
                  </h2>
                  <p className="mt-4 text-lg text-muted-foreground">
                    Hear from donors and recipients who have experienced the life-changing power of organ donation.
                  </p>
                  <div className="mt-8 flex flex-col gap-4">
                    {testimonials.map((testimonial, i) => (
                      <AnimatedCard
                        key={i}
                        index={i}
                        className="relative overflow-visible rounded-xl border bg-background p-6 shadow-sm"
                      >
                        <div className="absolute -left-3 -top-3 text-4xl text-primary">"</div>
                        <div className="relative z-10">
                          <p className="text-muted-foreground">{testimonial.quote}</p>
                          <div className="mt-4 flex items-center gap-3">
                            <div className="h-10 w-10 overflow-hidden rounded-full">
                              <Image
                                src={testimonial.image || "/placeholder.svg"}
                                alt={testimonial.author}
                                width={40}
                                height={40}
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <div>
                              <p className="font-medium">{testimonial.author}</p>
                              <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                            </div>
                          </div>
                        </div>
                      </AnimatedCard>
                    ))}
                  </div>
                  <div className="mt-8">
                    <AnimatedButton
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary/10"
                      asChild
                    >
                      <Link href="/success-stories">
                        Read more stories
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </AnimatedButton>
                  </div>
                </ScrollReveal>

                <ScrollReveal className="relative order-first aspect-square md:order-last" direction="right">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 blur-3xl" />
                  <div className="relative h-full w-full overflow-hidden rounded-3xl border bg-background/50 shadow-xl backdrop-blur-sm">
                    <Image
                      src="/placeholder.svg?height=800&width=800&text=Grateful+recipient+with+family"
                      alt="Grateful organ recipient celebrating life with family"
                      width={800}
                      height={800}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <p className="text-2xl font-bold">5,000+ Lives Changed</p>
                      <p className="mt-2 text-sm opacity-90">Through the power of organ donation</p>
                      <Button variant="secondary" className="mt-4" asChild>
                        <Link href="/success-stories">View Success Stories</Link>
                      </Button>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </section>

          {/* Blog Preview Section */}
          <section className="w-full bg-primary/5 py-20 md:py-32">
            <div className="container px-4 md:px-6">
              <ScrollReveal className="mx-auto max-w-[800px] text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Latest from Our Blog</h2>
                <p className="mt-4 text-muted-foreground md:text-lg">
                  Stay informed with the latest news and insights about organ donation.
                </p>
              </ScrollReveal>

              <div className="mt-16 grid gap-8 md:grid-cols-3">
                {[
                  {
                    title: "Understanding Organ Donation",
                    excerpt: "Learn about the process and importance of becoming an organ donor.",
                    image: "/placeholder.svg?height=400&width=600&text=Doctor+explaining+to+patient",
                    category: "Education",
                  },
                  {
                    title: "The Journey of an Organ Donor",
                    excerpt: "Follow the step-by-step process of becoming an organ donor and making a difference.",
                    image: "/placeholder.svg?height=400&width=600&text=Donor+sharing+story",
                    category: "Donor Guide",
                  },
                  {
                    title: "Myths About Organ Donation",
                    excerpt: "Debunking common misconceptions about organ donation and transplantation.",
                    image: "/placeholder.svg?height=400&width=600&text=Medical+professional+with+heart+model",
                    category: "Education",
                  },
                ].map((post, i) => (
                  <AnimatedCard
                    key={post.title}
                    index={i}
                    className="group overflow-hidden rounded-xl border bg-background transition-all hover:shadow-lg"
                  >
                    <div className="aspect-video overflow-hidden">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        width={600}
                        height={400}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <Badge variant="outline" className="mb-2">
                        {post.category}
                      </Badge>
                      <h3 className="text-xl font-bold group-hover:text-primary">{post.title}</h3>
                      <p className="mt-2 text-muted-foreground">{post.excerpt}</p>
                      <Button variant="link" className="mt-4 p-0 text-primary" asChild>
                        <Link href="/blog">Read more</Link>
                      </Button>
                    </div>
                  </AnimatedCard>
                ))}
              </div>

              <div className="mt-12 flex justify-center">
                <AnimatedButton variant="outline" className="border-primary text-primary hover:bg-primary/10" asChild>
                  <Link href="/blog">
                    View all articles
                    <BookOpen className="ml-2 h-4 w-4" />
                  </Link>
                </AnimatedButton>
              </div>
            </div>
          </section>

          {/* CTA Section - Modern Gradient */}
          <section className="relative overflow-hidden bg-gradient-to-br from-primary to-primary/80 py-20 text-primary-foreground md:py-32">
            <div className="absolute inset-0 overflow-hidden">
              <FloatingHearts count={15} color="rgba(255, 255, 255, 0.2)" />
            </div>

            <div className="container relative z-10 px-4 md:px-6">
              <div className="mx-auto max-w-[900px]">
                <div className="grid gap-12 md:grid-cols-2">
                  <StaggeredChildren className="flex flex-col justify-center space-y-6">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                      Ready to Make a Difference?
                    </h2>
                    <p className="text-lg md:text-xl">
                      Join thousands of donors and recipients who are changing lives through organ donation.
                    </p>
                    <div className="flex flex-col gap-4 sm:flex-row">
                      <AnimatedButton size="lg" variant="secondary" asChild>
                        <Link href="/auth/register">Register as a Donor</Link>
                      </AnimatedButton>
                      <AnimatedButton
                        size="lg"
                        variant="outline"
                        className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                        asChild
                      >
                        <Link href="/about">Learn More</Link>
                      </AnimatedButton>
                    </div>
                  </StaggeredChildren>

                  <div className="grid grid-cols-2 gap-4">
                    {statistics.map((stat, index) => (
                      <ScrollReveal
                        key={index}
                        className="flex flex-col items-center rounded-xl border border-white/20 bg-white/10 p-6 text-center backdrop-blur-sm"
                        delay={index * 0.1}
                      >
                        <CountUp
                          end={stat.value}
                          prefix={stat.prefix}
                          suffix={stat.suffix}
                          className="text-3xl font-bold md:text-4xl"
                          delay={0.5 + index * 0.1}
                        />
                        <p className="mt-2 text-sm md:text-base">{stat.label}</p>
                      </ScrollReveal>
                    ))}
                  </div>
                </div>

                {/* Trust indicators */}
                <div className="mt-16 rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
                  <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-6 w-6" />
                      <span className="text-sm font-medium md:text-base">Secure & Confidential</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-6 w-6" />
                      <span className="text-sm font-medium md:text-base">Medical Expert Support</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-6 w-6" />
                      <span className="text-sm font-medium md:text-base">24/7 Assistance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <PulsingHeart className="h-6 w-6" />
                      <span className="text-sm font-medium md:text-base">Trusted by Thousands</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <SiteFooter />
      </div>
    </AuthProvider>
  )
}
