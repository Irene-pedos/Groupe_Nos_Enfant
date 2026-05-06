import { getDictionary } from "@/lib/dictionary"
import { HeroSection } from "@/components/hero-section"
import { ProgramCard } from "@/components/program-card"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HeartHandshake } from "lucide-react"
import Link from "next/link"

export default async function ProgramsPage() {
  const dict = await getDictionary("en")

  return (
    <main className="flex min-h-screen flex-col bg-background">
      <HeroSection 
        title={dict.programs.title} 
        subtitle={dict.programs.subtitle}
        className="bg-primary/95"
      />

      <section className="container mx-auto px-4 py-24">
        <div className="grid gap-10 md:grid-cols-2">
          {dict.programs.list.map((program) => (
            <ProgramCard
              key={program.id}
              title={program.title}
              description={program.description}
              features={program.features}
              learnMoreText={dict.common.learnMore}
              applyNowText={dict.common.applyNow}
              href={`/programs/${program.id}`}
            />
          ))}
        </div>
      </section>

      <section className="bg-muted/50 py-24 border-y border-border/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl font-bold text-primary font-heading">Common Questions</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Everything you need to know about our selection process and program participation.
            </p>
          </div>
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border rounded-xl bg-background px-6">
              <AccordionTrigger className="hover:no-underline font-semibold text-primary">
                Who is eligible for the Scholarship Programme?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Our scholarship program is designed for academically gifted students from vulnerable backgrounds in Rwanda who have successfully completed their primary education but lack the financial means to attend secondary school.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border rounded-xl bg-background px-6">
              <AccordionTrigger className="hover:no-underline font-semibold text-primary">
                How long is the Vocational Training cycle?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                The FormPro vocational training cycle typically lasts for 6 months of intensive skills development, followed by a mentorship and job placement phase.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border rounded-xl bg-background px-6">
              <AccordionTrigger className="hover:no-underline font-semibold text-primary">
                What support do young mothers receive?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Young mothers receive a comprehensive package including psychosocial support, vocational training, basic business skills, and childcare assistance to ensure they can fully participate in their own empowerment.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
      
      <section className="container mx-auto px-4 py-24">
        <div className="bg-primary rounded-[2.5rem] p-10 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 p-10 opacity-10 pointer-events-none">
            <HeartHandshake className="w-64 h-64 text-white rotate-12" />
          </div>
          
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white font-heading tracking-tight">
              Empower a Future Today
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-primary-foreground/90 leading-relaxed font-medium">
              Join hundreds of sponsors and partners who are already making a difference in the lives of Rwandan youth. Your contribution goes directly to program costs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 pt-4">
              <Button size="lg" className="h-16 px-12 rounded-full bg-secondary hover:bg-secondary/90 text-white text-xl font-bold shadow-lg shadow-secondary/20" asChild>
                <Link href="/donate">Donate Now</Link>
              </Button>
              <Button size="lg" variant="outline" className="h-16 px-12 rounded-full border-white text-white hover:bg-white/10 text-xl font-bold" asChild>
                <Link href="/partner">Partner With Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
