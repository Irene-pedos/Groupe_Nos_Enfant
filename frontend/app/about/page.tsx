import { getDictionary } from "@/lib/dictionary"
import { HeroSection } from "@/components/hero-section"
import { ValuesSection } from "@/components/values-section"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { History, Target, Eye, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default async function AboutPage() {
  const dict = await getDictionary("en")

  return (
    <main className="flex min-h-screen flex-col bg-background">
      <HeroSection 
        title={dict.about.title} 
        subtitle={dict.about.subtitle}
        className="bg-primary/95"
      />

      <section className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <Tabs defaultValue="history" className="w-full">
            <TabsList className="grid w-full grid-cols-3 h-14 p-1 bg-muted/50 rounded-xl mb-12">
              <TabsTrigger value="history" className="rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-sm">
                <History className="w-4 h-4 mr-2 hidden sm:inline" />
                {dict.about.history.title}
              </TabsTrigger>
              <TabsTrigger value="mission" className="rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-sm">
                <Target className="w-4 h-4 mr-2 hidden sm:inline" />
                {dict.about.mission.title}
              </TabsTrigger>
              <TabsTrigger value="vision" className="rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-sm">
                <Eye className="w-4 h-4 mr-2 hidden sm:inline" />
                {dict.about.vision.title}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="history" className="animate-in fade-in-50 duration-500">
              <Card className="border-none shadow-xl bg-card overflow-hidden">
                <div className="grid md:grid-cols-2">
                  <div className="p-8 md:p-12 space-y-6">
                    <h3 className="text-3xl font-bold text-primary font-heading">
                      Our Journey Since 1999
                    </h3>
                    <p className="text-lg leading-relaxed text-muted-foreground italic">
                      &quot;{dict.about.history.content.substring(0, 150)}...&quot;
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {dict.about.history.content}
                    </p>
                  </div>
                  <div className="relative bg-muted min-h-[300px] flex items-center justify-center border-l border-border/50">
                     <div className="text-muted-foreground text-sm uppercase tracking-widest font-semibold opacity-30">
                       Historical Archives
                     </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="mission" className="animate-in fade-in-50 duration-500">
              <Card className="border-none shadow-xl bg-primary text-primary-foreground">
                <CardContent className="p-12 text-center space-y-8">
                  <div className="mx-auto w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-6">
                    <Target className="w-10 h-10 text-secondary" />
                  </div>
                  <h3 className="text-4xl font-bold font-heading">{dict.about.mission.title}</h3>
                  <p className="text-2xl font-medium max-w-3xl mx-auto leading-snug opacity-90">
                    {dict.about.mission.content}
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="vision" className="animate-in fade-in-50 duration-500">
              <Card className="border-none shadow-xl bg-secondary text-white">
                <CardContent className="p-12 text-center space-y-8">
                   <div className="mx-auto w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-6">
                    <Eye className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-4xl font-bold font-heading text-white">{dict.about.vision.title}</h3>
                  <p className="text-2xl font-medium max-w-3xl mx-auto leading-snug">
                    {dict.about.vision.content}
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <ValuesSection 
        title={dict.about.values.title} 
        items={dict.about.values.items} 
      />
      
      <section className="bg-muted/30 py-24">
        <div className="container mx-auto px-4 max-w-4xl text-center space-y-10">
          <h2 className="text-4xl font-bold text-primary font-heading">
            Be the change you want to see
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button size="lg" className="h-14 px-10 rounded-full bg-secondary hover:bg-secondary/90 text-white text-lg font-bold group" asChild>
              <Link href="/donate">
                Donate Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-10 rounded-full border-primary text-primary hover:bg-primary/5 text-lg font-bold" asChild>
              <Link href="/volunteer">
                Become a Volunteer
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
