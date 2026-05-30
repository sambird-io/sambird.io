import { skills } from "@/lib/content";

export function Skills() {
  return (
    <section id="skills" className="bg-surface/40 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Skills
          </h2>
          <p className="mt-4 text-balance text-base text-muted-foreground sm:text-lg">
            Where I spend my time, both in the org chart and at the keyboard.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {skills.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-border bg-background p-6"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                {group.title}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-border bg-surface px-3 py-1 text-sm"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
