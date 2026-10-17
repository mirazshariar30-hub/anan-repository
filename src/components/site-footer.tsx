import { Phone, MapPin } from "lucide-react"
import { useLocale } from "@/lib/i18n"

export function SiteFooter() {
  const { t } = useLocale()
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
          <div className="flex items-center gap-3">
            <img
              src="/image.png"
              alt="anan"
              className="h-16 w-16 rounded-xl object-cover object-[58%_38%] ring-2 ring-border"
            />
            <div>
              <p className="font-script text-3xl font-bold">anan</p>
              <p className="mt-1 text-sm text-muted-foreground">アン アン</p>
            </div>
          </div>

          <div className="space-y-2 text-sm text-muted-foreground">
            <p className="flex items-center justify-center gap-2 md:justify-start">
              <MapPin className="h-4 w-4 shrink-0" />
              {t.access.address}
            </p>
            <p className="flex items-center justify-center gap-2 md:justify-start">
              <Phone className="h-4 w-4 shrink-0" />
              <a href="tel:+81997233130" className="hover:text-foreground" dir="ltr">
                {t.access.phone}
              </a>
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-border/60 pt-6 text-center text-xs text-muted-foreground">
          {t.footer.copyright}
        </div>
      </div>
    </footer>
  )
}
