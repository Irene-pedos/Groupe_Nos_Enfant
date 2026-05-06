import { Skeleton } from "@/components/ui/skeleton"

export default function ProgramsLoading() {
  return (
    <div className="flex flex-col space-y-12">
      {/* Hero Skeleton */}
      <Skeleton className="h-[300px] w-full" />
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          {[...Array(4)].map((_, i) => (
            <Skeleton key={i} className="h-[350px] w-full rounded-xl" />
          ))}
        </div>
      </div>
    </div>
  )
}
