import { site } from "@/lib/content";

const links = [
  { label: "LinkedIn", href: site.links.linkedin },
  { label: "GitHub", href: site.links.github },
];

export function Contact() {
  return (
    <section className="site-shell pb-16 pt-14 sm:pb-20 sm:pt-16" aria-labelledby="contact-title">
      <p className="eyebrow">Contact</p>
      <div className="mt-5 grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,.8fr)] lg:gap-20">
        <div>
          <h1 id="contact-title" className="display-title">Good work starts<br className="hidden sm:block" /> with a conversation.</h1>
          <p className="mt-6 max-w-lg text-lg leading-8 text-muted-foreground">
            Cloud platforms, engineering challenges, a talk or a mentoring
            conversation. I&rsquo;m always happy to compare notes.
          </p>
          <p className="mt-6 max-w-lg text-sm leading-7 text-muted-foreground">{site.availability}</p>
          <p className="mt-5 text-sm text-muted-foreground">{site.location}</p>
        </div>
        <div className="border-t border-border pt-5 lg:mt-2">
          <h2 className="text-base font-medium">Email</h2>
          <a href={`mailto:${site.email}`} className="mt-2 inline-block break-all text-lg text-accent underline underline-offset-4 hover:decoration-2">
            {site.email}
          </a>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-border pt-5 text-sm">
            {links.map(({ label, href }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-4 hover:decoration-2">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
