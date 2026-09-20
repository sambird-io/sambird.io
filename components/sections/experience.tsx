import { experience } from "@/lib/content";
import { TimelineItem } from "@/components/timeline-item";

export function Experience() {
  return (
    <section id="experience" className="site-shell section-space border-t border-border" aria-labelledby="experience-title">
      <header className="max-w-2xl">
        <p className="eyebrow">Experience</p>
        <h2 id="experience-title" className="section-title mt-4">Built through experience.</h2>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          The places I&rsquo;ve built platforms, automated delivery, and learned what reliable engineering looks like in practice.
        </p>
      </header>
      <ol className="mt-10 border-t border-border">
        {experience.map((item) => (
          <TimelineItem key={`${item.company}-${item.role}-${item.period}`} item={item} />
        ))}
      </ol>
    </section>
  );
}
