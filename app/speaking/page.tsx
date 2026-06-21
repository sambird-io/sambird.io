import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Speaking",
  description:
    "Talks and teaching by Sam Bird — explaining Kubernetes internals, CI/CD and platform engineering, including a live control-plane demo.",
  alternates: { canonical: "/speaking" },
};

const talks: {
  title: string;
  context: string;
  body: string;
  href?: string;
}[] = [
  {
    title: "Inside the Kubernetes Cluster",
    context: "Interactive talk · live demo",
    body: "A walk through the Kubernetes control plane using a real-time dashboard I built. Apply a manifest and the room watches the scheduler and controllers react live — turning an invisible system into something you can point at.",
    href: "/projects/inside-the-kubernetes-cluster",
  },
  {
    title: "Embedding CI/CD best practice",
    context: "Internal series · Publicis Sapient · 6+ months",
    body: "A bi-weekly tech-talk series I ran to embed CI/CD best practice across delivery teams — pipelines, testing, and the habits that make releases boring in the best way.",
  },
];

export default function SpeakingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Speaking"
        title="Explaining systems clearly"
        intro="I like making complex systems understandable — in talks, internal sessions and one-to-one mentoring. A few of the things I've spoken about."
      />
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-3xl space-y-6">
          {talks.map((talk) => {
            const inner = (
              <>
                <p className="text-xs font-medium uppercase tracking-wider text-accent">
                  {talk.context}
                </p>
                <div className="mt-2 flex items-start justify-between gap-3">
                  <h2 className="text-xl font-semibold tracking-tight">
                    {talk.title}
                  </h2>
                  {talk.href && (
                    <ArrowUpRight
                      className="h-5 w-5 shrink-0 text-muted-foreground transition group-hover:text-accent"
                      aria-hidden="true"
                    />
                  )}
                </div>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {talk.body}
                </p>
              </>
            );
            const className =
              "block rounded-2xl border border-border bg-background p-6 transition hover:border-accent/50";
            return talk.href ? (
              <Link
                key={talk.title}
                href={talk.href}
                className={`group ${className}`}
              >
                {inner}
              </Link>
            ) : (
              <div key={talk.title} className={className}>
                {inner}
              </div>
            );
          })}
        </div>
      </section>
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-surface/50 px-8 py-10 text-center">
          <p className="text-balance text-muted-foreground">
            Want me to speak, run a workshop, or mentor someone on your team?{" "}
            <Link
              href="/contact"
              className="text-accent underline-offset-4 hover:underline"
            >
              Get in touch
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
