import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { pillars } from "@/lib/content";

export function Pillars() {
  return (
    <section className="border-y border-border bg-surface/50">
      <div className="site-shell section-space grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-20">
        <div><p className="eyebrow">04 / In practice</p><h2 className="section-title mt-4">Good systems.<br />Better foundations.</h2></div>
        <div>{pillars.map((pillar, index) => <Link key={pillar.title} href={pillar.href} className="group grid grid-cols-[25px_1fr_20px] gap-4 border-b border-border py-6 first:pt-0 last:border-0 last:pb-0"><span className="pt-1 font-mono text-[10px] text-muted-foreground">0{index + 1}</span><div><h3 className="text-lg font-medium tracking-tight group-hover:text-accent">{pillar.title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{pillar.body}</p></div><ArrowUpRight size={17} className="mt-1 text-accent" aria-hidden="true" /></Link>)}</div>
      </div>
    </section>
  );
}
