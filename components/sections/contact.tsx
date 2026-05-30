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
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Get in touch
        </h2>
        <p className="mt-4 text-balance text-base text-muted-foreground sm:text-lg">
          Always happy to chat about cloud engineering, DevOps, or automation.
          The fastest way to reach me is email.
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
