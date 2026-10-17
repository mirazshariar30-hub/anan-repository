import { useEffect, useState } from "react"
import { Menu, Phone, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { useLocale, type Locale } from "@/lib/i18n"

const NAV_LINKS = [
  { id: "about", key: "about" as const },
  { id: "menu", key: "menu" as const },
  { id: "info", key: "info" as const },
  { id: "reserve", key: "reserve" as const },
  { id: "access", key: "access" as const },
]

export function Navbar() {
  const { t, locale, setLocale } = useLocale()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const switchLocale = (l: Locale) => setLocale(l)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/60 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a
          href="#top"
          className="flex items-center gap-2 text-foreground"
          aria-label="anan"
        >
          <img
            src="/image.png"
            alt="anan"
            className="h-9 w-9 rounded-full object-cover object-[58%_38%] ring-2 ring-background/80"
          />
          <span className="font-script text-2xl font-bold tracking-tight">anan</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground hover:bg-accent/50"
            >
              {t.navbar[link.key]}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-1 rounded-full border border-border bg-card/50 px-1 py-1 text-sm sm:flex">
            <button
              onClick={() => switchLocale("ja")}
              className={`rounded-full px-3 py-1 transition-colors ${
                locale === "ja"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              aria-pressed={locale === "ja"}
            >
              日本語
            </button>
            <button
              onClick={() => switchLocale("en")}
              className={`rounded-full px-3 py-1 transition-colors ${
                locale === "en"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              aria-pressed={locale === "en"}
            >
              EN
            </button>
          </div>

          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href="tel:+81997233130">
              <Phone className="mr-1.5 h-4 w-4" />
              {t.navbar.reserve}
            </a>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden" aria-label="Menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <div className="flex flex-col gap-1 pt-6">
                <div className="mb-2 flex items-center justify-between">
                  <span className="flex items-center gap-2 font-script text-2xl font-bold">
                    <img
                      src="/image.png"
                      alt="anan"
                      className="h-9 w-9 rounded-full object-cover object-[58%_38%]"
                    />
                    anan
                  </span>
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon" aria-label="Close">
                      <X className="h-5 w-5" />
                    </Button>
                  </SheetClose>
                </div>
                {NAV_LINKS.map((link) => (
                  <SheetClose asChild key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className="rounded-md px-3 py-2.5 text-base font-medium text-foreground/90 transition-colors hover:bg-accent"
                    >
                      {t.navbar[link.key]}
                    </a>
                  </SheetClose>
                ))}
                <div className="mt-4 flex items-center gap-2 rounded-full border border-border px-1 py-1 text-sm">
                  <button
                    onClick={() => switchLocale("ja")}
                    className={`rounded-full px-3 py-1 transition-colors ${
                      locale === "ja"
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground"
                    }`}
                  >
                    日本語
                  </button>
                  <button
                    onClick={() => switchLocale("en")}
                    className={`rounded-full px-3 py-1 transition-colors ${
                      locale === "en"
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground"
                    }`}
                  >
                    EN
                  </button>
                </div>
                <Button asChild className="mt-4">
                  <a href="tel:+81997233130">
                    <Phone className="mr-1.5 h-4 w-4" />
                    {t.hero.secondaryButton}
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
