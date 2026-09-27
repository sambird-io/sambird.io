import { ArrowRight } from "lucide-react";
import { SiteLink as Link } from "@/components/site-link";
import { site } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-10 pt-16 sm:pb-14 sm:pt-28">
      <div
        aria-hidden="true"
        className="home-hero-glow pointer-events-none absolute inset-x-0 top-0 -z-10 h-[36rem]"
      />
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <p className="rounded-full border border-border bg-surface/60 px-3 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground backdrop-blur">
          {site.role} <span aria-hidden="true">·</span> {site.company}
        </p>
        <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight sm:mt-6 sm:text-6xl">
          Hi, I&rsquo;m {site.name.split(" ")[0]}.
        </h1>
        <p className="mt-5 max-w-2xl text-balance text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg">
          {site.heroSummary}
        </p>
        <div className="mt-7 sm:mt-9">
          <Link
            href="#selected-impact"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-foreground px-6 text-sm font-medium text-background transition hover:opacity-90"
          >
            See selected impact
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
