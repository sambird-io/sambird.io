import { ArrowUpRight, BadgeCheck } from "lucide-react";
import { certifications, site } from "@/lib/content";

export function Certifications() {
  return (
    <section className="section-space border-b border-border" aria-labelledby="certifications-title">
      <div className="site-shell grid gap-10 md:grid-cols-[220px_minmax(0,1fr)] md:gap-12">
        <div>
          <p className="eyebrow">03 / Credentials</p>
          <h2 id="certifications-title" className="mt-4 text-2xl font-semibold tracking-tight">Cloud certified.</h2>
        </div>
        <div>
          <ul className="grid gap-8 sm:grid-cols-2">
            {certifications.map((cert) => (
              <li key={cert.name} className="flex items-start gap-4">
                <BadgeCheck className="mt-0.5 h-6 w-6 shrink-0 text-accent" aria-hidden="true" />
                <div>
                  <h3 className="text-base font-semibold">{cert.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{cert.issuer}</p>
                </div>
              </li>
            ))}
          </ul>
          <a href={site.links.linkedin} target="_blank" rel="noopener noreferrer" className="text-link mt-8 min-h-11 text-sm">
            Credentials on LinkedIn <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
