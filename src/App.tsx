import { Navbar } from "@/components/site-navbar"
import { Hero } from "@/components/site-hero"
import { About } from "@/components/site-about"
import { Menu } from "@/components/site-menu"
import { InfoCards } from "@/components/site-info"
import { ReservationForm } from "@/components/site-reservation"
import { Reviews } from "@/components/site-reviews"
import { Access } from "@/components/site-access"
import { SiteFooter } from "@/components/site-footer"

export function App() {
  return (
    <div className="min-h-svh bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <InfoCards />
        <ReservationForm />
        <Reviews />
        <Access />
      </main>
      <SiteFooter />
    </div>
  )
}

export default App
