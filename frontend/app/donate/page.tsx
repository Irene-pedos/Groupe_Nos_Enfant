import { getDictionary } from "@/lib/dictionary"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DonateForm } from "@/components/donate-form"

export default async function DonatePage() {
  const dict = await getDictionary("en")
  const { donate } = dict

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary/5 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 px-4 py-1 text-sm font-semibold uppercase tracking-wider">Support GNE</Badge>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-primary md:text-5xl lg:text-6xl">
            {donate.title}
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
            {donate.subtitle}
          </p>
        </div>
      </section>

      <div className="container mx-auto -mt-12 px-4 pb-24">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Donation Selection & Form */}
          <div className="lg:col-span-2">
            <DonateForm dict={dict} />
          </div>

          {/* Impact & Trust Sidebar */}
          <div className="space-y-8">
            <Card className="bg-primary text-primary-foreground">
              <CardHeader>
                <CardTitle>{donate.trustTitle}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="opacity-90 leading-relaxed">
                  {donate.trustDescription}
                </p>
                <div className="mt-8 space-y-6">
                  {donate.impact.stats.map((stat, idx) => (
                    <div key={idx} className="flex flex-col border-l-2 border-primary-foreground/30 pl-4">
                      <span className="text-3xl font-bold">{stat.value}</span>
                      <span className="text-sm opacity-80 uppercase tracking-wide">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">{donate.impact.sidebarTitle}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {donate.tiers.items.map((tier, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary/20 text-secondary">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{donate.tiers.currency}{tier.amount} - {tier.label}</p>
                      <p className="text-sm text-muted-foreground">{tier.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
