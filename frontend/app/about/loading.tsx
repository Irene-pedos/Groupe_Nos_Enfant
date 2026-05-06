import { Skeleton } from "@/components/ui/skeleton"

export default function AboutLoading() {
  return (
    <div className="flex flex-col space-y-12">
      {/* Hero Skeleton */}
      <Skeleton className="h-[300px] w-full" />
      
      <div className="container mx-auto px-4 space-y-12">
        {/* History/Tabs Skeleton */}
        <div className="space-y-4">
          <Skeleton className="h-10 w-48 mx-auto" />
          <Skeleton className="h-[400px] w-full max-w-4xl mx-auto rounded-xl" />
        </div>

        {/* Values Skeleton */}
        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-5">
          {[...Array(5)].map((_, i) => (
            <Skeleton key={i} className="h-32 w-full rounded-xl" />
          ))}
        </div>
      </div>
    </div>
  )
}
