"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import en from "@/translations/en.json"

export default function ContactPage() {
  const { contact } = en

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary/5 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 px-4 py-1 text-sm font-semibold uppercase tracking-wider">Contact Us</Badge>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-primary md:text-5xl">
            {contact.title}
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            {contact.subtitle}
          </p>
        </div>
      </section>

      <div className="container mx-auto -mt-8 px-4 pb-24">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardHeader className="border-b bg-muted/30 px-6 py-8">
                <CardTitle className="text-2xl">{contact.form.title}</CardTitle>
                <CardDescription>We usually respond within 24-48 hours.</CardDescription>
              </CardHeader>
              <CardContent className="p-6 md:p-8">
                <form className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="font-semibold">{contact.form.name}</Label>
                      <Input id="name" placeholder="John Doe" className="h-11" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-semibold">{contact.form.email}</Label>
                      <Input id="email" type="email" placeholder="john@example.com" className="h-11" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="font-semibold">{contact.form.subject}</Label>
                    <Input id="subject" placeholder="How can we help?" className="h-11" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="font-semibold">{contact.form.message}</Label>
                    <Textarea id="message" placeholder="Tell us more about your inquiry..." className="min-h-[150px] resize-none" />
                  </div>
                  <Button type="submit" size="lg" className="w-full md:w-auto h-12 px-8 text-lg font-bold">
                    {contact.form.submit}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-6">
            <Card className="border-primary/20 shadow-sm">
              <CardHeader className="pb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-2">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <CardTitle className="text-xl">{contact.info.address.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{contact.info.address.value}</p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 shadow-sm">
              <CardHeader className="pb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-2">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <CardTitle className="text-xl">{contact.info.email.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{contact.info.email.value}</p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 shadow-sm">
              <CardHeader className="pb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-2">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <CardTitle className="text-xl">{contact.info.phone.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{contact.info.phone.value}</p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 shadow-sm">
              <CardHeader className="pb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-2">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <CardTitle className="text-xl">{contact.info.hours.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{contact.info.hours.value}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
