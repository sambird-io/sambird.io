import { ArrowUpRight } from "lucide-react";
import { selectedWork } from "@/lib/content";

export function SelectedWork() {
  return (
    <section id="work" className="bg-surface/40 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="max-w-2xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Beyond delivery
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Selected work
          </h2>
          <p className="mt-4 text-balance text-base text-muted-foreground sm:text-lg">
            A few examples of how I share and test engineering ideas.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {selectedWork.map((item, index) => (
            <article
              key={`${item.title}-${item.period}`}
              className="group relative overflow-hidden rounded-2xl border border-border bg-background p-7 transition hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5"
            >
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent opacity-60"
              />
              <div className="flex items-center justify-between gap-4 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                <span>{item.kind}</span>
                <span>
                  {String(index + 1).padStart(2, "0")} / {item.period}
                </span>
              </div>
              <h3 className="mt-8 text-xl font-semibold tracking-tight">
                {item.title}
              </h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                {item.description}
              </p>
              {item.href && item.linkLabel ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-accent"
                >
                  {item.linkLabel}
                  <ArrowUpRight
                    aria-hidden="true"
                    className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
