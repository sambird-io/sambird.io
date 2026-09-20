import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/lib/content";

const items = [
  {
    title: "Mentoring",
    body: "I mentor engineers one-to-one and across teams. It's the part of the job I enjoy most.",
    href: "/contact",
    external: false,
  },
  {
    title: "Learning in public",
    body: "I learn by building: small repos for Go, algorithms and AI tooling, kept open so others can follow along.",
    href: site.links.github,
    external: true,
  },
  {
    title: "Writing & talks",
    body: "I write up what I learn and build demos to explain complex systems, like my live Kubernetes control-plane talk.",
    href: "/speaking",
    external: false,
  },
];

export function Beyond() {
  return (
    <section className="section-space" aria-labelledby="beyond-title">
      <div className="site-shell">
        <p className="eyebrow">04 / Beyond the day job</p>
        <h2 id="beyond-title" className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">Learning is better shared.</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3 md:gap-10">
          {items.map((item) => (
            <article key={item.title} className="border-t border-border pt-6">
              <h3>
                <Link
                  href={item.href}
                  {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="text-link min-h-11 text-lg font-semibold"
                >
                  {item.title} <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
