import Link from "next/link";
import { site } from "@/lib/content";

const pages = [
  { href: "/projects", label: "Projects" },
  { href: "/writing", label: "Writing" },
  { href: "/about", label: "About" },
  { href: "/uses", label: "Uses" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="site-shell flex flex-col gap-5 py-7 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p className="text-foreground">{site.name} <span className="text-muted-foreground">· {site.location}</span></p>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {pages.map((item) => (
              <li key={item.href}><Link href={item.href} className="hover:text-foreground">{item.label}</Link></li>
            ))}
            <li><a href={site.links.github} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">GitHub</a></li>
            <li><a href={site.links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">LinkedIn</a></li>
            <li><a href="/feed.xml" className="hover:text-foreground">RSS</a></li>
          </ul>
        </nav>
        <p>&copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
