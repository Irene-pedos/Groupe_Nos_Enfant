"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface EventRegistrationProps {
  eventName: string
  buttonText: string
}

export function EventRegistration({ eventName, buttonText }: EventRegistrationProps) {
  const [open, setOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setOpen(false)
      setSubmitted(false)
    }, 2000)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm" className="w-full md:w-auto">
          {buttonText}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        {submitted ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-primary">Registration Successful!</h3>
            <p className="mt-2 text-muted-foreground">
              Thank you for registering for <strong>{eventName}</strong>. We will send you more details via email.
            </p>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Register for Event</DialogTitle>
              <DialogDescription>
                Fill out this form to reserve your spot for <strong>{eventName}</strong>.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="reg-name">Full Name</Label>
                  <Input id="reg-name" placeholder="John Doe" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="reg-email">Email Address</Label>
                  <Input id="reg-email" type="email" placeholder="john@example.com" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="reg-phone">Phone Number (Optional)</Label>
                  <Input id="reg-phone" type="tel" placeholder="+250..." />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" className="w-full">Confirm Registration</Button>
              </DialogFooter>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
