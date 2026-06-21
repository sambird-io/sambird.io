import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { site } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-16 pt-32 sm:pt-40">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[36rem] bg-[radial-gradient(60%_60%_at_50%_0%,oklch(0.92_0.05_240/_0.7)_0%,transparent_70%)] dark:bg-[radial-gradient(60%_60%_at_50%_0%,oklch(0.35_0.10_240/_0.5)_0%,transparent_70%)]"
      />
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <p className="rounded-full border border-border bg-surface/60 px-3 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground backdrop-blur">
          {site.role} &middot; {site.company}
        </p>
        <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
          Hi, I&rsquo;m {site.name.split(" ")[0]}.
        </h1>
        <p className="mt-6 max-w-2xl text-balance text-base leading-relaxed text-muted-foreground sm:text-lg">
          I design and lead{" "}
          <span className="font-medium text-foreground">
            cloud, data and platform engineering
          </span>{" "}
          — turning manual, fragile systems into automated platforms teams can
          trust. Right now I lead cloud engineering on a financial-crime
          intelligence data platform at {site.company}.
        </p>
        <p className="mt-4 max-w-2xl text-balance text-sm text-muted-foreground">
          AWS &amp; Google Cloud certified. Deep in Kubernetes, Terraform and
          Python — and increasingly in the data and AI tooling built on top.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/projects"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-foreground px-6 text-sm font-medium text-background transition hover:opacity-90"
          >
            View my work
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            href="/writing"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-border bg-background px-6 text-sm font-medium transition hover:border-accent/60"
          >
            Read the writing
          </Link>
          <Link
            href="/contact"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-border bg-background px-6 text-sm font-medium transition hover:border-accent/60"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  );
}
