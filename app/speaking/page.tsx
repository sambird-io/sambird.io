import type { Metadata } from "next";
import Link from "next/link";
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
        eyebrow="Speaking"
        title="Making complex systems click."
        intro="The best explanation gives you something to point at. I use live demos, real engineering problems and practical examples to make systems easier to understand."
      />
      <section className="site-shell pb-20" aria-label="Selected talks and sessions">
        <ol className="border-t border-border">
          {talks.map((talk) => (
            <li key={talk.title} className="grid gap-3 border-b border-border py-7 sm:grid-cols-[160px_minmax(0,1fr)] sm:gap-8 sm:py-8">
              <p className="text-sm leading-6 text-muted-foreground">{talk.period}</p>
              <article>
                <p className="text-sm text-muted-foreground">{talk.context}</p>
                <h2 className="mt-2 text-xl font-medium tracking-tight sm:text-2xl">{talk.title}</h2>
                <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">{talk.body}</p>
                {talk.href && (
                  <Link href={talk.href} className="mt-4 inline-flex min-h-11 items-center text-sm text-accent underline underline-offset-4 hover:decoration-2">
                    {talk.linkLabel}
                  </Link>
                )}
              </article>
            </li>
          ))}
        </ol>
      </section>
      <section className="site-shell border-t border-border py-8" aria-labelledby="speaking-contact-title">
        <h2 id="speaking-contact-title" className="text-sm font-medium">Talks, workshops, internal sessions or one-to-one mentoring.</h2>
        <Link href="/contact" className="mt-2 inline-flex min-h-11 items-center text-sm text-accent underline underline-offset-4 hover:decoration-2">
          Start a conversation
        </Link>
      </section>
    </>
  );
}
