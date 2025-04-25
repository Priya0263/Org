import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ScrollReveal } from "@/components/animations/scroll-reveal"

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-16 lg:py-20 bg-primary/5">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Terms of Service</h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                  Please read these terms carefully before using the ORGANATE platform.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-8">
              <ScrollReveal>
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">1. Acceptance of Terms</h2>
                  <p className="text-muted-foreground">
                    By accessing or using the ORGANATE platform, you agree to be bound by these Terms of Service. If you
                    do not agree to all the terms and conditions, you must not access or use the platform.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">2. Description of Service</h2>
                  <p className="text-muted-foreground">
                    ORGANATE provides a platform connecting organ donors with recipients, medical professionals, and
                    administrators to facilitate the organ donation process. The platform allows users to register,
                    communicate, and coordinate organ donation activities in accordance with applicable laws and
                    regulations.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">3. User Registration and Accounts</h2>
                  <p className="text-muted-foreground">
                    To use certain features of the platform, you must register for an account. When you register, you
                    agree to provide accurate, current, and complete information. You are responsible for maintaining
                    the confidentiality of your account credentials and for all activities that occur under your
                    account.
                  </p>
                  <p className="text-muted-foreground">
                    Different user types (donors, recipients, medical professionals, and administrators) have different
                    registration requirements and access privileges. You must only register for the appropriate user
                    type based on your actual role and qualifications.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">4. Medical Information and Privacy</h2>
                  <p className="text-muted-foreground">
                    The platform collects and processes sensitive medical information. By using the platform, you
                    consent to the collection, processing, and sharing of your medical information as necessary for the
                    organ donation process. All information is handled in accordance with our Privacy Policy and
                    applicable healthcare privacy laws.
                  </p>
                  <p className="text-muted-foreground">
                    Medical professionals and administrators must maintain the confidentiality of all user information
                    and comply with all applicable healthcare privacy laws and regulations.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">5. User Conduct</h2>
                  <p className="text-muted-foreground">
                    You agree not to use the platform for any illegal or unauthorized purpose. You must not attempt to
                    interfere with the proper functioning of the platform or bypass any security measures. You must not
                    provide false or misleading information, impersonate others, or engage in any fraudulent activity.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">6. Organ Donation Process</h2>
                  <p className="text-muted-foreground">
                    The platform facilitates the organ donation process but does not guarantee the availability,
                    suitability, or successful transplantation of organs. All organ donations and transplantations must
                    comply with applicable laws, regulations, and medical standards.
                  </p>
                  <p className="text-muted-foreground">
                    Users acknowledge that organ donation involves inherent risks and uncertainties. The platform does
                    not provide medical advice, and all medical decisions should be made in consultation with qualified
                    healthcare professionals.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">7. Limitation of Liability</h2>
                  <p className="text-muted-foreground">
                    To the maximum extent permitted by law, ORGANATE and its affiliates, officers, employees, agents,
                    partners, and licensors shall not be liable for any direct, indirect, incidental, special,
                    consequential, or punitive damages, including without limitation, loss of profits, data, use,
                    goodwill, or other intangible losses, resulting from your access to or use of or inability to access
                    or use the platform.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">8. Modifications to Terms</h2>
                  <p className="text-muted-foreground">
                    ORGANATE reserves the right to modify these Terms of Service at any time. We will provide notice of
                    significant changes by posting the updated terms on the platform. Your continued use of the platform
                    after such modifications constitutes your acceptance of the updated terms.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">9. Termination</h2>
                  <p className="text-muted-foreground">
                    ORGANATE reserves the right to suspend or terminate your account and access to the platform at any
                    time for violations of these terms or for any other reason at our sole discretion. You may terminate
                    your account at any time by following the instructions on the platform.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">10. Governing Law</h2>
                  <p className="text-muted-foreground">
                    These Terms of Service shall be governed by and construed in accordance with the laws of the
                    jurisdiction in which ORGANATE operates, without regard to its conflict of law provisions.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">11. Contact Information</h2>
                  <p className="text-muted-foreground">
                    If you have any questions about these Terms of Service, please contact us at:
                  </p>
                  <p className="text-muted-foreground">
                    Email: legal@organate.org
                    <br />
                    Phone: 1-800-ORGANATE (1-800-674-2628)
                    <br />
                    Address: 123 Donation Street, Medical City, MC 12345
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="space-y-4">
                  <p className="text-muted-foreground italic">Last updated: April 23, 2025</p>
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
