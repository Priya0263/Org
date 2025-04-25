import Link from "next/link"
import Image from "next/image"
import { BookOpen, Video, Download, ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ScrollReveal } from "@/components/animations/scroll-reveal"

export default function ResourcesPage() {
  // Resource categories
  const articles = [
    {
      title: "Understanding the Organ Donation Process",
      description: "A comprehensive overview of how organ donation works from registration to transplantation",
      image: "/placeholder.svg?height=200&width=300&text=Organ+Donation+Process",
      category: "Educational",
      readTime: "10 min read",
      href: "#",
    },
    {
      title: "The Impact of Organ Donation: Statistics and Stories",
      description: "Explore the life-changing impact of organ donation through data and personal narratives",
      image: "/placeholder.svg?height=200&width=300&text=Impact+Statistics",
      category: "Research",
      readTime: "8 min read",
      href: "#",
    },
    {
      title: "Living Donation: What You Need to Know",
      description: "Learn about the process, risks, and benefits of becoming a living organ donor",
      image: "/placeholder.svg?height=200&width=300&text=Living+Donation",
      category: "Medical",
      readTime: "12 min read",
      href: "#",
    },
    {
      title: "Talking to Your Family About Organ Donation",
      description: "Tips for discussing your decision to become an organ donor with loved ones",
      image: "/placeholder.svg?height=200&width=300&text=Family+Discussion",
      category: "Guidance",
      readTime: "6 min read",
      href: "#",
    },
  ]

  const videos = [
    {
      title: "The Journey of an Organ Donor",
      description: "Follow the process of organ donation from decision to donation",
      image: "/placeholder.svg?height=200&width=300&text=Donor+Journey+Video",
      duration: "15:24",
      href: "#",
    },
    {
      title: "Recipient Stories: Lives Transformed",
      description: "Hear from organ recipients about how donation changed their lives",
      image: "/placeholder.svg?height=200&width=300&text=Recipient+Stories+Video",
      duration: "22:10",
      href: "#",
    },
    {
      title: "Medical Perspective: Transplant Surgery",
      description: "Medical professionals explain the transplantation process",
      image: "/placeholder.svg?height=200&width=300&text=Transplant+Surgery+Video",
      duration: "18:45",
      href: "#",
    },
    {
      title: "ORGANATE Platform Tutorial",
      description: "Learn how to navigate and use all features of our platform",
      image: "/placeholder.svg?height=200&width=300&text=Platform+Tutorial+Video",
      duration: "10:32",
      href: "#",
    },
  ]

  const downloads = [
    {
      title: "Organ Donation Guide",
      description: "Comprehensive PDF guide to organ donation process and benefits",
      type: "PDF",
      size: "2.4 MB",
      href: "#",
    },
    {
      title: "Medical Terminology Glossary",
      description: "Reference guide for common medical terms related to organ donation",
      type: "PDF",
      size: "1.8 MB",
      href: "#",
    },
    {
      title: "Legal Forms and Documents",
      description: "Collection of important legal forms related to organ donation",
      type: "ZIP",
      size: "3.5 MB",
      href: "#",
    },
    {
      title: "Donor Card Template",
      description: "Printable donor card to carry in your wallet",
      type: "PDF",
      size: "0.5 MB",
      href: "#",
    },
  ]

  const externalResources = [
    {
      title: "United Network for Organ Sharing (UNOS)",
      description: "National organization managing the organ transplant system",
      website: "unos.org",
      href: "https://unos.org",
    },
    {
      title: "Donate Life America",
      description: "National organization committed to increasing organ donation",
      website: "donatelife.net",
      href: "https://www.donatelife.net",
    },
    {
      title: "National Kidney Foundation",
      description: "Organization focused on kidney health and transplantation",
      website: "kidney.org",
      href: "https://www.kidney.org",
    },
    {
      title: "American Transplant Foundation",
      description: "Support for transplant patients, donors, and families",
      website: "americantransplantfoundation.org",
      href: "https://www.americantransplantfoundation.org",
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Resource Library</h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                  Educational materials, videos, and downloadable resources about organ donation
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Resource Categories */}
        <section className="w-full py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="articles" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="articles">Articles</TabsTrigger>
                <TabsTrigger value="videos">Videos</TabsTrigger>
                <TabsTrigger value="downloads">Downloads</TabsTrigger>
                <TabsTrigger value="external">External Resources</TabsTrigger>
              </TabsList>
              <div className="mt-6">
                <TabsContent value="articles" className="space-y-4">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
                    {articles.map((article, i) => (
                      <ScrollReveal key={article.title} delay={i * 0.1}>
                        <Card className="h-full overflow-hidden">
                          <div className="aspect-video w-full overflow-hidden">
                            <Image
                              src={article.image || "/placeholder.svg"}
                              alt={article.title}
                              width={300}
                              height={200}
                              className="h-full w-full object-cover transition-transform hover:scale-105"
                            />
                          </div>
                          <CardHeader>
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                                {article.category}
                              </span>
                              <span className="text-xs text-muted-foreground">{article.readTime}</span>
                            </div>
                            <CardTitle className="line-clamp-2">{article.title}</CardTitle>
                            <CardDescription className="line-clamp-2">{article.description}</CardDescription>
                          </CardHeader>
                          <CardFooter>
                            <Button variant="outline" className="w-full" asChild>
                              <Link href={article.href}>
                                <BookOpen className="mr-2 h-4 w-4" />
                                Read Article
                              </Link>
                            </Button>
                          </CardFooter>
                        </Card>
                      </ScrollReveal>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="videos" className="space-y-4">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
                    {videos.map((video, i) => (
                      <ScrollReveal key={video.title} delay={i * 0.1}>
                        <Card className="h-full overflow-hidden">
                          <div className="aspect-video w-full overflow-hidden relative">
                            <Image
                              src={video.image || "/placeholder.svg"}
                              alt={video.title}
                              width={300}
                              height={200}
                              className="h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                              <div className="rounded-full bg-white/90 p-3">
                                <Video className="h-6 w-6 text-primary" />
                              </div>
                            </div>
                            <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                              {video.duration}
                            </div>
                          </div>
                          <CardHeader>
                            <CardTitle className="line-clamp-2">{video.title}</CardTitle>
                            <CardDescription className="line-clamp-2">{video.description}</CardHeader>
                          </CardFooter>
                          <CardFooter>
                            <Button variant="outline" className="w-full" asChild>
                              <Link href={video.href}>
                                <Video className="mr-2 h-4 w-4" />
                                Watch Video
                              </Link>
                            </Button>
                          </CardFooter>
                        </Card>
                      </ScrollReveal>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="downloads" className="space-y-4">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
                    {downloads.map((download, i) => (
                      <ScrollReveal key={download.title} delay={i * 0.1}>
                        <Card className="h-full">
                          <CardHeader>
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-medium bg-muted px-2 py-1 rounded-full">
                                {download.type}
                              </span>
                              <span className="text-xs text-muted-foreground">{download.size}</span>
                            </div>
                            <CardTitle className="line-clamp-2">{download.title}</CardTitle>
                            <CardDescription className="line-clamp-2">{download.description}</CardDescription>
                          </CardHeader>
                          <CardFooter>
                            <Button variant="outline" className="w-full" asChild>
                              <Link href={download.href}>
                                <Download className="mr-2 h-4 w-4" />
                                Download
                              </Link>
                            </Button>
                          </CardFooter>
                        </Card>
                      </ScrollReveal>
                    ))}
                  </div>
                  {/* Newsletter subscription removed */}
                </TabsContent>
                <TabsContent value="external" className="space-y-4">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
                    {externalResources.map((resource, i) => (
                      <ScrollReveal key={resource.title} delay={i * 0.1}>
                        <Card className="h-full">
                          <CardHeader>
                            <CardTitle className="line-clamp-2">{resource.title}</CardTitle>
                            <CardDescription className="line-clamp-2">{resource.description}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-muted-foreground">{resource.website}</p>
                          </CardContent>
                          <CardFooter>
                            <Button variant="outline" className="w-full" asChild>
                              <Link href={resource.href} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="mr-2 h-4 w-4" />
                                Visit Website
                              </Link>
                            </Button>
                          </CardFooter>
                        </Card>
                      </ScrollReveal>
                    ))}
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
