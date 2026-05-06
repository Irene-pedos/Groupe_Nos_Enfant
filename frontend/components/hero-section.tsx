import { cn } from "@/lib/utils"

interface HeroSectionProps {
  title: string
  subtitle: string
  className?: string
}

export function HeroSection({ title, subtitle, className }: HeroSectionProps) {
  return (
    <section className={cn("relative overflow-hidden bg-primary py-24 text-primary-foreground md:py-40", className)}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.05)_0%,transparent_50%)]" />
      <div className="container relative z-10 mx-auto px-4 text-center">
        <h1 className="mb-8 font-heading text-5xl font-extrabold tracking-tight md:text-7xl lg:text-8xl">
          {title}
        </h1>
        <p className="mx-auto max-w-3xl text-xl md:text-2xl font-medium opacity-90 leading-relaxed">
          {subtitle}
        </p>
      </div>
    </section>
  )
}
