"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { Dictionary } from "@/lib/types"

interface DonateFormProps {
  dict: Dictionary
}

export function DonateForm({ dict }: DonateFormProps) {
  const { donate } = dict
  const [amount, setAmount] = useState<number | string>("")
  const [selectedTier, setSelectedTier] = useState<number | null>(null)

  const handleTierSelect = (value: number) => {
    setSelectedTier(value)
    setAmount(value)
  }

  return (
    <Card className="shadow-lg">
      <CardHeader className="border-b bg-muted/30 px-6 py-8">
        <CardTitle className="text-2xl">{donate.tiers.title}</CardTitle>
        <CardDescription>{donate.tiers.description}</CardDescription>
      </CardHeader>
      <CardContent className="p-6 md:p-8">
        <Tabs defaultValue="one-time" className="mb-8">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="one-time">{donate.tiers.oneTime}</TabsTrigger>
            <TabsTrigger value="monthly">{donate.tiers.monthly}</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="mb-8 grid gap-4 md:grid-cols-3">
          {donate.tiers.items.map((tier) => (
            <button
              key={tier.amount}
              onClick={() => handleTierSelect(tier.amount)}
              className={`relative flex flex-col items-center justify-center rounded-xl border-2 p-6 transition-all hover:bg-primary/5 ${
                selectedTier === tier.amount ? "border-primary bg-primary/5" : "border-border"
              }`}
            >
              <span className="mb-1 text-2xl font-bold">{donate.tiers.currency}{tier.amount}</span>
              <span className="text-sm font-medium text-muted-foreground">{tier.label}</span>
            </button>
          ))}
        </div>

        <div className="mb-8">
          <Label htmlFor="custom-amount" className="mb-2 block font-semibold">
            {donate.tiers.custom}
          </Label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg font-bold text-muted-foreground">
              {donate.tiers.currency}
            </span>
            <Input
              id="custom-amount"
              type="number"
              placeholder={donate.tiers.customPlaceholder}
              className="pl-10 text-lg h-12"
              value={amount}
              onChange={(e) => {
                setAmount(e.target.value)
                setSelectedTier(null)
              }}
            />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name" className="font-semibold">{donate.form.nameLabel}</Label>
            <Input id="name" placeholder="John Doe" className="h-11" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="font-semibold">{donate.form.emailLabel}</Label>
            <Input id="email" type="email" placeholder="john@example.com" className="h-11" />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-center gap-4 border-t bg-muted/30 p-6 md:p-8">
        <Button size="lg" className="w-full h-14 text-lg font-bold">
          {donate.form.submitButton}
        </Button>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <span>{donate.form.secureNote}</span>
        </div>
      </CardFooter>
    </Card>
  )
}
