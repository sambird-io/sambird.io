import Image from "next/image";
import type { Experience } from "@/lib/content";

export function TimelineItem({ item }: { item: Experience }) {
  return (
    <li className="grid gap-5 border-b border-border py-9 md:grid-cols-[220px_minmax(0,1fr)] md:gap-12">
      <p className="font-mono text-xs leading-6 text-muted-foreground">{item.period}</p>
      <article>
        <header className="flex items-start justify-between gap-5">
          <div>
            <h3 className="text-xl font-semibold leading-snug tracking-tight sm:text-2xl">{item.role}</h3>
            <p className="mt-2 text-sm font-medium text-accent">{item.company}</p>
          </div>
          <div className="relative h-12 w-16 shrink-0 overflow-hidden rounded-md border border-border bg-white">
            <Image src={item.logo} alt={item.logoAlt} fill sizes="64px" className="object-contain p-2" />
          </div>
        </header>
        <ul className="mt-6 space-y-3 text-sm leading-7 text-muted-foreground sm:text-base">
          {item.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-3">
              <span aria-hidden="true" className="mt-3 h-1 w-1 shrink-0 rounded-full bg-accent" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </article>
    </li>
  );
}
