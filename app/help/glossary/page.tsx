import { Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ScrollReveal } from "@/components/animations/scroll-reveal"

export default function GlossaryPage() {
  // Glossary terms organized alphabetically
  const glossaryTerms = {
    A: [
      {
        term: "Allograft",
        definition: "An organ or tissue transplanted from one individual to another of the same species.",
      },
      {
        term: "Antibody",
        definition:
          "A protein made by the immune system in response to a foreign substance. In transplantation, antibodies can attack transplanted organs.",
      },
      {
        term: "Antigen",
        definition:
          "A substance that triggers an immune response. In transplantation, antigens on donor organs can trigger rejection.",
      },
    ],
    B: [
      {
        term: "Brain Death",
        definition:
          "The irreversible cessation of all brain function, including the brain stem. Legally defined as death in most jurisdictions.",
      },
      {
        term: "Biopsy",
        definition:
          "A medical procedure that involves taking a small sample of tissue from the body to examine it more closely.",
      },
    ],
    C: [
      {
        term: "Cadaveric Donor",
        definition: "An organ donor who has been declared brain dead.",
      },
      {
        term: "Compatibility",
        definition:
          "The degree to which a donor's organs or tissues match those of the recipient, reducing the risk of rejection.",
      },
      {
        term: "Cross-matching",
        definition:
          "A test performed before transplantation to determine if a recipient has pre-existing antibodies against the donor's tissue.",
      },
    ],
    D: [
      {
        term: "Donation after Cardiac Death (DCD)",
        definition:
          "Organ donation that occurs after the heart has stopped beating, as opposed to brain death donation.",
      },
      {
        term: "Donor Registry",
        definition: "A database of individuals who have registered their intent to be organ donors.",
      },
    ],
    E: [
      {
        term: "End-Stage Organ Disease",
        definition:
          "The final phase of organ failure when the organ can no longer function adequately to sustain life without intervention.",
      },
    ],
    G: [
      {
        term: "Graft",
        definition: "A transplanted organ or tissue.",
      },
      {
        term: "Graft-versus-Host Disease (GVHD)",
        definition:
          "A complication that can occur after a transplant when the donor's immune cells attack the recipient's tissues.",
      },
    ],
    H: [
      {
        term: "HLA (Human Leukocyte Antigen)",
        definition:
          "Proteins found on most cells in the body that are used to match donors and recipients for organ transplantation.",
      },
      {
        term: "Histocompatibility",
        definition:
          "The degree to which the tissues of one individual are immunologically compatible with those of another.",
      },
    ],
    I: [
      {
        term: "Immunosuppression",
        definition:
          "The use of medications to suppress the immune system to prevent rejection of a transplanted organ or tissue.",
      },
      {
        term: "Informed Consent",
        definition:
          "The process by which a patient learns about and understands the purpose, benefits, and potential risks of a medical procedure and then agrees to it.",
      },
    ],
    L: [
      {
        term: "Living Donor",
        definition:
          "A person who donates an organ or part of an organ while they are still alive, such as a kidney or part of a liver.",
      },
    ],
    M: [
      {
        term: "Match",
        definition:
          "The process of finding a compatible donor for a recipient based on blood type, tissue type, and other factors.",
      },
    ],
    O: [
      {
        term: "Organ Procurement Organization (OPO)",
        definition:
          "An organization that coordinates the recovery and distribution of organs from deceased donors for transplantation.",
      },
    ],
    P: [
      {
        term: "Procurement",
        definition: "The surgical process of recovering organs and tissues from a donor for transplantation.",
      },
    ],
    R: [
      {
        term: "Recipient",
        definition: "A person who receives an organ or tissue transplant.",
      },
      {
        term: "Rejection",
        definition:
          "The process by which a recipient's immune system recognizes a transplanted organ as foreign and attempts to destroy it.",
      },
    ],
    T: [
      {
        term: "Tissue Typing",
        definition:
          "A laboratory test that identifies the proteins (antigens) on cells and tissues to determine compatibility between donor and recipient.",
      },
      {
        term: "Transplant Center",
        definition:
          "A hospital that specializes in organ transplantation, with the necessary facilities, personnel, and expertise.",
      },
    ],
    V: [
      {
        term: "Vascularized Composite Allograft (VCA)",
        definition:
          "A transplant involving multiple tissues such as muscle, bone, nerve, and skin, as in face or hand transplants.",
      },
    ],
    W: [
      {
        term: "Waiting List",
        definition:
          "A computerized list of candidates who are waiting to receive organ transplants, managed by the United Network for Organ Sharing (UNOS) in the United States.",
      },
    ],
    X: [
      {
        term: "Xenotransplantation",
        definition:
          "The transplantation of living cells, tissues, or organs from one species to another, such as from pigs to humans.",
      },
    ],
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-16 bg-primary/5">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Medical Glossary</h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                  Understanding the terminology related to organ donation and transplantation
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="Search terms..." className="pl-8" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Glossary Content */}
        <section className="w-full py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-wrap gap-2 mb-8">
              {Object.keys(glossaryTerms).map((letter) => (
                <Button key={letter} variant="outline" size="sm" asChild>
                  <a href={`#section-${letter}`}>{letter}</a>
                </Button>
              ))}
            </div>

            <div className="space-y-12">
              {Object.entries(glossaryTerms).map(([letter, terms], index) => (
                <ScrollReveal key={letter} delay={index * 0.05}>
                  <div id={`section-${letter}`} className="scroll-mt-20">
                    <h2 className="text-3xl font-bold tracking-tighter border-b pb-2 mb-6">{letter}</h2>
                    <div className="grid gap-6 md:grid-cols-2">
                      {terms.map((item) => (
                        <div key={item.term} className="rounded-lg border p-4">
                          <h3 className="text-lg font-bold">{item.term}</h3>
                          <p className="text-muted-foreground">{item.definition}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="w-full py-8 md:py-12 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tighter">Need More Information?</h2>
                <p className="text-muted-foreground">
                  If you need more detailed medical information, please consult our resource library or contact our
                  support team.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild>
                  <a href="/help/resources">Resource Library</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="/help">Back to Help Center</a>
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
