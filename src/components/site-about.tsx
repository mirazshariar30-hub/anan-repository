import { useLocale } from "@/lib/i18n"

export function About() {
  const { t } = useLocale()
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
      <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
        <div className="order-2 md:order-1">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            anan
          </p>
          <h2 className="mb-6 font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
            {t.about.title}
          </h2>
          <p className="text-lg text-muted-foreground">{t.about.body}</p>
        </div>
        <div className="order-1 md:order-2">
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src="/about-smallplates.webp"
              alt="Small plates of Japanese food"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
