import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Speaking",
  description:
    "Talks and teaching by Sam Bird, including Google Cloud Summit London, Kubernetes internals, CI/CD and platform engineering.",
  alternates: { canonical: "/speaking" },
};

const talks = [
  {
    title: "Inside the Kubernetes Cluster",
    context: "Interactive talk / Live demo",
    period: "2026",
    body: "A walk through the Kubernetes control plane using a real-time dashboard I built. Apply a manifest and the room watches the scheduler and controllers react live, turning an invisible system into something you can point at.",
    href: "/projects/inside-the-kubernetes-cluster",
    linkLabel: "Explore the teaching demo",
  },
  {
    title: "Google Cloud Summit London",
    context: "Conference speaking",
    period: "2024",
    body: "Presented at Google Cloud Summit London.",
  },
  {
    title: "Embedding CI/CD best practice",
    context: "Internal series / Publicis Sapient",
    period: "6+ months",
    body: "A bi-weekly tech-talk series I ran to embed CI/CD best practice across delivery teams: pipelines, testing, and the habits that make releases boring in the best way.",
  },
];

export default function SpeakingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Speaking / Sharing what I learn"
        title="Making complex systems click."
        intro="The best explanation gives you something to point at. I use live demos, real engineering problems and practical examples to make systems easier to understand."
      />
      <section className="site-shell pb-20" aria-label="Selected talks and sessions">
        <ol className="border-t border-border">
          {talks.map((talk, index) => (
            <li key={talk.title} className="grid gap-5 border-b border-border py-9 md:grid-cols-[180px_minmax(0,1fr)] md:gap-12 md:py-12">
              <div className="flex items-center justify-between gap-4 md:block">
                <p className="eyebrow">{String(index + 1).padStart(2, "0")}</p>
                <p className="font-mono text-xs text-muted-foreground md:mt-5">{talk.period}</p>
              </div>
              <article>
                <p className="eyebrow text-accent">{talk.context}</p>
                <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">{talk.title}</h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground">{talk.body}</p>
                {talk.href && (
                  <Link href={talk.href} className="text-link mt-6 min-h-11 text-sm">
                    {talk.linkLabel} <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                )}
              </article>
            </li>
          ))}
        </ol>
      </section>
      <section className="border-t border-border bg-surface py-16" aria-labelledby="speaking-contact-title">
        <div className="site-shell flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-xl">
            <p className="eyebrow">Bring a question</p>
            <h2 id="speaking-contact-title" className="mt-4 text-3xl font-semibold tracking-tight">Let&rsquo;s work through it together.</h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">For talks, workshops, internal sessions or one-to-one mentoring.</p>
          </div>
          <Link href="/contact" className="button-primary shrink-0">
            Start a conversation <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
