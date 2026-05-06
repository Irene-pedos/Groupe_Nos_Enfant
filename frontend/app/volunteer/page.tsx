"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import en from "@/translations/en.json"

// Note: Lucide icons can be added here if the library is available.
// For now, I'll use placeholders to ensure compatibility.

export default function VolunteerPage() {
  const { volunteer } = en

  return (
    <main className="min-h-screen bg-background pb-24">
      {/* Hero Section */}
      <section className="bg-primary/5 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-4 px-4 py-1 text-sm font-semibold uppercase tracking-wider">
            Make an Impact
          </Badge>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-primary md:text-5xl lg:text-6xl">
            {volunteer.title}
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
            {volunteer.subtitle}
          </p>
        </div>
      </section>

      {/* Volunteer Roles - Card Layout */}
      <section className="container mx-auto -mt-10 px-4">
        <div className="mb-12">
          <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-primary">
            {volunteer.roles.title}
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {volunteer.roles.items.map((role) => (
              <Card key={role.id} className="flex flex-col border-2 shadow-sm transition-all hover:border-primary/50 hover:shadow-md">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <CardTitle className="text-xl">{role.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground leading-relaxed">
                    {role.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-primary">
            {volunteer.benefits.title}
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {volunteer.benefits.items.map((benefit, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="container mx-auto mt-20 px-4 max-w-3xl">
        <Card className="shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">{volunteer.form.title}</CardTitle>
            <CardDescription>{volunteer.form.subtitle}</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">{volunteer.form.name}</Label>
                  <Input id="name" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">{volunteer.form.email}</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="interest">{volunteer.form.interest}</Label>
                <Input id="interest" placeholder="e.g. Mentorship" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">{volunteer.form.message}</Label>
                <Textarea id="message" placeholder="I want to contribute by..." className="min-h-[120px]" />
              </div>
              <Button type="submit" className="w-full h-12 text-lg font-bold">
                {volunteer.form.submit}
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>
    </main>
  )
}
