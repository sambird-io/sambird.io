import Image from "next/image";
import { site } from "@/lib/content";

export function About() {
  return (
    <section id="about" className="bg-surface/40 px-6 py-24">
      <div className="mx-auto grid max-w-5xl gap-12 sm:grid-cols-[auto_1fr] sm:items-center">
        <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-full border border-border shadow-sm sm:h-48 sm:w-48">
          <Image
            src="/img/avatar.jpg"
            alt={site.name}
            fill
            sizes="(min-width: 640px) 12rem, 10rem"
            className="object-cover"
            priority
          />
        </div>
        <div className="text-center sm:text-left">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            About
          </h2>
          <p className="mt-6 text-balance text-base leading-relaxed text-muted-foreground sm:text-lg">
            {site.bio}
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Currently based in {site.location}.
          </p>
        </div>
      </div>
    </section>
  );
}
