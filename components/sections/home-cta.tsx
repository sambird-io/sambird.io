import Link from "next/link";
import { site } from "@/lib/content";

export function HomeCta() {
  return (
    <section className="site-shell section-space !pt-0" aria-label="Contact">
      <p className="max-w-2xl border-t border-border pt-6 text-sm leading-7 text-muted-foreground">
        {site.availability}{" "}
        <Link href="/contact" className="text-link inline">Get in touch</Link>
      </p>
    </section>
  );
}
