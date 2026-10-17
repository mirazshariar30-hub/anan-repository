import * as React from "react"

export type Locale = "ja" | "en"

export interface Translations {
  navbar: {
    about: string
    menu: string
    info: string
    reserve: string
    access: string
  }
  hero: {
    tagline: string
    primaryButton: string
    secondaryButton: string
  }
  about: {
    title: string
    body: string
  }
  menu: {
    title: string
    drinks: string
    smallPlates: string
    note: string
    placeholder: string
  }
  info: {
    dineIn: string
    tableService: string
    restroom: string
    groups: string
    alcohol: string
    reservationsAccepted: string
    paypay: string
    noDelivery: string
    accessibilityLabel: string
    accessibilityBody: string
  }
  reservation: {
    title: string
    name: string
    phone: string
    date: string
    time: string
    guests: string
    notes: string
    submit: string
    loading: string
    success: string
    error: string
    validation: {
      name: string
      phone: string
      date: string
      guests: string
    }
    phoneAlternative: string
  }
  reviews: {
    google: string
  }
  access: {
    title: string
    address: string
    phone: string
    directions: string
    hours: string
  }
  footer: {
    copyright: string
  }
}

const ja: Translations = {
  navbar: {
    about: "お店について",
    menu: "メニュー",
    info: "店舗情報",
    reserve: "ご予約",
    access: "アクセス",
  },
  hero: {
    tagline: "西之表で過ごす、くつろぎの夜。",
    primaryButton: "ご予約はこちら",
    secondaryButton: "お電話する",
  },
  about: {
    title: "お店について",
    body: "あんあんは、鹿児島県西之表市にある小さなお店です。お酒と小皿料理を楽しみながら、友人や仲間とゆっくりお過ごしください。",
  },
  menu: {
    title: "メニュー",
    drinks: "ドリンク",
    smallPlates: "小皿料理",
    note: "ビール・お酒をご用意しています。",
    placeholder: "準備中",
  },
  info: {
    dineIn: "店内飲食OK",
    tableService: "テーブルサービス",
    restroom: "お手洗いあり",
    groups: "グループ歓迎",
    alcohol: "お酒・ビール・小皿料理",
    reservationsAccepted: "ご予約可能",
    paypay: "PayPay利用可",
    noDelivery: "デリバリーなし",
    accessibilityLabel: "バリアフリーについて",
    accessibilityBody: "入口と駐車場は車椅子に対応していません。",
  },
  reservation: {
    title: "ご予約",
    name: "お名前",
    phone: "お電話番号",
    date: "ご希望日",
    time: "ご希望時間",
    guests: "人数",
    notes: "ご要望・備考",
    submit: "予約を送信する",
    loading: "送信中…",
    success: "ご予約を承りました。確認のためご連絡いたします。",
    error: "送信に失敗しました。もう一度お試しいただくか、お電話ください。",
    validation: {
      name: "お名前を入力してください",
      phone: "正しい電話番号を入力してください",
      date: "日付を選択してください",
      guests: "人数を選択してください",
    },
    phoneAlternative: "お電話でもご予約いただけます",
  },
  reviews: {
    google: "Google口コミ 4.5 / 5(12件)",
  },
  access: {
    title: "アクセス",
    address: "〒891-3113 鹿児島県西之表市東町32",
    phone: "0997-23-3130",
    directions: "経路を見る",
    hours: "営業時間は準備中です",
  },
  footer: {
    copyright: "© anan. All rights reserved.",
  },
}

const en: Translations = {
  navbar: {
    about: "About",
    menu: "Menu",
    info: "Info",
    reserve: "Reserve",
    access: "Access",
  },
  hero: {
    tagline: "A cozy night out in Nishinoomote.",
    primaryButton: "Reserve a Table",
    secondaryButton: "Call Us",
  },
  about: {
    title: "About Us",
    body: "anan is a small, cozy spot in Nishinoomote, Kagoshima. Enjoy drinks and small plates with friends in a relaxed atmosphere.",
  },
  menu: {
    title: "Menu",
    drinks: "Drinks",
    smallPlates: "Small Plates",
    note: "Beer and other alcoholic drinks available.",
    placeholder: "Coming soon",
  },
  info: {
    dineIn: "Dine-in",
    tableService: "Table service",
    restroom: "Restroom available",
    groups: "Great for groups",
    alcohol: "Alcohol, beer & small plates",
    reservationsAccepted: "Reservations accepted",
    paypay: "PayPay accepted",
    noDelivery: "No delivery",
    accessibilityLabel: "Accessibility",
    accessibilityBody: "The entrance and parking are not wheelchair accessible.",
  },
  reservation: {
    title: "Reservation",
    name: "Name",
    phone: "Phone",
    date: "Date",
    time: "Time",
    guests: "Guests",
    notes: "Notes",
    submit: "Submit Reservation",
    loading: "Sending…",
    success: "Thank you! We will contact you to confirm your reservation.",
    error: "Something went wrong. Please try again or call us.",
    validation: {
      name: "Please enter your name",
      phone: "Please enter a valid phone number",
      date: "Please select a date",
      guests: "Please select the number of guests",
    },
    phoneAlternative: "You can also reserve by phone",
  },
  reviews: {
    google: "4.5 / 5 from 12 Google reviews",
  },
  access: {
    title: "Access",
    address: "32 Higashimachi, Nishinoomote, Kagoshima 891-3113, Japan",
    phone: "0997-23-3130",
    directions: "Get Directions",
    hours: "Opening hours coming soon",
  },
  footer: {
    copyright: "© anan. All rights reserved.",
  },
}

const translations: Record<Locale, Translations> = { ja, en }

const STORAGE_KEY = "anan-locale"

function detectBrowserLocale(): Locale {
  if (typeof navigator === "undefined") return "ja"
  const langs = navigator.languages ?? [navigator.language]
  for (const l of langs) {
    if (l.toLowerCase().startsWith("ja")) return "ja"
  }
  return "en"
}

function getStoredLocale(): Locale | null {
  try {
    const v = localStorage.getItem(STORAGE_KEY)
    if (v === "ja" || v === "en") return v
  } catch {
    // ignore
  }
  return null
}

function setStoredLocale(locale: Locale) {
  try {
    localStorage.setItem(STORAGE_KEY, locale)
  } catch {
    // ignore
  }
}

type LocaleContextValue = {
  locale: Locale
  setLocale: (l: Locale) => void
  t: Translations
}

const LocaleContext = React.createContext<LocaleContextValue | undefined>(undefined)

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = React.useState<Locale>(() => {
    const stored = getStoredLocale()
    if (stored) return stored
    return detectBrowserLocale()
  })

  React.useEffect(() => {
    const html = document.documentElement
    html.lang = locale
    setStoredLocale(locale)
  }, [locale])

  const setLocale = React.useCallback((l: Locale) => setLocaleState(l), [])

  const value = React.useMemo<LocaleContextValue>(
    () => ({ locale, setLocale, t: translations[locale] }),
    [locale, setLocale]
  )

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export function useLocale(): LocaleContextValue {
  const ctx = React.useContext(LocaleContext)
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider")
  return ctx
}

export function translate(locale: Locale, key: keyof Translations): unknown {
  const t = translations[locale] ?? translations.ja
  return t[key]
}
