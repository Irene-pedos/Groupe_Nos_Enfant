import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import en from "@/translations/en.json"

export default async function NewsDetailPage({ params }: { params: { id: string } }) {
  const { id } = await params
  const { news } = en
  const article = news.items.find((item) => item.id === id)

  if (!article) {
    notFound()
  }

  return (
    <main className="container mx-auto max-w-4xl px-4 py-12 md:py-20">
      <div className="mb-8">
        <Button variant="ghost" asChild className="-ml-4 mb-8 text-muted-foreground hover:text-primary">
          <Link href="/news" className="flex items-center gap-2">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to News
          </Link>
        </Button>
        <div className="mb-4 flex items-center gap-3 text-sm font-medium uppercase tracking-wider text-primary">
          <span className="rounded-full bg-primary/10 px-3 py-1">{article.category}</span>
          <span className="text-muted-foreground">{article.date}</span>
        </div>
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-primary md:text-5xl lg:text-6xl">
          {article.title}
        </h1>
      </div>

      <div className="mb-12 aspect-[21/9] w-full overflow-hidden rounded-2xl bg-muted flex items-center justify-center text-muted-foreground">
        {/* Placeholder for images */}
        <span className="text-xl">Article Image Placeholder</span>
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        {article.content.split('\n\n').map((paragraph, index) => (
          <p key={index} className="mb-6 text-lg leading-relaxed text-muted-foreground first-letter:text-3xl first-letter:font-bold first-letter:text-primary first-letter:mr-1">
            {paragraph}
          </p>
        ))}
      </div>

      <hr className="my-12" />

      <div className="flex flex-col items-center rounded-2xl bg-primary/5 p-8 text-center md:p-12">
        <h2 className="mb-4 text-2xl font-bold">Support our mission</h2>
        <p className="mb-8 max-w-md text-muted-foreground">
          Your contribution helps us continue empowering vulnerable youth and children through education and innovation.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="/donate">Donate Now</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/volunteer">Volunteer with us</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
