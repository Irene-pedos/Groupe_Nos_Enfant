import { getDictionary } from "@/lib/dictionary"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default async function NewsPage() {
  const dict = await getDictionary("en")
  const { news, events } = dict

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-primary">{news.title}</h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          {news.subtitle}
        </p>
      </div>

      <section className="mb-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {news.items.map((item) => (
            <div key={item.id} className="group flex flex-col overflow-hidden rounded-xl border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md">
              <div className="aspect-video w-full bg-muted flex items-center justify-center text-muted-foreground">
                {/* Placeholder for images */}
                <span>{news.imagePlaceholder}</span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-2 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-primary">
                  <span>{(news.categories as any)[item.category] || item.category}</span>
                  <span className="text-muted-foreground">•</span>
                  <span className="text-muted-foreground">{item.date}</span>
                </div>
                <h2 className="mb-3 text-xl font-semibold leading-tight group-hover:text-primary transition-colors">
                  {item.title}
                </h2>
                <p className="mb-6 line-clamp-3 text-muted-foreground">
                  {item.summary}
                </p>
                <div className="mt-auto">
                  <Button variant="outline" className="w-full" asChild>
                    <Link href={`/news/${item.id}`}>{news.readMore}</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-primary">{events.title}</h2>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          {events.subtitle}
        </p>
      </div>

      <section>
        <div className="grid gap-6 md:grid-cols-2">
          {events.items.map((event) => (
            <div key={event.id} className="flex flex-col rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md md:flex-row md:gap-6">
              <div className="mb-4 flex h-20 w-20 shrink-0 flex-col items-center justify-center rounded-lg bg-primary/10 text-primary md:mb-0">
                <span className="text-xs font-bold uppercase">{new Date(event.date).toLocaleString('en-US', { month: 'short' })}</span>
                <span className="text-2xl font-black">{new Date(event.date).getDate()}</span>
              </div>
              <div className="flex flex-1 flex-col">
                <div className="mb-1 text-sm font-medium text-primary/80">{event.category}</div>
                <h3 className="mb-2 text-xl font-semibold">{event.name}</h3>
                <div className="mb-3 space-y-1 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{event.location}</span>
                  </div>
                </div>
                <p className="mb-4 text-sm text-muted-foreground line-clamp-2">
                  {event.description}
                </p>
                <div className="mt-auto">
                  <Button size="sm" className="w-full md:w-auto">
                    {events.register}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
