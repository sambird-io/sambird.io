import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="site-shell py-32 sm:py-44">
      <p className="eyebrow">404 / A wrong turn</p>
      <h1 className="display-title mt-6 max-w-3xl">This page couldn&rsquo;t be found.</h1>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">The link may have changed, or the page may have moved. There&rsquo;s still plenty to explore.</p>
      <div className="mt-8 flex flex-wrap gap-5">
        <Link href="/" className="button-primary"><ArrowLeft size={16} aria-hidden="true" />Back home</Link>
        <Link href="/projects" className="text-link">Explore the projects<ArrowUpRight size={16} aria-hidden="true" /></Link>
      </div>
    </div>
  );
}
