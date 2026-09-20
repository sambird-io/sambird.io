import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Download, MapPin } from "lucide-react";
import { site } from "@/lib/content";

export function About() {
  return (
    <section className="site-shell pb-20 pt-32 sm:pb-24 sm:pt-40" aria-labelledby="about-title">
      <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-20">
        <div>
          <p className="eyebrow">About / {site.name}</p>
          <h1 id="about-title" className="display-title mt-6 max-w-3xl">
            Good platforms.<br />
            <span className="text-accent">Clear thinking.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">{site.bio}</p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <Link href="/contact" className="button-primary">
              Get in touch <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            {site.cvUrl && (
              <a href={site.cvUrl} className="button-secondary">
                <Download className="h-4 w-4" aria-hidden="true" /> Download CV
              </a>
            )}
          </div>
        </div>
        <aside className="max-w-sm lg:pt-12" aria-label="At a glance">
          <div className="relative aspect-square overflow-hidden rounded-lg border border-border bg-surface">
            <Image
              src="/img/avatar.jpg"
              alt={site.name}
              fill
              sizes="(min-width: 1024px) 300px, (min-width: 432px) 384px, calc(100vw - 48px)"
              className="object-cover"
              preload
            />
          </div>
          <p className="mt-5 text-sm font-semibold">{site.role}</p>
          <p className="mt-1 text-sm text-muted-foreground">{site.company}</p>
          <p className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
            <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" /> {site.location}
          </p>
          <p className="mt-5 border-t border-border pt-5 text-sm leading-6 text-muted-foreground">{site.availability}</p>
        </aside>
      </div>
    </section>
  );
}
