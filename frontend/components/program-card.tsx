import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"
import Link from "next/link"

interface ProgramCardProps {
  title: string
  description: string
  features: string[]
  learnMoreText: string
  applyNowText: string
  href: string
}

export function ProgramCard({ 
  title, 
  description, 
  features, 
  learnMoreText, 
  applyNowText, 
  href 
}: ProgramCardProps) {
  return (
    <Card className="flex flex-col h-full border-t-4 border-t-primary transition-all hover:shadow-lg">
      <CardHeader>
        <CardTitle className="font-heading text-xl text-primary">{title}</CardTitle>
        <CardDescription className="text-muted-foreground mt-2 leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="flex flex-wrap gap-3 pt-4 border-t">
        <Button variant="outline" className="flex-1" asChild>
          <Link href={href}>{learnMoreText}</Link>
        </Button>
        <Button className="flex-1 bg-secondary hover:bg-secondary/90 text-white" asChild>
          <Link href="/apply">{applyNowText}</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
