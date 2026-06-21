import Link from "next/link";
import { Mail, Rss } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { site } from "@/lib/content";

const siteLinks = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/writing", label: "Writing" },
  { href: "/speaking", label: "Speaking" },
  { href: "/uses", label: "Uses" },
  { href: "/contact", label: "Contact" },
];

const social = [
  { href: site.links.linkedin, label: "LinkedIn", icon: LinkedinIcon, external: true },
  { href: site.links.github, label: "GitHub", icon: GithubIcon, external: true },
  { href: `mailto:${site.email}`, label: "Email", icon: Mail, external: false },
  { href: "/feed.xml", label: "RSS", icon: Rss, external: false },
];

export function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-xs">
            <Link href="/" className="text-sm font-semibold tracking-tight">
              {site.name}
            </Link>
            <p className="mt-3 text-sm text-muted-foreground">
              {site.role} at {site.company}. Cloud, data &amp; platform
              engineering.
            </p>
          </div>

          <nav className="flex flex-col gap-3" aria-label="Footer">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Site
            </p>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2">
              {siteLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Elsewhere
            </p>
            <ul className="flex gap-2">
              {social.map(({ href, label, icon: Icon, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    {...(external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition hover:border-accent/60 hover:text-accent"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-2 border-t border-border/60 pt-6 text-sm text-muted-foreground sm:flex-row sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>
            Built with{" "}
            <a
              href="https://nextjs.org"
              className="underline-offset-4 hover:underline"
              rel="noreferrer noopener"
              target="_blank"
            >
              Next.js
            </a>
            , deployed on{" "}
            <a
              href="https://fly.io"
              className="underline-offset-4 hover:underline"
              rel="noreferrer noopener"
              target="_blank"
            >
              Fly.io
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
