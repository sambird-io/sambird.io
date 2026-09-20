import { experience } from "@/lib/content";
import { TimelineItem } from "@/components/timeline-item";

export function Experience() {
  return (
    <section id="experience" className="section-space border-t border-border" aria-labelledby="experience-title">
      <div className="site-shell">
        <div className="grid gap-5 md:grid-cols-[220px_minmax(0,1fr)] md:gap-12">
          <p className="eyebrow">01 / Experience</p>
          <div>
            <h2 id="experience-title" className="text-3xl font-semibold tracking-tight sm:text-4xl">Built through experience.</h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground">
              The places I&rsquo;ve built platforms, automated delivery, and
              learned what reliable engineering looks like in practice.
            </p>
          </div>
        </div>
        <ol className="mt-12 border-t border-border">
          {experience.map((item) => (
            <TimelineItem key={`${item.company}-${item.role}-${item.period}`} item={item} />
          ))}
        </ol>
      </div>
    </section>
  );
}
