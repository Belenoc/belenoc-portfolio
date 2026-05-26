import { create } from "zustand";
import { persist } from "zustand/middleware";

type Lang = "en" | "es";

interface ITranslateStore {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

export const useTranslateStore = create<ITranslateStore>()(
  persist(
    (set) => ({
      lang: "en",
      setLang: (lang: Lang) => set({ lang }),
    }),
    {
      name: "lang",
      partialize: (state) => ({ lang: state.lang }),
    },
  ),
);
