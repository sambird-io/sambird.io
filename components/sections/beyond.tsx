import Link from "next/link";
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
        <p className="eyebrow">Beyond the day job</p>
        <h2 id="beyond-title" className="section-title mt-4">Learning is better shared.</h2>
        <div className="mt-8 grid gap-0 md:grid-cols-3 md:gap-8">
          {items.map((item) => (
            <article key={item.title} className="border-t border-border py-5 md:py-6">
              <h3 className="text-base font-medium">
                <Link
                  href={item.href}
                  {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="text-accent underline underline-offset-4 hover:decoration-2"
                >
                  {item.title}
                </Link>
              </h3>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
