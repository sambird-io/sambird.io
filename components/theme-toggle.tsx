"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle color theme"
      className="inline-flex h-11 w-11 items-center justify-center text-muted-foreground transition-colors hover:text-foreground"
    >
      <Sun className="h-[17px] w-[17px] dark:hidden" aria-hidden="true" />
      <Moon className="hidden h-[17px] w-[17px] dark:block" aria-hidden="true" />
    </button>
  );
}
