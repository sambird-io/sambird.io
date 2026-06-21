import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { site } from "@/lib/content";

export function HomeCta() {
  return (
    <section className="px-6 pb-24 pt-4">
      <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-surface/50 px-8 py-12 text-center">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Let&rsquo;s talk
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-balance text-muted-foreground">
          {site.availability}
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            href="/contact"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-foreground px-6 text-sm font-medium text-background transition hover:opacity-90"
          >
            Get in touch
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
