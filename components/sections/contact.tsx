import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { site } from "@/lib/content";

const links = [
  {
    label: "Email",
    href: `mailto:${site.email}`,
    icon: Mail,
    handle: site.email,
  },
  {
    label: "LinkedIn",
    href: site.links.linkedin,
    icon: LinkedinIcon,
    handle: "in/sambird-io",
  },
  {
    label: "GitHub",
    href: site.links.github,
    icon: GithubIcon,
    handle: "sambird-io",
  },
];

export function Contact() {
  return (
    <section className="px-6 pt-32 pb-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-accent">
          Contact
        </p>
        <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
          Get in touch
        </h1>
        <p className="mt-4 text-balance text-base text-muted-foreground sm:text-lg">
          Always happy to talk cloud, platform and data engineering — or to
          mentor. The fastest way to reach me is email.
        </p>
        <p className="mx-auto mt-3 max-w-xl text-balance text-sm text-muted-foreground">
          {site.availability}
        </p>
        <ul className="mt-10 grid gap-4 sm:grid-cols-3">
          {links.map(({ label, href, icon: Icon, handle }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel={
                  href.startsWith("mailto:") ? undefined : "noopener noreferrer"
                }
                className="group flex flex-col items-center gap-2 rounded-xl border border-border bg-surface/50 px-4 py-6 transition hover:border-accent/60 hover:bg-surface"
              >
                <Icon
                  className="h-6 w-6 text-muted-foreground transition group-hover:text-accent"
                  aria-hidden="true"
                />
                <span className="text-sm font-medium">{label}</span>
                <span className="text-xs text-muted-foreground">{handle}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
