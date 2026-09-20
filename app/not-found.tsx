import { SiteLink as Link } from "@/components/site-link";

export default function NotFound() {
  return (
    <div className="site-shell py-24 sm:py-32">
      <p className="eyebrow">404 · Not found</p>
      <h1 className="display-title mt-5 max-w-3xl">This page couldn&rsquo;t be found.</h1>
      <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">The link may have changed, or the page may have moved.</p>
      <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
        <Link href="/" className="text-link">Back home</Link>
        <Link href="/projects" className="text-link">Browse projects</Link>
      </div>
    </div>
  );
}
