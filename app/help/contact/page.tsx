import { Mail, Phone, MapPin, Globe, Clock, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { SiteFooter } from "@/components/site-footer"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-16 bg-primary/5">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                  We're here to help. Choose your preferred method to get in touch with our team.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Options */}
        <section className="w-full py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="email" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="email">Email</TabsTrigger>
                <TabsTrigger value="phone">Phone</TabsTrigger>
                <TabsTrigger value="locations">Locations</TabsTrigger>
              </TabsList>
              <div className="mt-6">
                <TabsContent value="email" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Mail className="h-5 w-5 text-primary" />
                        Email Support
                      </CardTitle>
                      <CardDescription>Send us an email and we'll get back to you within 24 hours</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                          <div className="space-y-2">
                            <label htmlFor="name-email" className="text-sm font-medium">
                              Name
                            </label>
                            <Input id="name-email" placeholder="Your name" />
                          </div>
                          <div className="space-y-2">
                            <label htmlFor="email-email" className="text-sm font-medium">
                              Email
                            </label>
                            <Input id="email-email" type="email" placeholder="Your email" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="subject-email" className="text-sm font-medium">
                            Subject
                          </label>
                          <Input id="subject-email" placeholder="Subject of your inquiry" />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="message-email" className="text-sm font-medium">
                            Message
                          </label>
                          <Textarea
                            id="message-email"
                            placeholder="Please describe your issue in detail"
                            className="min-h-[120px]"
                          />
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Send Email</Button>
                    </CardFooter>
                  </Card>
                  <div className="text-center text-sm text-muted-foreground">
                    <p>Email response times are typically within 24 hours</p>
                  </div>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Direct Email Addresses</CardTitle>
                      <CardDescription>Contact specific departments directly</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="rounded-lg border p-3">
                          <h3 className="font-medium">General Inquiries</h3>
                          <p className="text-sm text-muted-foreground">For general questions and information</p>
                          <p className="mt-1 font-medium text-primary">info@organate.org</p>
                        </div>
                        <div className="rounded-lg border p-3">
                          <h3 className="font-medium">Donor Support</h3>
                          <p className="text-sm text-muted-foreground">For registered and potential donors</p>
                          <p className="mt-1 font-medium text-primary">donors@organate.org</p>
                        </div>
                        <div className="rounded-lg border p-3">
                          <h3 className="font-medium">Recipient Support</h3>
                          <p className="text-sm text-muted-foreground">For organ recipients and applicants</p>
                          <p className="mt-1 font-medium text-primary">recipients@organate.org</p>
                        </div>
                        <div className="rounded-lg border p-3">
                          <h3 className="font-medium">Medical Professionals</h3>
                          <p className="text-sm text-muted-foreground">For healthcare providers and partners</p>
                          <p className="mt-1 font-medium text-primary">medical@organate.org</p>
                        </div>
                        <div className="rounded-lg border p-3">
                          <h3 className="font-medium">Technical Support</h3>
                          <p className="text-sm text-muted-foreground">For website and account issues</p>
                          <p className="mt-1 font-medium text-primary">support@organate.org</p>
                        </div>
                        <div className="rounded-lg border p-3">
                          <h3 className="font-medium">Media Inquiries</h3>
                          <p className="text-sm text-muted-foreground">For press and media requests</p>
                          <p className="mt-1 font-medium text-primary">media@organate.org</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="phone" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Phone className="h-5 w-5 text-primary" />
                        Phone Support
                      </CardTitle>
                      <CardDescription>Speak directly with our support representatives</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div className="rounded-lg border p-4">
                          <h3 className="text-lg font-medium">General Support</h3>
                          <p className="text-muted-foreground">For general inquiries and assistance</p>
                          <p className="mt-2 text-xl font-bold">1-800-ORGANATE (1-800-674-2628)</p>
                          <p className="text-sm text-muted-foreground">Monday - Friday: 9:00 AM - 8:00 PM EST</p>
                        </div>
                        <div className="rounded-lg border p-4">
                          <h3 className="text-lg font-medium">Technical Support</h3>
                          <p className="text-muted-foreground">For website and app-related issues</p>
                          <p className="mt-2 text-xl font-bold">1-888-TECH-HELP (1-888-832-4435)</p>
                          <p className="text-sm text-muted-foreground">Monday - Friday: 8:00 AM - 10:00 PM EST</p>
                          <p className="text-sm text-muted-foreground">Saturday: 10:00 AM - 6:00 PM EST</p>
                        </div>
                        <div className="rounded-lg border p-4">
                          <h3 className="text-lg font-medium">Medical Assistance</h3>
                          <p className="text-muted-foreground">For urgent medical questions</p>
                          <p className="mt-2 text-xl font-bold">1-877-MED-HELP (1-877-633-4357)</p>
                          <p className="text-sm text-muted-foreground">Available 24/7</p>
                        </div>
                        <div className="rounded-lg border p-4">
                          <h3 className="text-lg font-medium">Donor Services</h3>
                          <p className="text-muted-foreground">For registered and potential donors</p>
                          <p className="mt-2 text-xl font-bold">1-866-DONOR-HELP (1-866-366-6743)</p>
                          <p className="text-sm text-muted-foreground">Monday - Friday: 8:00 AM - 8:00 PM EST</p>
                        </div>
                        <div className="rounded-lg border p-4">
                          <h3 className="text-lg font-medium">Recipient Services</h3>
                          <p className="text-muted-foreground">For organ recipients and applicants</p>
                          <p className="mt-2 text-xl font-bold">1-866-RECIPIENT (1-866-732-4743)</p>
                          <p className="text-sm text-muted-foreground">Monday - Friday: 8:00 AM - 8:00 PM EST</p>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <p className="text-sm text-muted-foreground">
                        For emergencies, please call your local emergency services at 911
                      </p>
                    </CardFooter>
                  </Card>
                </TabsContent>
                <TabsContent value="locations" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-primary" />
                        Our Locations
                      </CardTitle>
                      <CardDescription>Visit our offices in person</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-6 md:grid-cols-2">
                        <div className="rounded-lg border p-4">
                          <h3 className="text-lg font-medium">Headquarters</h3>
                          <div className="mt-2 space-y-2">
                            <div className="flex items-start gap-2">
                              <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                              <p className="text-muted-foreground">
                                123 Donation Street
                                <br />
                                Medical City, MC 12345
                                <br />
                                United States
                              </p>
                            </div>
                            <div className="flex items-center gap-2">
                              <Phone className="h-4 w-4 text-primary" />
                              <p className="text-muted-foreground">1-800-ORGANATE</p>
                            </div>
                            <div className="flex items-center gap-2">
                              <Mail className="h-4 w-4 text-primary" />
                              <p className="text-muted-foreground">info@organate.org</p>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4 text-primary" />
                              <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 5:00 PM EST</p>
                            </div>
                          </div>
                        </div>
                        <div className="rounded-lg border p-4">
                          <h3 className="text-lg font-medium">West Coast Office</h3>
                          <div className="mt-2 space-y-2">
                            <div className="flex items-start gap-2">
                              <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                              <p className="text-muted-foreground">
                                456 Transplant Avenue
                                <br />
                                San Francisco, CA 94107
                                <br />
                                United States
                              </p>
                            </div>
                            <div className="flex items-center gap-2">
                              <Phone className="h-4 w-4 text-primary" />
                              <p className="text-muted-foreground">1-888-WEST-ORG</p>
                            </div>
                            <div className="flex items-center gap-2">
                              <Mail className="h-4 w-4 text-primary" />
                              <p className="text-muted-foreground">westcoast@organate.org</p>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4 text-primary" />
                              <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 5:00 PM PST</p>
                            </div>
                          </div>
                        </div>
                        <div className="rounded-lg border p-4">
                          <h3 className="text-lg font-medium">Midwest Regional Center</h3>
                          <div className="mt-2 space-y-2">
                            <div className="flex items-start gap-2">
                              <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                              <p className="text-muted-foreground">
                                789 Heartland Drive
                                <br />
                                Chicago, IL 60601
                                <br />
                                United States
                              </p>
                            </div>
                            <div className="flex items-center gap-2">
                              <Phone className="h-4 w-4 text-primary" />
                              <p className="text-muted-foreground">1-877-MID-ORGAN</p>
                            </div>
                            <div className="flex items-center gap-2">
                              <Mail className="h-4 w-4 text-primary" />
                              <p className="text-muted-foreground">midwest@organate.org</p>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4 text-primary" />
                              <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 5:00 PM CST</p>
                            </div>
                          </div>
                        </div>
                        <div className="rounded-lg border p-4">
                          <h3 className="text-lg font-medium">International Office</h3>
                          <div className="mt-2 space-y-2">
                            <div className="flex items-start gap-2">
                              <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                              <p className="text-muted-foreground">
                                10 Global Health Plaza
                                <br />
                                London, EC1A 1BB
                                <br />
                                United Kingdom
                              </p>
                            </div>
                            <div className="flex items-center gap-2">
                              <Phone className="h-4 w-4 text-primary" />
                              <p className="text-muted-foreground">+44 20 7123 4567</p>
                            </div>
                            <div className="flex items-center gap-2">
                              <Mail className="h-4 w-4 text-primary" />
                              <p className="text-muted-foreground">international@organate.org</p>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4 text-primary" />
                              <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 5:00 PM GMT</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex flex-col items-start gap-4">
                      <div className="flex items-center gap-2">
                        <Globe className="h-5 w-5 text-primary" />
                        <h3 className="font-medium">Partner Hospitals and Clinics</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        ORGANATE works with a network of partner hospitals and clinics across the country. Contact us to
                        find the nearest location to you.
                      </p>
                      <Button variant="outline" className="mt-2">
                        Find a Partner Location
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </section>

        {/* Additional Contact Information */}
        <section className="w-full py-12 md:py-16 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-6">
              <div className="text-center">
                <h2 className="text-2xl font-bold">Additional Ways to Connect</h2>
                <p className="mt-2 text-muted-foreground">Stay connected with ORGANATE through our various channels</p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    Community Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-lg border p-4">
                      <h3 className="font-medium">Support Groups</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Join our virtual and in-person support groups for donors and recipients
                      </p>
                      <Button variant="link" className="mt-2 h-auto p-0 text-primary">
                        Find a Support Group
                      </Button>
                    </div>
                    <div className="rounded-lg border p-4">
                      <h3 className="font-medium">Community Forums</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Connect with others in our online community forums
                      </p>
                      <Button variant="link" className="mt-2 h-auto p-0 text-primary">
                        Join the Discussion
                      </Button>
                    </div>
                    <div className="rounded-lg border p-4">
                      <h3 className="font-medium">Social Media</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Follow us on social media for updates and stories
                      </p>
                      <div className="mt-2 flex gap-2">
                        <Button variant="outline" size="sm">
                          Facebook
                        </Button>
                        <Button variant="outline" size="sm">
                          Twitter
                        </Button>
                        <Button variant="outline" size="sm">
                          Instagram
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
