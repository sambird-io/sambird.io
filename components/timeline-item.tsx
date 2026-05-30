import Image from "next/image";
import type { Experience } from "@/lib/content";

export function TimelineItem({ item }: { item: Experience }) {
  return (
    <li className="relative pl-12 sm:pl-16">
      <span
        aria-hidden="true"
        className="absolute left-3 top-3 h-3 w-3 rounded-full border-2 border-accent bg-background sm:left-5"
      />
      <article className="rounded-2xl border border-border bg-background p-6 transition hover:border-accent/50">
        <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg border border-border bg-surface">
              <Image
                src={item.logo}
                alt={item.logoAlt}
                fill
                sizes="48px"
                className="object-contain p-1"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold leading-tight">
                {item.role}
              </h3>
              <p className="text-sm text-muted-foreground">{item.company}</p>
            </div>
          </div>
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground sm:text-right">
            {item.period}
          </p>
        </header>
        <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
          {item.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-2">
              <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </article>
    </li>
  );
}
