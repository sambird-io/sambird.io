import Image from "next/image";
import { Download } from "lucide-react";
import { site } from "@/lib/content";

export function About() {
  return (
    <section className="px-6 pt-32 pb-16">
      <div className="mx-auto grid max-w-5xl gap-10 sm:grid-cols-[auto_1fr] sm:items-start">
        <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-2xl border border-border shadow-sm sm:h-40 sm:w-40">
          <Image
            src="/img/avatar.jpg"
            alt={site.name}
            fill
            sizes="(min-width: 640px) 10rem, 8rem"
            className="object-cover"
            priority
          />
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            About
          </p>
          <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            I build platforms teams can trust.
          </h1>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            {site.bio}
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Currently based in {site.location}.
          </p>
          {site.cvUrl && (
            <div className="mt-6">
              <a
                href={site.cvUrl}
                className="inline-flex h-10 items-center gap-2 rounded-full border border-border px-5 text-sm font-medium transition hover:border-accent/60"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Download CV
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
