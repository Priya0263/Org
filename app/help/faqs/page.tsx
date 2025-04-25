import Link from "next/link"
import { HelpCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ScrollReveal } from "@/components/animations/scroll-reveal"

export default function FAQsPage() {
  // FAQ categories
  const faqCategories = [
    {
      id: "general",
      title: "General Questions",
      description: "Basic information about organ donation",
      faqs: [
        {
          id: "what-is-organ-donation",
          question: "What is organ donation?",
          answer:
            "Organ donation is the process of surgically removing an organ or tissue from one person (the donor) and placing it into another person (the recipient). Transplants can save or greatly enhance the lives of those who receive them.",
        },
        {
          id: "who-can-become-donor",
          question: "Who can become an organ donor?",
          answer:
            "Almost anyone can be an organ donor, regardless of age or medical history. The medical condition of the organs is evaluated at the time of death. Even those with chronic conditions such as diabetes or hypertension can donate.",
        },
        {
          id: "how-to-register",
          question: "How do I register as an organ donor?",
          answer:
            "You can register as an organ donor through our platform by creating an account and completing the donor registration process. You can also register through your state's donor registry or when you renew your driver's license.",
        },
        {
          id: "age-limit",
          question: "Is there an age limit for organ donation?",
          answer:
            "There is no defined age limit for organ donation. The decision about whether to use your organs is based on strict medical criteria, not age. Organs have been successfully transplanted from donors in their 70s and 80s.",
        },
        {
          id: "cost-to-donor",
          question: "Does it cost anything to be an organ donor?",
          answer:
            "No, there is no cost to the donor or their family for organ or tissue donation. All costs related to donation are paid by the organ procurement organization.",
        },
      ],
    },
    {
      id: "medical",
      title: "Medical Information",
      description: "Health-related questions about donation",
      faqs: [
        {
          id: "medical-conditions",
          question: "Can I donate if I have a medical condition?",
          answer:
            "Many people with medical conditions can still donate organs. The decision about whether an organ is suitable for transplantation is made at the time of death based on specific medical criteria.",
        },
        {
          id: "which-organs",
          question: "Which organs and tissues can be donated?",
          answer:
            "Organs that can be donated include the heart, kidneys, liver, lungs, pancreas, and intestines. Tissues include corneas, skin, heart valves, bone, blood vessels, and connective tissue.",
        },
        {
          id: "brain-death",
          question: "What is brain death and how is it related to organ donation?",
          answer:
            "Brain death occurs when a person has no brain function and cannot breathe on their own. It is legally and medically defined as death. Organ donation often occurs after brain death when the organs are still viable.",
        },
        {
          id: "living-donation",
          question: "What is living donation?",
          answer:
            "Living donation occurs when a living person donates an organ or part of an organ to someone in need. The donor and recipient may be compatible family members, friends, or even strangers.",
        },
        {
          id: "compatibility",
          question: "How is donor-recipient compatibility determined?",
          answer:
            "Compatibility is determined through blood typing, tissue typing, and cross-matching. Factors such as blood type, body size, medical urgency, waiting time, and geographical location are considered.",
        },
      ],
    },
    {
      id: "process",
      title: "Donation Process",
      description: "How the donation process works",
      faqs: [
        {
          id: "process-steps",
          question: "What happens during the organ donation process?",
          answer:
            "The process involves identification of a potential donor, evaluation of medical suitability, obtaining consent, maintaining the donor's organs until they can be recovered, surgical recovery of organs, and transportation to the recipient's transplant center.",
        },
        {
          id: "family-consent",
          question: "Do my family members need to give consent for donation?",
          answer:
            "In many cases, even if you've registered as a donor, your family may be consulted before donation proceeds. It's important to share your donation decision with your family so they can support your wishes.",
        },
        {
          id: "organ-allocation",
          question: "How are organs allocated to recipients?",
          answer:
            "Organs are allocated based on medical urgency, blood and tissue type matching, time on the waiting list, and geographic location. The system is designed to be fair and transparent.",
        },
        {
          id: "recovery-time",
          question: "How long does it take to recover from living donation?",
          answer:
            "Recovery time varies depending on the type of donation, your overall health, and other factors. Kidney donors typically return to normal activities within 4-6 weeks, while liver donors may take 8-12 weeks.",
        },
        {
          id: "funeral-arrangements",
          question: "Will organ donation affect funeral arrangements?",
          answer:
            "No, organ donation does not interfere with having an open-casket funeral. The body is treated with respect and dignity, and the recovery of organs does not disfigure the body or delay funeral arrangements.",
        },
      ],
    },
    {
      id: "ethical",
      title: "Ethical Considerations",
      description: "Ethical aspects of organ donation",
      faqs: [
        {
          id: "religious-views",
          question: "What do major religions say about organ donation?",
          answer:
            "Most major religions support organ donation as an act of charity and love. These include Christianity, Islam, Judaism, Hinduism, and Buddhism. If you have concerns, consult with your religious leader.",
        },
        {
          id: "donor-privacy",
          question: "Is my privacy protected as a donor?",
          answer:
            "Yes, donor and recipient confidentiality is protected by law. Personal information is kept confidential, though anonymized information may be shared between donor families and recipients if both parties consent.",
        },
        {
          id: "selling-organs",
          question: "Is it legal to sell organs?",
          answer:
            "No, the buying and selling of organs is illegal in most countries, including the United States. Organ donation is based on altruism and the desire to help others.",
        },
        {
          id: "fair-allocation",
          question: "How is the organ allocation system fair?",
          answer:
            "The organ allocation system is designed to be fair, equitable, and based on medical criteria. Factors such as celebrity status, wealth, or social status do not play a role in determining who receives an organ.",
        },
        {
          id: "change-mind",
          question: "Can I change my mind about being a donor?",
          answer:
            "Yes, you can change your donor status at any time by updating your registration or informing your family of your new decision.",
        },
      ],
    },
    {
      id: "platform",
      title: "Using Our Platform",
      description: "Questions about using ORGANATE",
      faqs: [
        {
          id: "create-account",
          question: "How do I create an account on ORGANATE?",
          answer:
            "To create an account, click on the 'Register' button in the top navigation bar, fill out the required information, and follow the verification process. Once verified, you can complete your profile.",
        },
        {
          id: "update-information",
          question: "How can I update my medical information?",
          answer:
            "You can update your medical information by logging into your account, navigating to your profile, and selecting the 'Medical Information' section. Click on 'Update Medical Information' to make changes.",
        },
        {
          id: "privacy-security",
          question: "How is my data protected on ORGANATE?",
          answer:
            "We use industry-standard encryption and security measures to protect your personal and medical information. Our privacy policy outlines how we collect, use, and protect your data.",
        },
        {
          id: "contact-support",
          question: "How do I contact support if I have issues with the platform?",
          answer:
            "You can contact our support team through the 'Help' section by selecting 'Contact Support'. We offer live chat, email, and phone support options.",
        },
        {
          id: "delete-account",
          question: "Can I delete my account?",
          answer:
            "Yes, you can delete your account by going to your account settings and selecting 'Delete Account'. Please note that some information may be retained for legal and medical purposes.",
        },
      ],
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Frequently Asked Questions
                </h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                  Find answers to common questions about organ donation and our platform
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Input type="search" placeholder="Search FAQs..." />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="w-full py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:gap-12">
              {faqCategories.map((category) => (
                <ScrollReveal key={category.id}>
                  <Card id={category.id} className="overflow-hidden">
                    <CardHeader className="bg-muted/50">
                      <CardTitle className="flex items-center gap-2">
                        <HelpCircle className="h-5 w-5 text-primary" />
                        {category.title}
                      </CardTitle>
                      <CardDescription>{category.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <Accordion type="single" collapsible className="w-full">
                        {category.faqs.map((faq) => (
                          <AccordionItem key={faq.id} value={faq.id} id={faq.id}>
                            <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                            <AccordionContent>
                              <p className="text-muted-foreground">{faq.answer}</p>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Still Need Help */}
        <section className="w-full py-12 md:py-16 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Still Have Questions?</h2>
                <p className="max-w-[700px] text-muted-foreground">
                  If you couldn't find the answer you were looking for, our support team is here to help.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild>
                  <Link href="/help/contact">Contact Support</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/help">Back to Help Center</Link>
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
