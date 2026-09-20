import { skills } from "@/lib/content";

export function Skills() {
  return (
    <section id="skills" className="site-shell section-space border-t border-border" aria-labelledby="skills-title">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] lg:gap-16">
        <div>
          <p className="eyebrow">Skills</p>
          <h2 id="skills-title" className="section-title mt-4">Tools for the work at hand.</h2>
          <p className="mt-4 max-w-sm text-base leading-7 text-muted-foreground">
            The cloud, delivery and observability tools I work with, alongside the systems I&rsquo;m learning by building.
          </p>
        </div>
        <div className="border-t border-border">
          {skills.map((group) => (
            <div key={group.title} className="grid gap-2 border-b border-border py-4 sm:grid-cols-[180px_minmax(0,1fr)] sm:gap-6">
              <h3 className="text-sm font-medium">{group.title}</h3>
              <ul className="flex flex-wrap gap-x-4 gap-y-1 text-sm leading-6 text-muted-foreground">
                {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
