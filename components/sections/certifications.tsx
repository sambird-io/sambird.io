import { certifications, site } from "@/lib/content";

export function Certifications() {
  return (
    <section className="site-shell section-space border-t border-border" aria-labelledby="certifications-title">
      <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] md:gap-16">
        <header>
          <p className="eyebrow">Credentials</p>
          <h2 id="certifications-title" className="section-title mt-4">Cloud certified.</h2>
        </header>
        <div>
          <ul className="border-t border-border">
            {certifications.map((cert) => (
              <li key={cert.name} className="border-b border-border py-4">
                <h3 className="text-sm font-medium">{cert.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{cert.issuer}</p>
              </li>
            ))}
          </ul>
          <a href={site.links.linkedin} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm text-accent underline underline-offset-4 hover:decoration-2">
            Credentials on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
