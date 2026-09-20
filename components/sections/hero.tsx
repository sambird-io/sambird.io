import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/content";

export function Hero() {
  return (
    <section className="site-shell home-intro">
      <Image
        src="/img/avatar.jpg"
        alt="Portrait of Sam Bird"
        width={112}
        height={112}
        sizes="112px"
        className="home-portrait"
        priority
      />
      <div>
        <p className="eyebrow">{site.role} at {site.company} · {site.location}</p>
        <h1 className="mt-6">{site.headline}</h1>
        <p className="mt-6 max-w-[640px] text-lg leading-8 text-muted-foreground">
          {site.introduction}
        </p>
        <nav aria-label="Explore Sam's work" className="mt-7 flex flex-wrap gap-x-6 gap-y-2">
          <Link href="/projects" className="text-link">Selected projects</Link>
          <Link href="/writing" className="text-link">Writing</Link>
          <Link href="/about" className="text-link">About me</Link>
        </nav>
        <p className="home-intro-meta mt-10 max-w-[640px] text-sm leading-6 text-muted-foreground">
          <span className="text-foreground">Currently:</span> {site.currently}
        </p>
      </div>
    </section>
  );
}
