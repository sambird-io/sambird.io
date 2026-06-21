import { certifications, site } from "@/lib/content";

export function Certifications() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Certifications
        </h2>
        <p className="mt-4 max-w-2xl text-base text-muted-foreground">
          Cloud certifications across the two providers I work in most.
        </p>
        <ul className="mt-8 flex flex-wrap gap-3">
          {certifications.map((cert) => (
            <li
              key={cert.name}
              className="rounded-xl border border-border bg-surface px-4 py-3"
            >
              <p className="text-sm font-medium">{cert.name}</p>
              <p className="text-xs text-muted-foreground">{cert.issuer}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-muted-foreground">
          <a
            href={site.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline-offset-4 hover:underline"
          >
            See verified credentials on LinkedIn &rarr;
          </a>
        </p>
      </div>
    </section>
  );
}
