import Image from "next/image";
import { experience } from "@/lib/content";

export function Logos() {
  return (
    <div className="site-shell pb-14">
      <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-10">
        <p className="shrink-0 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Along the way</p>
        <ul className="flex w-full flex-wrap items-center justify-between gap-6">
          {experience.map((item) => <li key={item.company} className="relative h-8 w-24 rounded-sm bg-[#f7f7f0] p-1"><Image src={item.logo} alt={item.logoAlt} fill sizes="96px" className="object-contain px-2 py-1 opacity-75 grayscale" /></li>)}
        </ul>
      </div>
    </div>
  );
}
