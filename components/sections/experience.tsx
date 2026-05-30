import { experience } from "@/lib/content";
import { TimelineItem } from "@/components/timeline-item";

export function Experience() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Experience
          </h2>
          <p className="mt-4 text-balance text-base text-muted-foreground sm:text-lg">
            A short tour through the places I&rsquo;ve built platforms,
            automated delivery, and learned the most.
          </p>
        </div>
        <ol className="relative mt-12 space-y-8 before:absolute before:left-4 before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-border sm:before:left-6">
          {experience.map((item) => (
            <TimelineItem
              key={`${item.company}-${item.role}-${item.period}`}
              item={item}
            />
          ))}
        </ol>
      </div>
    </section>
  );
}
