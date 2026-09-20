import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { site } from "@/lib/content";

const links = [
  { label: "LinkedIn", href: site.links.linkedin, icon: LinkedinIcon, description: "Work, ideas and conversations" },
  { label: "GitHub", href: site.links.github, icon: GithubIcon, description: "Projects, experiments and source code" },
];

export function Contact() {
  return (
    <section className="site-shell pb-24 pt-32 sm:pb-32 sm:pt-40" aria-labelledby="contact-title">
      <p className="eyebrow">Contact / Start a conversation</p>
      <div className="mt-6 grid gap-12 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:gap-20">
        <div>
          <h1 id="contact-title" className="display-title">Good work starts<br className="hidden sm:block" /> with a conversation.</h1>
          <p className="mt-8 max-w-lg text-lg leading-8 text-muted-foreground">
            Cloud platforms, engineering challenges, a talk or a mentoring
            conversation. I&rsquo;m always happy to compare notes.
          </p>
          <p className="mt-6 max-w-lg text-sm leading-7 text-muted-foreground">{site.availability}</p>
          <p className="mt-8 flex items-center gap-2 font-mono text-xs text-muted-foreground">
            <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" /> {site.location}
          </p>
        </div>
        <div className="lg:pt-3">
          <div className="rounded-lg border border-border bg-surface p-6 sm:p-8">
            <Mail className="h-6 w-6 text-accent" aria-hidden="true" />
            <h2 className="mt-6 text-2xl font-semibold tracking-tight">Drop me a line.</h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">Email is the easiest way to reach me.</p>
            <a href={`mailto:${site.email}`} className="mt-5 flex min-h-11 items-center justify-between gap-3 text-base font-medium text-accent underline decoration-accent/40 underline-offset-4 transition hover:decoration-accent sm:text-lg">
              <span className="break-all">{site.email}</span>
              <ArrowUpRight className="h-5 w-5 shrink-0" aria-hidden="true" />
            </a>
          </div>
          <ul className="mt-8 divide-y divide-border border-y border-border">
            {links.map(({ label, href, icon: Icon, description }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 py-6 transition hover:text-accent">
                  <Icon className="h-5 w-5 shrink-0" aria-hidden="true" />
                  <div>
                    <span className="text-sm font-semibold">{label}</span>
                    <p className="mt-1 text-xs leading-6 text-muted-foreground">{description}</p>
                  </div>
                  <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
