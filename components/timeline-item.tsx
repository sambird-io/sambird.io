import type { Experience } from "@/lib/content";

export function TimelineItem({ item }: { item: Experience }) {
  return (
    <li className="grid gap-3 border-b border-border py-7 sm:grid-cols-[160px_minmax(0,1fr)] sm:gap-8 sm:py-8">
      <p className="text-sm leading-6 text-muted-foreground">{item.period}</p>
      <article>
        <h3 className="text-lg font-medium leading-snug tracking-tight sm:text-xl">
          {item.role} <span className="font-normal text-muted-foreground">at {item.company}</span>
        </h3>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-muted-foreground sm:text-base">
          {item.bullets.map((bullet) => (
            <li key={bullet} className="pl-1 marker:text-muted">{bullet}</li>
          ))}
        </ul>
      </article>
    </li>
  );
}
