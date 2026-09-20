import Link from "next/link";
import { ArrowUpRight, Rss } from "lucide-react";
import { site } from "@/lib/content";

const links = [
  { href: "/projects", label: "Projects" }, { href: "/writing", label: "Writing" },
  { href: "/about", label: "About" }, { href: "/speaking", label: "Speaking" },
  { href: "/uses", label: "Uses" }, { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="site-shell py-12 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-[1.3fr_1fr_1fr] sm:gap-12">
          <div>
            <Link href="/" className="text-2xl font-medium tracking-tight">{site.name}<span className="text-accent">.</span></Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">Building platforms. Making sense of systems. Sharing what I learn.</p>
            <p className="mt-5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{site.location}</p>
          </div>
          <nav aria-label="Footer">
            <p className="eyebrow mb-3">Explore</p>
            <ul className="grid grid-cols-2 gap-x-6">
              {links.map((item) => <li key={item.href}><Link href={item.href} className="text-link text-muted-foreground">{item.label}</Link></li>)}
            </ul>
          </nav>
          <div>
            <p className="eyebrow mb-3">Elsewhere</p>
            <ul>
              {[{ href: site.links.github, label: "GitHub" }, { href: site.links.linkedin, label: "LinkedIn" }].map((item) => <li key={item.label}><a href={item.href} target="_blank" rel="noopener noreferrer" className="text-link text-muted-foreground">{item.label}<ArrowUpRight size={13} aria-hidden="true" /></a></li>)}
              <li><a href="/feed.xml" className="text-link text-muted-foreground">RSS feed <Rss size={13} aria-hidden="true" /></a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap justify-between gap-3 border-t border-border pt-6 font-mono text-[10px] text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} {site.name}</p>
          <p>Built with care, in Yorkshire.</p>
        </div>
      </div>
    </footer>
  );
}
