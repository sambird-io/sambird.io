import Link from "next/link";
import { site } from "@/lib/content";

const items: { title: string; body: string; href: string; external?: boolean }[] =
  [
    {
      title: "Mentoring",
      body: "I mentor engineers one-to-one and across teams — the part of the job I enjoy most.",
      href: "/contact",
    },
    {
      title: "Learning in public",
      body: "I learn by building: small repos for Go, algorithms and AI tooling, kept open so others can follow along.",
      href: site.links.github,
      external: true,
    },
    {
      title: "Writing & talks",
      body: "I write up what I learn and build demos to explain complex systems — like my live Kubernetes control-plane talk.",
      href: "/speaking",
    },
  ];

export function Beyond() {
  return (
    <section className="bg-surface/40 px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Beyond the day job
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((item) => {
            const className =
              "group block rounded-2xl border border-border bg-background p-6 transition hover:border-accent/50";
            const inner = (
              <>
                <h3 className="text-lg font-semibold leading-tight transition group-hover:text-accent">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </>
            );
            return item.external ? (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
              >
                {inner}
              </a>
            ) : (
              <Link key={item.title} href={item.href} className={className}>
                {inner}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
