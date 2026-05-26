"use client";

import { useCallback, useSyncExternalStore } from "react";

const STORAGE_KEY = "theme";

function getStorageValue(): string | null {
  if (typeof window === "undefined") return null;
  return window.localStorage.getItem(STORAGE_KEY);
}

function setStorageValue(value: string) {
  try {
    window.localStorage.setItem(STORAGE_KEY, value);
  } catch {
    /* noop */
  }
}

function getSnapshot(): "dark" | "light" {
  const stored = getStorageValue();
  if (stored === "dark" || stored === "light") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

export function useDarkMode() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, () => "light");

  const toggleTheme = useCallback(() => {
    const next = theme === "dark" ? "light" : "dark";
    setStorageValue(next);
    window.dispatchEvent(new Event("storage"));
  }, [theme]);

  const setTheme = useCallback((t: "dark" | "light") => {
    setStorageValue(t);
    window.dispatchEvent(new Event("storage"));
  }, []);

  return { theme, isDark: theme === "dark", toggleTheme, setTheme };
}
