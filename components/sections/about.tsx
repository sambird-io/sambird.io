import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/content";

export function About() {
  return (
    <section className="site-shell pb-16 pt-14 sm:pb-20 sm:pt-16" aria-labelledby="about-title">
      <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-20">
        <div>
          <p className="eyebrow">About</p>
          <h1 id="about-title" className="display-title mt-6 max-w-3xl">
            Good platforms.<br />
            Clear thinking.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">{site.bio}</p>
          <p className="mt-5 text-sm text-muted-foreground">
            {site.role} at {site.company} <span aria-hidden="true">·</span> {site.location}
          </p>
          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm">
            <Link href="/contact" className="text-accent underline underline-offset-4 hover:decoration-2">
              Get in touch
            </Link>
            {site.cvUrl && (
              <a href={site.cvUrl} className="text-accent underline underline-offset-4 hover:decoration-2">
                Download CV
              </a>
            )}
          </div>
        </div>
        <aside className="max-w-sm lg:pt-2" aria-label="Availability">
          <div className="relative aspect-[4/5] overflow-hidden bg-surface">
            <Image
              src="/img/avatar.jpg"
              alt={site.name}
              fill
              sizes="(min-width: 1024px) 280px, (min-width: 432px) 384px, calc(100vw - 48px)"
              className="object-cover"
              preload
            />
          </div>
          <p className="mt-4 text-sm leading-6 text-muted-foreground">{site.availability}</p>
        </aside>
      </div>
    </section>
  );
}
