import Link from "next/link"
import Image from "next/image"
import { Calendar, Facebook, Twitter, Linkedin, ArrowLeft, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

// This would normally be fetched from a database
const getSuccessStory = (id: string) => {
  // Mock success story data
  return {
    id: Number.parseInt(id),
    title: "A Second Chance at Life – John's Heart Transplant Story",
    excerpt:
      "John, a 45-year-old father, received a life-saving heart transplant last year. He now cherishes every moment with his family.",
    content: `
      <p>John Miller never expected to need a heart transplant. At 45, he was active, coaching his son's baseball team and working full-time as an architect. But one day, everything changed.</p>
      
      <p>"I was at my son's game when I felt this crushing pain in my chest," John recalls. "I thought it was just stress or maybe heartburn. I had no idea my heart was failing."</p>
      
      <p>What followed was a diagnosis of severe cardiomyopathy, a condition where the heart muscle becomes enlarged, thick, or rigid, making it harder for the heart to pump blood. Despite medication and lifestyle changes, John's condition deteriorated rapidly.</p>
      
      <h2>The Waiting Game</h2>
      
      <p>"Being placed on the transplant list was both terrifying and hopeful," says John. "You're essentially waiting for someone else's tragedy to become your miracle. That's a heavy thing to carry."</p>
      
      <p>For eight months, John's health declined. Simple tasks became impossible. He couldn't play with his children or even climb the stairs in his home. His wife, Sarah, became his full-time caregiver while also working and raising their two children.</p>
      
      <p>"The hardest part was seeing the fear in my kids' eyes," John says. "My daughter asked me once if I was going to die. How do you answer that when you honestly don't know?"</p>
      
      <h2>The Call That Changed Everything</h2>
      
      <p>Then, on a rainy Tuesday morning, the call came. A compatible heart was available. Within hours, John was prepped for surgery.</p>
      
      <p>"I remember saying goodbye to Sarah and the kids before they wheeled me in," John says, his voice breaking. "I told them I'd see them soon, but part of me wondered if that was true."</p>
      
      <p>The surgery was successful. When John woke up, he immediately noticed a difference.</p>
      
      <p>"It sounds strange, but I could feel that this heart was stronger. Even through the pain of recovery, I could tell this heart wanted to live."</p>
      
      <h2>A New Beginning</h2>
      
      <p>Recovery wasn't easy. There were complications, rejection scares, and countless medications to manage. But John was determined.</p>
      
      <p>"Every day I woke up was a gift from my donor. I wasn't going to waste that gift."</p>
      
      <p>A year later, John is back to coaching baseball. He's returned to work part-time and is slowly rebuilding his strength. He takes anti-rejection medications and will for the rest of his life, but he considers that a small price to pay.</p>
      
      <p>"I get to see my children grow up," he says, smiling. "I get to hold my wife's hand and plan for our future. These are things I almost lost."</p>
      
      <h2>Honoring the Donor</h2>
      
      <p>John has written to his donor's family, though he doesn't know their identity due to privacy protocols.</p>
      
      <p>"How do you thank someone for giving you life? There are no words adequate for that kind of gratitude. But I try every day to live in a way that honors their loved one's gift."</p>
      
      <p>John has become an advocate for organ donation, speaking at community events and encouraging others to register as donors.</p>
      
      <p>"One person can save up to eight lives through organ donation," he points out. "Think about that impact. My donor didn't just save me; they saved my family from losing a husband and father."</p>
      
      <h2>Looking Forward</h2>
      
      <p>Today, John doesn't take anything for granted. He celebrates the small moments: helping with homework, family dinners, even doing household chores.</p>
      
      <p>"Before my transplant, I was always focused on the future—the next project, the next goal. Now I understand that this moment, right now, is what matters most."</p>
      
      <p>As for the future, John has simple hopes.</p>
      
      <p>"I want to see my kids graduate. I want to grow old with Sarah. And I want to make sure my donor's gift wasn't wasted. Every heartbeat is a reminder of their generosity."</p>
      
      <p>John's story is just one of thousands made possible through organ donation. Each day, approximately 17 people die waiting for an organ transplant. By registering as a donor, you could someday give someone like John the ultimate gift: a second chance at life.</p>
    `,
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    category: "Heart",
    date: "March 15, 2025",
    author: "Emily Thompson",
    authorImage: "/placeholder.svg?height=100&width=100",
    authorBio:
      "Emily Thompson is a healthcare journalist specializing in transplant stories and advocacy. She has been writing for ORGANATE for three years.",
    quote:
      "It's a miracle. I get to see my children grow up, something I wasn't sure would happen before my transplant.",
    stats: ["Heart donors increased by 15% this year", "Over 50 families positively impacted this month"],
  }
}

// More success stories
const moreStories = [
  {
    id: 2,
    title: "Sarah's Journey: From Kidney Recipient to Advocate",
    excerpt:
      "After receiving a kidney donation at 28, Sarah dedicated her life to advocating for organ donation awareness.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Kidney",
    date: "February 22, 2025",
  },
  {
    id: 3,
    title: "The Gift of Sight: Michael's Cornea Transplant",
    excerpt:
      "After years of deteriorating vision, Michael received a cornea transplant that restored his ability to see his grandchildren.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Cornea",
    date: "January 10, 2025",
  },
  {
    id: 4,
    title: "Brothers in Life: David's Liver Donation to His Sibling",
    excerpt:
      "When his brother needed a liver transplant, David didn't hesitate to become a living donor, strengthening their bond forever.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Liver",
    date: "December 5, 2024",
  },
]

export default function SuccessStoryPage({ params }: { params: { id: string } }) {
  const story = getSuccessStory(params.id)

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        <article className="container max-w-4xl py-12 md:py-16">
          <div className="mb-8">
            <Button variant="ghost" className="mb-4 -ml-4 text-muted-foreground" asChild>
              <Link href="/success-stories">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to all stories
              </Link>
            </Button>

            <Badge className="mb-4">{story.category}</Badge>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">{story.title}</h1>
            <p className="text-xl text-muted-foreground mb-6">{story.excerpt}</p>

            <div className="flex flex-wrap items-center gap-6 mb-8">
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarImage src={story.authorImage} alt={story.author} />
                  <AvatarFallback>
                    {story.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-sm">{story.author}</p>
                </div>
              </div>

              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="mr-1 h-4 w-4" />
                <span>{story.date}</span>
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
          </div>

          <div className="relative aspect-video w-full overflow-hidden rounded-lg mb-8">
            <Image
              src={story.images[0] || "/placeholder.svg"}
              alt={story.title}
              width={800}
              height={600}
              className="object-cover"
              priority
            />
          </div>

          <div className="bg-primary/10 border-l-4 border-primary p-6 my-8 rounded-r-lg">
            <Quote className="h-8 w-8 text-primary mb-2" />
            <p className="text-xl italic">{story.quote}</p>
          </div>

          <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: story.content }} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            {story.images.slice(1).map((image, index) => (
              <div key={index} className="relative aspect-video overflow-hidden rounded-lg">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${story.title} - image ${index + 2}`}
                  width={600}
                  height={400}
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <div className="bg-muted p-6 rounded-lg mt-8">
            <h3 className="text-lg font-bold mb-2">Impact Statistics</h3>
            <ul className="space-y-2">
              {story.stats.map((stat, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-primary"></span>
                  {stat}
                </li>
              ))}
            </ul>
          </div>

          <Separator className="my-12" />

          <div className="flex flex-col md:flex-row gap-6 items-start">
            <Avatar className="h-16 w-16">
              <AvatarImage src={story.authorImage} alt={story.author} />
              <AvatarFallback>
                {story.author
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-lg font-bold">About the Author</h3>
              <p className="font-medium">{story.author}</p>
              <p className="text-muted-foreground mt-2">{story.authorBio}</p>
            </div>
          </div>
        </article>

        {/* More Success Stories */}
        <section className="w-full py-12 md:py-16 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">More Success Stories</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover more inspiring journeys of hope and transformation.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-3">
              {moreStories.map((story) => (
                <Card key={story.id} className="overflow-hidden">
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
                    <Badge variant="outline" className="mb-2">
                      {story.category}
                    </Badge>
                    <h3 className="font-bold line-clamp-2">{story.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{story.excerpt}</p>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-xs text-muted-foreground">{story.date}</span>
                      <Button variant="link" className="p-0 h-auto text-xs text-primary" asChild>
                        <Link href={`/success-stories/${story.id}`}>Read story</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
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
