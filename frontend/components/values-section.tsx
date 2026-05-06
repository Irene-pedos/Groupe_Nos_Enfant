import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, BookOpen, Users, Lightbulb, Home } from "lucide-react"

const icons = [Shield, BookOpen, Users, Lightbulb, Home]

interface ValuesSectionProps {
  title: string
  items: string[]
}

export function ValuesSection({ title, items }: ValuesSectionProps) {
  return (
    <section className="bg-muted/30 py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-primary font-heading">{title}</h2>
          <div className="w-24 h-1.5 bg-secondary mx-auto rounded-full" />
        </div>
        <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-5">
          {items.map((item, index) => {
            const Icon = icons[index % icons.length]
            return (
              <Card key={index} className="group border-none bg-background shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 rounded-2xl overflow-hidden">
                <CardHeader className="flex flex-col items-center space-y-4 p-8">
                  <div className="rounded-2xl bg-primary/5 p-4 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-center text-base font-bold leading-tight">{item}</CardTitle>
                </CardHeader>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
