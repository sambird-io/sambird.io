import Image from "next/image";
import { experience } from "@/lib/content";

// Logos are framed on a surface chip so they stay legible in both light and
// dark themes (some brand PNGs are dark).
export function Logos() {
  return (
    <section className="px-6 pb-12">
      <div className="mx-auto max-w-5xl">
        <p className="text-center text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Worked with
        </p>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-3">
          {experience.map((item) => (
            <li
              key={item.company}
              className="flex h-12 w-32 items-center justify-center rounded-xl border border-border bg-surface px-4"
            >
              <div className="relative h-6 w-full">
                <Image
                  src={item.logo}
                  alt={item.logoAlt}
                  fill
                  sizes="128px"
                  className="object-contain"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
