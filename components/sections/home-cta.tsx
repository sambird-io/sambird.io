import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/lib/content";

export function HomeCta() {
  return (
    <section className="site-shell section-space grid items-center gap-8 sm:grid-cols-[1fr_auto]">
      <div><p className="eyebrow">A conversation is a good place to start</p><h2 className="section-title mt-4">Working on something interesting?</h2><p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">{site.availability}</p></div>
      <Link href="/contact" className="button-primary justify-self-start">Let&rsquo;s talk <ArrowUpRight size={17} aria-hidden="true" /></Link>
    </section>
  );
}
