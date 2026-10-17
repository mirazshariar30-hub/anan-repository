import { useState } from "react"
import { Beer, UtensilsCrossed, Clock } from "lucide-react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { useLocale } from "@/lib/i18n"

export function Menu() {
  const { t } = useLocale()
  const [tab, setTab] = useState("drinks")

  return (
    <section id="menu" className="bg-secondary/40 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-10 text-center">
          <h2 className="mb-3 font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
            {t.menu.title}
          </h2>
          <p className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            {t.menu.note}
          </p>
        </div>

        <Tabs value={tab} onValueChange={setTab} className="w-full">
          <TabsList className="mx-auto flex w-full max-w-xs">
            <TabsTrigger value="drinks" className="flex-1">
              <Beer className="mr-1.5 h-4 w-4" />
              {t.menu.drinks}
            </TabsTrigger>
            <TabsTrigger value="plates" className="flex-1">
              <UtensilsCrossed className="mr-1.5 h-4 w-4" />
              {t.menu.smallPlates}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="drinks" className="mt-6">
            <Card className="border-dashed">
              <CardContent className="flex flex-col items-center gap-3 py-16 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-muted text-muted-foreground">
                  <Clock className="h-6 w-6" />
                </div>
                <p className="text-lg font-medium text-muted-foreground">{t.menu.placeholder}</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="plates" className="mt-6">
            <Card className="border-dashed">
              <CardContent className="flex flex-col items-center gap-3 py-16 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-muted text-muted-foreground">
                  <Clock className="h-6 w-6" />
                </div>
                <p className="text-lg font-medium text-muted-foreground">{t.menu.placeholder}</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
