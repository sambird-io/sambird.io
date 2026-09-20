import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { site } from "@/lib/content";

export function Hero() {
  return (
    <section className="site-shell pb-14 pt-32 sm:pb-20 sm:pt-44">
      <div className="grid items-start gap-12 md:grid-cols-[1fr_240px] lg:grid-cols-[1fr_272px] lg:gap-20">
        <div>
          <p className="eyebrow flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            Cloud &amp; platform engineering
          </p>
          <h1 className="hero-title mt-7">
            {site.headline.split(" Simply.")[0]} <em>Simply.</em>
          </h1>
          <p className="mt-7 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
            {site.introduction}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3">
            <Link href="/projects" className="button-primary">
              Explore my work <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
            <Link href="/writing" className="text-link">
              Read the field notes <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-[100px_1fr] items-center gap-5 md:block md:pt-3">
          <div className="hero-portrait">
            <Image src="/img/avatar.jpg" alt={site.name} fill sizes="(min-width: 1024px) 272px, (min-width: 768px) 240px, 100px" className="object-cover" preload />
          </div>
          <div className="md:mt-5">
            <p className="text-sm font-medium">{site.name}</p>
            <p className="mt-1 text-xs leading-5 text-muted-foreground">{site.role}<br />{site.company}</p>
            <p className="mt-3 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{site.location}</p>
          </div>
        </div>
      </div>
      <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-5 sm:mt-20">
        <p className="font-mono text-[11px] leading-5 text-muted-foreground"><span className="text-accent">Currently /</span> {site.currently}</p>
        <a href="#selected-work" className="text-link text-muted-foreground">A few things I&rsquo;ve built <ArrowDown size={14} aria-hidden="true" /></a>
      </div>
    </section>
  );
}
