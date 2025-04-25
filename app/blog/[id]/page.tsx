import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, Facebook, Twitter, Linkedin, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

// This would normally be fetched from a database
const getBlogPost = (id: string) => {
  // Mock blog post data
  return {
    id: Number.parseInt(id),
    title: "Understanding Organ Compatibility: What You Need to Know",
    excerpt:
      "Learn about the factors that determine compatibility between donors and recipients, and how matching algorithms work to find the best possible matches.",
    content: `
      <p>Organ compatibility is a critical factor in successful transplantation. When a donor organ is not compatible with the recipient's body, the immune system may recognize it as foreign and attack it, leading to rejection. Understanding the factors that determine compatibility can help both donors and recipients navigate the transplantation process more effectively.</p>
      
      <h2>Blood Type Compatibility</h2>
      
      <p>Blood type is one of the most important factors in determining organ compatibility. The ABO blood group system classifies blood into four types: A, B, AB, and O. For most organ transplants, donors and recipients must have compatible blood types:</p>
      
      <ul>
        <li>Type O individuals can donate to any blood type (universal donors)</li>
        <li>Type A individuals can donate to types A and AB</li>
        <li>Type B individuals can donate to types B and AB</li>
        <li>Type AB individuals can donate only to type AB (universal recipients)</li>
      </ul>
      
      <p>However, in some cases, such as liver transplants, blood type compatibility requirements may be less strict due to the liver's unique regenerative capabilities.</p>
      
      <h2>Tissue Typing (HLA Matching)</h2>
      
      <p>Human Leukocyte Antigens (HLA) are proteins found on most cells in your body. Your immune system uses these markers to recognize which cells belong in your body and which do not. The closer the HLA match between donor and recipient, the better the chance of a successful transplant.</p>
      
      <p>There are six major HLA antigens that are tested for transplantation. The best possible match would be a 6/6 match, meaning all six antigens match between donor and recipient. However, with modern immunosuppressive medications, transplants can still be successful with fewer matching antigens.</p>
      
      <h2>Crossmatching</h2>
      
      <p>Crossmatching is a test performed before transplantation to determine if the recipient has preformed antibodies against the donor's HLA antigens. A positive crossmatch means the recipient has antibodies against the donor and the transplant is likely to be rejected. A negative crossmatch indicates compatibility and allows the transplant to proceed.</p>
      
      <h2>Size Matching</h2>
      
      <p>For certain organs, such as hearts and lungs, the size of the donor organ must be appropriate for the recipient's body. A heart that is too small may not be able to pump enough blood for the recipient's body, while a heart that is too large may not fit properly in the chest cavity.</p>
      
      <h2>Age Considerations</h2>
      
      <p>While not a direct compatibility factor, the age of both donor and recipient can influence transplant outcomes. Generally, organs from younger donors may function better and last longer than those from older donors. However, successful transplants can occur across a wide range of ages.</p>
      
      <h2>Matching Algorithms</h2>
      
      <p>Modern organ allocation systems use sophisticated algorithms to match donors with recipients. These algorithms take into account multiple factors including medical urgency, waiting time, geographic proximity, and biological compatibility to ensure the most efficient and equitable distribution of organs.</p>
      
      <p>At ORGANATE, we use advanced matching technology to identify potential donor-recipient pairs with the highest likelihood of successful outcomes. Our system continuously updates as new medical research emerges, ensuring that we're always using the most current scientific knowledge to facilitate life-saving transplants.</p>
      
      <h2>Conclusion</h2>
      
      <p>Understanding organ compatibility is essential for both donors and recipients in the transplantation process. While perfect matches are ideal, advances in immunosuppressive medications and transplant techniques have made it possible to successfully transplant organs even with fewer matching factors. If you're considering becoming a donor or are awaiting a transplant, consult with your healthcare provider to understand your specific compatibility requirements.</p>
    `,
    image: "/placeholder.svg?height=600&width=1200",
    category: "Education",
    date: "March 20, 2025",
    author: "Dr. Sarah Johnson",
    authorImage: "/placeholder.svg?height=100&width=100",
    authorBio:
      "Dr. Sarah Johnson is a transplant surgeon with over 15 years of experience. She specializes in kidney and liver transplants and is passionate about educating the public on organ donation.",
    readTime: "8 min read",
    tags: ["Organ Compatibility", "Transplantation", "Medical Education", "Donor Matching"],
  }
}

// Related posts
const relatedPosts = [
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

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = getBlogPost(params.id)

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        <article className="container max-w-4xl py-12 md:py-16">
          <div className="mb-8">
            <Button variant="ghost" className="mb-4 -ml-4 text-muted-foreground" asChild>
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to all articles
              </Link>
            </Button>

            <Badge className="mb-4">{post.category}</Badge>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">{post.title}</h1>
            <p className="text-xl text-muted-foreground mb-6">{post.excerpt}</p>

            <div className="flex flex-wrap items-center gap-6 mb-8">
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarImage src={post.authorImage} alt={post.author} />
                  <AvatarFallback>
                    {post.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-sm">{post.author}</p>
                </div>
              </div>

              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="mr-1 h-4 w-4" />
                <span>{post.date}</span>
              </div>

              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="mr-1 h-4 w-4" />
                <span>{post.readTime}</span>
              </div>

              <div className="flex items-center gap-2 ml-auto">
                <span className="text-sm text-muted-foreground">Share:</span>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Linkedin className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="relative aspect-video w-full overflow-hidden rounded-lg mb-8">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                width={1200}
                height={600}
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />

          <div className="flex flex-wrap gap-2 mt-8">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-sm">
                {tag}
              </Badge>
            ))}
          </div>

          <Separator className="my-12" />

          <div className="flex flex-col md:flex-row gap-6 items-start">
            <Avatar className="h-16 w-16">
              <AvatarImage src={post.authorImage} alt={post.author} />
              <AvatarFallback>
                {post.author
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-lg font-bold">About the Author</h3>
              <p className="font-medium">{post.author}</p>
              <p className="text-muted-foreground mt-2">{post.authorBio}</p>
            </div>
          </div>
        </article>

        {/* Related Articles */}
        <section className="w-full py-12 md:py-16 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Related Articles</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Continue exploring topics related to organ donation and transplantation.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((post) => (
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
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
