export type Locale = "hu" | "en";

export const siteCopy = {
  hu: {
    title: "BG14 Meta Desk | Hearthstone Battlegrounds magyar segéd",
    description: "Magyar Hearthstone Battlegrounds 14. szezon segéd infografika aktuális compokkal, Dark Gifts tanácsokkal és HearthstoneJSON kártyaképekkel.",
    eyebrow: "Hearthstone Battlegrounds · 14. szezon",
    lede: "Tömör magyar segéd az early Season 14 döntésekhez: melyik engine-re érdemes ráállni, mely darabok számítanak, és mikor elég egy Dark Gift vagy Trinket a pivothoz.",
    updated: "Frissítve",
    languageLabel: "Nyelvválasztó",
    nav: [
      { key: "overview", label: "Áttekintés", href: "/" },
      { key: "comps", label: "Compok", href: "/comps/" },
      { key: "strategy", label: "Stratégia", href: "/strategy/" },
      { key: "references", label: "Források", href: "/references/" },
    ],
  },
  en: {
    title: "BG14 Meta Desk | Hearthstone Battlegrounds helper",
    description: "English Hearthstone Battlegrounds Season 14 helper infographic with current comps, Dark Gifts guidance, and HearthstoneJSON card art.",
    eyebrow: "Hearthstone Battlegrounds · Season 14",
    lede: "A compact helper for early Season 14 decisions: which engine to commit to, which pieces matter, and when a Dark Gift or Trinket is enough to pivot.",
    updated: "Updated",
    languageLabel: "Language selector",
    nav: [
      { key: "overview", label: "Overview", href: "/en/" },
      { key: "comps", label: "Comps", href: "/en/comps/" },
      { key: "strategy", label: "Strategy", href: "/en/strategy/" },
      { key: "references", label: "References", href: "/en/references/" },
    ],
  },
} as const;

export const languageLinks = {
  overview: { huHref: "/", enHref: "/en/" },
  comps: { huHref: "/comps/", enHref: "/en/comps/" },
  strategy: { huHref: "/strategy/", enHref: "/en/strategy/" },
  references: { huHref: "/references/", enHref: "/en/references/" },
} as const;

export function navItems(locale: Locale, active: keyof typeof languageLinks) {
  return siteCopy[locale].nav.map((item) => ({ ...item, active: item.key === active }));
}
