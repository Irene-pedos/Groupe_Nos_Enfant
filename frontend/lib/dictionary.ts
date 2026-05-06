import type { AboutDictionary } from "./types"

const dictionaries = {
  en: () => import("../translations/en.json").then((module) => module.default),
  fr: () => import("../translations/fr.json").then((module) => module.default),
}

export const getDictionary = async (locale: "en" | "fr"): Promise<AboutDictionary> =>
  dictionaries[locale]?.() ?? dictionaries.en()
