import { getDictionary } from "@/lib/dictionary"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { EventRegistration } from "@/components/event-registration"

export default async function NewsPage() {
  const dict = await getDictionary("en")
  const { news, events } = dict

  return (
    <main className="container mx-auto px-4 py-12 md:py-20">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-primary md:text-5xl">{news.title}</h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
          {news.subtitle}
        </p>
      </div>

      <section className="mb-24">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {news.items.map((item) => (
            <div key={item.id} className="group flex flex-col overflow-hidden rounded-2xl border bg-card text-card-foreground shadow-sm transition-all hover:shadow-lg">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted transition-colors group-hover:bg-muted/80">
                <Image 
                  src={item.image} 
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary">
                  <span className="rounded-full bg-primary/10 px-2 py-0.5">
                    {(news.categories as Record<string, string>)[item.category] || item.category}
                  </span>
                  <span className="text-muted-foreground">•</span>
                  <span className="text-muted-foreground">{item.date}</span>
                </div>
                <h2 className="mb-3 text-xl font-bold leading-tight transition-colors group-hover:text-primary">
                  {item.title}
                </h2>
                <p className="mb-6 line-clamp-3 text-muted-foreground leading-relaxed">
                  {item.summary}
                </p>
                <div className="mt-auto">
                  <Button variant="outline" className="w-full group/btn" asChild>
                    <Link href={`/news/${item.id}`} className="flex items-center justify-center gap-2">
                      {news.readMore}
                      <svg className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-primary md:text-4xl">{events.title}</h2>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
          {events.subtitle}
        </p>
      </div>

      <section>
        <div className="grid gap-6 md:grid-cols-2">
          {events.items.map((event) => (
            <div key={event.id} className="flex flex-col rounded-2xl border bg-card p-6 shadow-sm transition-all hover:shadow-lg md:flex-row md:gap-8">
              <div className="mb-6 flex h-24 w-24 shrink-0 flex-col items-center justify-center rounded-2xl bg-primary text-primary-foreground md:mb-0 shadow-inner">
                <span className="text-sm font-bold uppercase tracking-wider">{new Date(event.date).toLocaleString('default', { month: 'short' })}</span>
                <span className="text-3xl font-black">{new Date(event.date).getDate()}</span>
              </div>
              <div className="flex flex-1 flex-col">
                <div className="mb-1 text-sm font-bold uppercase tracking-widest text-primary/70">{event.category}</div>
                <h3 className="mb-3 text-2xl font-bold text-primary">{event.name}</h3>
                <div className="mb-4 space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/5 text-primary">
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="font-medium">{event.time}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/5 text-primary">
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <span className="font-medium">{event.location}</span>
                  </div>
                </div>
                <p className="mb-6 text-muted-foreground line-clamp-2 leading-relaxed">
                  {event.description}
                </p>
                <div className="mt-auto">
                  <EventRegistration eventName={event.name} buttonText={events.register} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
