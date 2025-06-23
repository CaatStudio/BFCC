import { CallbackScheduler } from "@/components/callback-scheduler"

export default function CallbackPage() {
  return (
    <div className="container max-w-3xl mx-auto py-12 px-4 md:px-6">
      <div className="space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Schedule a Callback</h1>
          <p className="text-muted-foreground md:text-xl/relaxed">
            Select a convenient time for us to call you and discuss your cleaning needs.
          </p>
        </div>

        <div className="rounded-xl border bg-card text-card-foreground shadow-sm p-6">
          <CallbackScheduler />
        </div>

        <div className="text-center text-sm text-muted-foreground">
          <p>
            Need immediate assistance? Call us directly at <span className="font-medium">(801) 689-1146</span>
          </p>
        </div>
      </div>
    </div>
  )
}
