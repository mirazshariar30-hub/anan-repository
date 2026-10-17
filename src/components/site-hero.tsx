import { Phone, CalendarCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLocale } from "@/lib/i18n"

export function Hero() {
  const { t } = useLocale()
  return (
    <section id="top" className="relative flex min-h-svh items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/hero-izakaya.webp"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="mb-4 font-script text-5xl font-bold text-white drop-shadow-lg sm:text-7xl">
            anan
          </p>
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-white/70">
            西之表市・居酒屋
          </p>
          <h1 className="mb-8 text-3xl font-semibold leading-snug text-white drop-shadow-md sm:text-4xl md:text-5xl">
            <span style={{ wordBreak: "keep-all", overflowWrap: "anywhere" }}>
              {t.hero.tagline}
            </span>
          </h1>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="text-base">
              <a href="#reserve">
                <CalendarCheck className="mr-2 h-5 w-5" />
                {t.hero.primaryButton}
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:text-white text-base"
            >
              <a href="tel:+81997233130">
                <Phone className="mr-2 h-5 w-5" />
                {t.hero.secondaryButton}
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
