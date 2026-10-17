import { MapPin, Phone, Clock, Navigation } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useLocale } from "@/lib/i18n"

const MAPS_DIR_URL =
  "https://www.google.com/maps/dir/?api=1&destination=32+Higashimachi+Nishinoomote+Kagoshima+891-3113+Japan"
const MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3429.514541936001!2d130.99215787934565!3d30.732045199999988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x353c6983e360d157%3A0xdfc228e5af91eb14!2z772B772O772B772O!5e0!3m2!1sen!2sbd!4v1792240261354!5m2!1sen!2sbd"

export function Access() {
  const { t } = useLocale()
  return (
    <section id="access" className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
      <h2 className="mb-10 text-center font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
        {t.access.title}
      </h2>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <Card>
            <CardContent className="space-y-5 py-6">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
                    {t.access.title}
                  </p>
                  <p className="mt-1 font-medium">{t.access.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
                    {t.reservation.phone}
                  </p>
                  <a
                    href="tel:+81997233130"
                    className="mt-1 block font-medium hover:underline"
                    dir="ltr"
                  >
                    {t.access.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
                    {t.navbar.info}
                  </p>
                  <p className="mt-1 text-muted-foreground">{t.access.hours}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Button asChild size="lg" className="w-full">
            <a href={MAPS_DIR_URL} target="_blank" rel="noopener noreferrer">
              <Navigation className="mr-2 h-5 w-5" />
              {t.access.directions}
            </a>
          </Button>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
          <iframe
            title="anan map"
            src={MAPS_EMBED_URL}
            width="600"
            height="450"
            className="h-[360px] w-full border-0 bg-muted sm:h-[420px] md:h-full md:min-h-[420px]"
            allowFullScreen
            loading="eager"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>
    </section>
  )
}
