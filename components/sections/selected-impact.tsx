import { ArrowUpRight } from "lucide-react";
import { SiteLink as Link } from "@/components/site-link";
import { selectedImpact } from "@/lib/content";

export function SelectedImpact() {
  return (
    <section
      id="selected-impact"
      className="site-shell section-space pt-8 sm:pt-12"
      aria-labelledby="selected-impact-title"
    >
      <div className="mb-7 max-w-2xl">
        <p className="eyebrow">Professional work</p>
        <h2 id="selected-impact-title" className="section-title mt-2">
          Selected impact
        </h2>
        <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base">
          Measured improvements from platform and delivery work.
        </p>
      </div>
      <div className="grid gap-x-7 md:grid-cols-3">
        {selectedImpact.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="group block border-t border-border py-5 transition-colors hover:border-accent"
          >
            <div className="flex items-start justify-between gap-4">
              <p className="text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
                {item.metric}
              </p>
              <ArrowUpRight
                className="mt-1 h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-accent"
                aria-hidden="true"
              />
            </div>
            <h3 className="mt-3 text-sm font-medium leading-6">{item.label}</h3>
            <p className="mt-1 text-sm leading-6 text-muted-foreground">
              {item.context}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
