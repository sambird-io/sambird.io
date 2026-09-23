import { ArrowUpRight } from "lucide-react";
import { SiteLink as Link } from "@/components/site-link";
import { pillars } from "@/lib/content";

export function Pillars() {
  return (
    <section className="px-6 py-20" aria-labelledby="known-for-title">
      <div className="mx-auto max-w-5xl">
        <h2
          id="known-for-title"
          className="text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground"
        >
          What I&rsquo;m known for
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <Link
              key={pillar.title}
              href={pillar.href}
              className="group rounded-2xl border border-border bg-background p-6 transition hover:border-accent/50"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold leading-tight">
                  {pillar.title}
                </h3>
                <ArrowUpRight
                  className="h-5 w-5 shrink-0 text-muted-foreground transition group-hover:text-accent"
                  aria-hidden="true"
                />
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {pillar.body}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
