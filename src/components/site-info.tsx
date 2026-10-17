import {
  Store,
  ConciergeBell,
  Bath,
  Users,
  Wine,
  CalendarCheck,
  QrCode,
  Truck,
  Accessibility,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useLocale } from "@/lib/i18n"

export function InfoCards() {
  const { t } = useLocale()

  const items = [
    { icon: Store, label: t.info.dineIn },
    { icon: ConciergeBell, label: t.info.tableService },
    { icon: Bath, label: t.info.restroom },
    { icon: Users, label: t.info.groups },
    { icon: Wine, label: t.info.alcohol },
    { icon: CalendarCheck, label: t.info.reservationsAccepted },
    { icon: QrCode, label: t.info.paypay },
    { icon: Truck, label: t.info.noDelivery },
  ]

  return (
    <section id="info" className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
      <h2 className="mb-3 text-center font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
        {t.navbar.info}
      </h2>
      <p className="mb-10 text-center text-sm uppercase tracking-[0.2em] text-muted-foreground">
        anan
      </p>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {items.map((item) => (
          <Card key={item.label} className="border-border/60 transition-shadow hover:shadow-md">
            <CardContent className="flex flex-col items-center gap-3 py-6 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground">
                <item.icon className="h-5 w-5" />
              </div>
              <p className="text-sm font-medium leading-snug">{item.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mt-6 border-amber-500/30 bg-accent/30">
        <CardContent className="flex items-start gap-4 py-5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
            <Accessibility className="h-5 w-5" />
          </div>
          <div>
            <p className="font-semibold">{t.info.accessibilityLabel}</p>
            <p className="mt-1 text-sm text-muted-foreground">{t.info.accessibilityBody}</p>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
