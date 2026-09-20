"use client";

import { SiteLink as Link } from "@/components/site-link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { site } from "@/lib/content";
import { cn } from "@/lib/cn";

const navItems = [
  { href: "/projects", label: "Projects" },
  { href: "/writing", label: "Writing" },
  { href: "/about", label: "About" },
  { href: "/speaking", label: "Speaking" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const pathname = usePathname();
  const [openAt, setOpenAt] = useState<string | null>(null);
  const open = openAt === pathname;
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenAt(null);
        menuButton.current?.focus();
      }
    };
    const closeOnResize = () => {
      if (window.innerWidth >= 768) setOpenAt(null);
    };
    document.addEventListener("keydown", closeOnEscape);
    window.addEventListener("resize", closeOnResize);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      window.removeEventListener("resize", closeOnResize);
    };
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <nav aria-label="Main navigation" className="site-shell flex h-16 items-center justify-between gap-5">
        <Link href="/" onClick={() => setOpenAt(null)} className="flex min-h-11 shrink-0 items-center text-base font-medium tracking-tight" aria-label={`${site.name} home`}>
          {site.name}
        </Link>
        <div className="flex items-center gap-3">
          <ul className="hidden items-center gap-5 md:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} aria-current={isActive(item.href) ? "page" : undefined} className={cn("flex min-h-11 items-center text-sm transition-colors hover:text-foreground", isActive(item.href) ? "text-foreground underline underline-offset-[7px]" : "text-muted-foreground")}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeToggle />
          <button ref={menuButton} type="button" onClick={() => setOpenAt(open ? null : pathname)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-navigation" className="flex h-11 w-11 items-center justify-center text-muted-foreground md:hidden">
            {open ? <X size={19} aria-hidden="true" /> : <Menu size={19} aria-hidden="true" />}
          </button>
        </div>
      </nav>
      {open && (
        <nav id="mobile-navigation" aria-label="Mobile navigation" className="border-t border-border bg-background md:hidden">
          <ul className="site-shell py-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={() => setOpenAt(null)} aria-current={isActive(item.href) ? "page" : undefined} className={cn("flex min-h-12 items-center border-b border-border text-sm last:border-0", isActive(item.href) ? "text-accent" : "text-foreground")}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
