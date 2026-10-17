import { useState } from "react"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Phone, CheckCircle2, AlertCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Field, FieldLabel, FieldError } from "@/components/ui/field"
import { useLocale } from "@/lib/i18n"
import { supabase } from "@/lib/supabase"

const TIME_SLOTS = [
  "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30",
]

const GUEST_OPTIONS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

export function ReservationForm() {
  const { t, locale } = useLocale()
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const phoneRegex = /^[0-9+\-\s()]{7,20}$/

  const schema = z.object({
    name: z.string().min(1, t.reservation.validation.name),
    phone: z.string().regex(phoneRegex, t.reservation.validation.phone),
    date: z.string().min(1, t.reservation.validation.date),
    time: z.string().min(1, t.reservation.validation.date),
    guests: z.number({ error: t.reservation.validation.guests }).int().min(1, t.reservation.validation.guests),
    notes: z.string().optional(),
  })

  type FormValues = z.infer<typeof schema>

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", phone: "", date: "", time: "", guests: 0, notes: "" },
    mode: "onChange",
  })

  const onSubmit = async (values: FormValues) => {
    setStatus("loading")
    try {
      const { error } = await supabase.from("reservations").insert({
        name: values.name,
        phone: values.phone,
        reservation_date: values.date,
        reservation_time: values.time,
        guests: values.guests,
        notes: values.notes ?? null,
        locale,
      })
      if (error) throw error
      setStatus("success")
      form.reset()
    } catch (err) {
      console.error(err)
      setStatus("error")
    }
  }

  const today = new Date().toISOString().split("T")[0]

  return (
    <section id="reserve" className="bg-secondary/40 py-20 sm:py-28">
      <div className="mx-auto max-w-2xl px-6">
        <div className="mb-10 text-center">
          <h2 className="mb-3 font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
            {t.reservation.title}
          </h2>
          <p className="text-sm text-muted-foreground">{t.reservation.phoneAlternative}</p>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
          {status === "success" ? (
            <div className="flex flex-col items-center gap-4 py-12 text-center">
              <CheckCircle2 className="h-14 w-14 text-primary" />
              <p className="max-w-md text-lg font-medium">{t.reservation.success}</p>
              <Button variant="outline" onClick={() => setStatus("idle")}>
                {t.reservation.title}
              </Button>
            </div>
          ) : (
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5" noValidate>
              <Controller
                name="name"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="res-name">{t.reservation.name}</FieldLabel>
                    <Input
                      id="res-name"
                      {...field}
                      aria-invalid={fieldState.invalid}
                      autoComplete="name"
                    />
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </Field>
                )}
              />

              <Controller
                name="phone"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="res-phone">{t.reservation.phone}</FieldLabel>
                    <Input
                      id="res-phone"
                      type="tel"
                      {...field}
                      aria-invalid={fieldState.invalid}
                      autoComplete="tel"
                      placeholder="090-1234-5678"
                    />
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </Field>
                )}
              />

              <div className="grid gap-5 sm:grid-cols-2">
                <Controller
                  name="date"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="res-date">{t.reservation.date}</FieldLabel>
                      <Input
                        id="res-date"
                        type="date"
                        value={field.value}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                        min={today}
                        aria-invalid={fieldState.invalid}
                      />
                      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                    </Field>
                  )}
                />

                <Controller
                  name="time"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="res-time">{t.reservation.time}</FieldLabel>
                      <Select value={field.value} onValueChange={field.onChange}>
                        <SelectTrigger id="res-time" aria-invalid={fieldState.invalid}>
                          <SelectValue placeholder="--:--" />
                        </SelectTrigger>
                        <SelectContent>
                          {TIME_SLOTS.map((slot) => (
                            <SelectItem key={slot} value={slot}>
                              {slot}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                    </Field>
                  )}
                />
              </div>

              <Controller
                name="guests"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="res-guests">{t.reservation.guests}</FieldLabel>
                    <Select
                      value={field.value ? String(field.value) : ""}
                      onValueChange={(v) => field.onChange(Number(v))}
                    >
                      <SelectTrigger id="res-guests" aria-invalid={fieldState.invalid}>
                        <SelectValue placeholder={t.reservation.guests} />
                      </SelectTrigger>
                      <SelectContent>
                        {GUEST_OPTIONS.map((n) => (
                          <SelectItem key={n} value={String(n)}>
                            {n}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </Field>
                )}
              />

              <Controller
                name="notes"
                control={form.control}
                render={({ field }) => (
                  <Field>
                    <FieldLabel htmlFor="res-notes">{t.reservation.notes}</FieldLabel>
                    <Textarea id="res-notes" {...field} rows={3} />
                  </Field>
                )}
              />

              {status === "error" && (
                <div className="flex items-start gap-2 rounded-md border border-destructive/40 bg-destructive/10 p-3 text-sm text-destructive">
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>{t.reservation.error}</span>
                </div>
              )}

              <Button type="submit" size="lg" className="w-full" disabled={status === "loading"}>
                {status === "loading" ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {t.reservation.loading}
                  </>
                ) : (
                  t.reservation.submit
                )}
              </Button>

              <div className="pt-2 text-center">
                <a
                  href="tel:+81997233130"
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
                >
                  <Phone className="h-4 w-4" />
                  {t.access.phone}
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}


