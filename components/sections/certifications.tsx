import { certifications } from "@/lib/content";

export function Certifications() {
  if (certifications.length === 0) return null;

  return (
    <section className="site-shell section-space border-t border-border" aria-labelledby="certifications-title">
      <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] md:gap-16">
        <header>
          <p className="eyebrow">Credentials</p>
          <h2 id="certifications-title" className="section-title mt-4">Verified credentials.</h2>
        </header>
        <div>
          <ul className="border-t border-border">
            {certifications.map((cert) => (
              <li key={cert.name} className="border-b border-border py-4">
                <h3 className="text-sm font-medium">
                  {cert.url ? (
                    <a href={cert.url} target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-4">
                      {cert.name}
                    </a>
                  ) : cert.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{cert.issuer}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
