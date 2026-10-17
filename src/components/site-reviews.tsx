import { Star } from "lucide-react"
import { useLocale } from "@/lib/i18n"

export function Reviews() {
  const { t } = useLocale()
  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-8 text-center shadow-sm">
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star
              key={i}
              className={`h-5 w-5 ${
                i <= 4 ? "fill-amber-500 text-amber-500" : "fill-amber-500/50 text-amber-500/50"
              }`}
            />
          ))}
        </div>
        <p className="text-lg font-medium">{t.reviews.google}</p>
        <a
          href="https://www.google.com/maps"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted-foreground underline-offset-4 hover:underline"
        >
          Google Maps
        </a>
      </div>
    </section>
  )
}
