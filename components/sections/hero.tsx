import { ArrowRight } from "lucide-react";
import { SiteLink as Link } from "@/components/site-link";
import { site } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-16 pt-28 sm:pt-36">
      <div
        aria-hidden="true"
        className="home-hero-glow pointer-events-none absolute inset-x-0 top-0 -z-10 h-[36rem]"
      />
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <p className="rounded-full border border-border bg-surface/60 px-3 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground backdrop-blur">
          {site.role} <span aria-hidden="true">·</span> {site.company}
        </p>
        <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
          Hi, I&rsquo;m {site.name.split(" ")[0]}.
        </h1>
        <p className="mt-6 max-w-2xl text-balance text-base leading-relaxed text-muted-foreground sm:text-lg">
          I design and lead{" "}
          <span className="font-medium text-foreground">
            cloud, data and platform engineering
          </span>{" "}
          — turning manual, fragile systems into reliable platforms teams can
          build on. Today I lead cloud engineering on a financial-crime
          intelligence data platform at {site.company}.
        </p>
        <p className="mt-4 max-w-2xl text-balance text-sm leading-relaxed text-muted-foreground">
          AWS and Google Cloud certified. Deep in Kubernetes, Terraform and
          Python, and increasingly curious about the data and AI tooling built
          on top.
        </p>
        <nav aria-label="Explore Sam's work" className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/projects"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-foreground px-6 text-sm font-medium text-background transition hover:opacity-90"
          >
            View my work
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            href="/writing"
            className="inline-flex h-11 items-center justify-center rounded-full border border-border bg-background px-6 text-sm font-medium transition hover:border-accent/60"
          >
            Read the writing
          </Link>
          <Link
            href="/contact"
            className="inline-flex h-11 items-center justify-center rounded-full border border-border bg-background px-6 text-sm font-medium transition hover:border-accent/60"
          >
            Get in touch
          </Link>
        </nav>
      </div>
    </section>
  );
}
