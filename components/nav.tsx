"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
      <nav aria-label="Main navigation" className="site-shell flex h-20 items-center justify-between gap-5">
        <Link href="/" onClick={() => setOpenAt(null)} className="flex min-h-11 shrink-0 items-center gap-3" aria-label={`${site.name} home`}>
          <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-foreground font-mono text-sm font-medium text-background" aria-hidden="true">sb.</span>
          <span className="text-[15px] font-semibold tracking-tight">{site.name}<span className="text-accent">.</span></span>
        </Link>
        <div className="flex items-center gap-3 lg:gap-7">
          <ul className="hidden items-center gap-1 md:flex lg:gap-5">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} aria-current={isActive(item.href) ? "page" : undefined} className={cn("relative flex min-h-11 items-center gap-1.5 px-2 text-xs font-medium transition hover:text-accent", isActive(item.href) ? "text-accent after:absolute after:inset-x-2 after:bottom-1 after:h-px after:bg-accent" : "text-muted-foreground")}>
                  {item.label}{item.href === "/contact" && <ArrowUpRight size={13} aria-hidden="true" />}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeToggle />
          <button ref={menuButton} type="button" onClick={() => setOpenAt(open ? null : pathname)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-navigation" className="flex h-11 w-11 items-center justify-center rounded border border-border md:hidden">
            {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </nav>
      {open && (
        <nav id="mobile-navigation" aria-label="Mobile navigation" className="border-t border-border bg-background md:hidden">
          <ul className="site-shell py-4">
            {navItems.map((item, index) => (
              <li key={item.href}>
                <Link href={item.href} onClick={() => setOpenAt(null)} aria-current={isActive(item.href) ? "page" : undefined} className={cn("flex min-h-12 items-center justify-between border-b border-border py-3 text-base", isActive(item.href) ? "text-accent" : "text-foreground")}>
                  {item.label}<span aria-hidden="true" className="font-mono text-[10px] text-muted-foreground">0{index + 1}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
