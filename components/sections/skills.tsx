import { skills } from "@/lib/content";

export function Skills() {
  return (
    <section id="skills" className="section-space bg-surface" aria-labelledby="skills-title">
      <div className="site-shell grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] lg:gap-20">
        <div>
          <p className="eyebrow">02 / The toolkit</p>
          <h2 id="skills-title" className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
            Tools for the<br className="hidden lg:block" /> work at hand.
          </h2>
          <p className="mt-5 max-w-sm text-base leading-7 text-muted-foreground">
            The cloud, delivery and observability tools I work with, alongside
            the systems I&rsquo;m learning by building.
          </p>
        </div>
        <div className="border-t border-border">
          {skills.map((group) => (
            <div key={group.title} className="border-b border-border py-5">
              <h3 className="text-sm font-semibold">{group.title}</h3>
              <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm leading-6 text-muted-foreground">
                {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
