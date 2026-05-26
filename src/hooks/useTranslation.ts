"use client";

import { useTranslateStore } from "@/shared/stores/useTranslateStore";
import en from "@/i18n/en.json";
import es from "@/i18n/es.json";

const translations = { en, es } as const;

type DeepValue<T, P extends string> = P extends `${infer K}.${infer R}`
  ? K extends keyof T
    ? DeepValue<T[K], R>
    : string
  : P extends keyof T
    ? T[P]
    : string;

export function useTranslation() {
  const lang = useTranslateStore((s) => s.lang);
  const setLang = useTranslateStore((s) => s.setLang);

  function t(path: string): string {
    const keys = path.split(".");
    let value: Record<string, unknown> | string = translations[lang];
    for (const key of keys) {
      if (typeof value === "object" && value !== null && key in value) {
        value = value[key] as Record<string, unknown> | string;
      } else {
        return path;
      }
    }
    return typeof value === "string" ? value : path;
  }

  return { t, lang, setLang };
}
