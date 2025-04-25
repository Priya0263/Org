import Link from "next/link"
import Image from "next/image"
import { Search, Calendar, User, ArrowRight, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function BlogPage() {
  // Mock data for blog posts
  const featuredPost = {
    id: 1,
    title: "Understanding Organ Compatibility: What You Need to Know",
    excerpt:
      "Learn about the factors that determine compatibility between donors and recipients, and how matching algorithms work to find the best possible matches.",
    image: "/placeholder.svg?height=600&width=1200",
    category: "Education",
    date: "March 20, 2025",
    author: "Dr. Sarah Johnson",
    authorImage: "/placeholder.svg?height=100&width=100",
    readTime: "8 min read",
  }

  const recentPosts = [
    {
      id: 2,
      title: "The Journey of an Organ Donor: What to Expect",
      excerpt: "Follow the step-by-step process of becoming an organ donor and making a difference in someone's life.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Donor Guide",
      date: "March 15, 2025",
      author: "Michael Chen",
      readTime: "6 min read",
    },
    {
      id: 3,
      title: "Myths About Organ Donation Debunked",
      excerpt:
        "Debunking common misconceptions about organ donation and transplantation to help more people make informed decisions.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Education",
      date: "March 10, 2025",
      author: "Dr. Emily Rodriguez",
      readTime: "5 min read",
    },
    {
      id: 4,
      title: "Advances in Transplant Technology: What's New in 2025",
      excerpt:
        "Explore the latest technological advancements in organ transplantation that are improving outcomes and saving more lives.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Technology",
      date: "March 5, 2025",
      author: "Dr. James Wilson",
      readTime: "7 min read",
    },
  ]

  const allPosts = [
    ...recentPosts,
    {
      id: 5,
      title: "Supporting a Loved One Through Transplant Recovery",
      excerpt:
        "Practical advice for family members and friends on how to provide emotional and physical support during the recovery process.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Support",
      date: "February 28, 2025",
      author: "Lisa Thompson",
      readTime: "6 min read",
    },
    {
      id: 6,
      title: "Nutrition After Transplant: Building a Healthy Diet",
      excerpt:
        "Dietary recommendations and meal planning tips for transplant recipients to maintain optimal health post-surgery.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Health",
      date: "February 20, 2025",
      author: "Dr. Robert Garcia",
      readTime: "5 min read",
    },
    {
      id: 7,
      title: "The Emotional Impact of Receiving an Organ Donation",
      excerpt:
        "Understanding the complex emotions that recipients may experience and strategies for maintaining mental well-being.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Mental Health",
      date: "February 15, 2025",
      author: "Dr. Amanda Lee",
      readTime: "8 min read",
    },
    {
      id: 8,
      title: "Living Donors: Heroes Among Us",
      excerpt:
        "Stories of living donors who have given the gift of life and how their decision has impacted both recipients and themselves.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Stories",
      date: "February 10, 2025",
      author: "David Wilson",
      readTime: "7 min read",
    },
  ]

  // Categories for filtering
  const categories = ["All", "Education", "Donor Guide", "Technology", "Support", "Health", "Mental Health", "Stories"]

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-green-50 to-blue-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  ORGANATE Blog
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Stay informed with the latest news, insights, and stories about organ donation and transplantation.
                </p>
                <div className="flex max-w-md items-center space-x-2">
                  <Input type="text" placeholder="Search articles..." className="flex-1" />
                  <Button type="submit" size="icon">
                    <Search className="h-4 w-4" />
                    <span className="sr-only">Search</span>
                  </Button>
                </div>
              </div>
              <div className="mx-auto lg:mx-0 relative aspect-video overflow-hidden rounded-xl">
                <Image
                  src="/placeholder.svg?height=720&width=1280"
                  alt="Blog hero image"
                  width={1280}
                  height={720}
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="w-full py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Featured Article</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our most important and timely content to keep you informed.
                </p>
              </div>
            </div>
            <div className="mt-8">
              <div className="group relative overflow-hidden rounded-lg border">
                <div className="aspect-video w-full overflow-hidden">
                  <Image
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    width={1200}
                    height={600}
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Badge className="bg-primary hover:bg-primary">{featuredPost.category}</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="mr-1 h-4 w-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <User className="mr-1 h-4 w-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="text-sm text-muted-foreground">{featuredPost.readTime}</div>
                  </div>
                  <h3 className="text-2xl font-bold">{featuredPost.title}</h3>
                  <p className="mt-2 text-muted-foreground">{featuredPost.excerpt}</p>
                  <Button variant="link" className="mt-4 p-0 text-primary" asChild>
                    <Link href={`/blog/${featuredPost.id}`}>
                      Read full article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Posts */}
        <section className="w-full py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Recent Articles</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Stay up to date with our latest content and insights.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {recentPosts.map((post) => (
                <div key={post.id} className="group relative overflow-hidden rounded-lg border">
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={600}
                      height={400}
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline">{post.category}</Badge>
                      <span className="text-xs text-muted-foreground">{post.date}</span>
                    </div>
                    <h3 className="text-xl font-bold">{post.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="text-xs text-muted-foreground">
                        By {post.author} • {post.readTime}
                      </div>
                      <Button variant="link" className="p-0 text-primary" asChild>
                        <Link href={`/blog/${post.id}`}>Read more</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All Posts with Categories */}
        <section className="w-full py-12 md:py-16 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">All Articles</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Browse our complete collection of articles on organ donation and transplantation.
                </p>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <Tabs defaultValue="All" className="w-full max-w-3xl">
                <TabsList className="flex flex-wrap justify-start h-auto bg-transparent p-0 mb-8">
                  {categories.map((category) => (
                    <TabsTrigger
                      key={category}
                      value={category}
                      className="rounded-full border bg-background data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:border-primary mb-2 mr-2"
                    >
                      {category}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
              {allPosts.map((post) => (
                <div key={post.id} className="group relative overflow-hidden rounded-lg border bg-background">
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={600}
                      height={400}
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline">{post.category}</Badge>
                      <span className="text-xs text-muted-foreground">{post.date}</span>
                    </div>
                    <h3 className="text-lg font-bold line-clamp-2">{post.title}</h3>
                    <p className="mt-2 text-xs text-muted-foreground line-clamp-2">{post.excerpt}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="text-xs text-muted-foreground">
                        By {post.author} • {post.readTime}
                      </div>
                      <Button variant="link" className="p-0 h-auto text-xs text-primary" asChild>
                        <Link href={`/blog/${post.id}`}>Read more</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-12">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Load More Articles
                <BookOpen className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Stay Informed</h2>
                <p className="max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Subscribe to our newsletter for the latest updates on organ donation and transplantation.
                </p>
              </div>
              <div className="w-full max-w-md space-y-2">
                <div className="flex space-x-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 bg-primary-foreground text-foreground"
                  />
                  <Button variant="secondary" asChild>
                    <Link href="/auth/register">Subscribe</Link>
                  </Button>
                </div>
                <p className="text-xs text-primary-foreground/80">We respect your privacy. Unsubscribe at any time.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
