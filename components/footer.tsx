import { site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 px-6 text-sm text-muted-foreground sm:flex-row sm:justify-between">
        <p>
          &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
        <p>
          Built with{" "}
          <a
            href="https://nextjs.org"
            className="underline-offset-4 hover:underline"
            rel="noreferrer noopener"
            target="_blank"
          >
            Next.js
          </a>
          , deployed on{" "}
          <a
            href="https://fly.io"
            className="underline-offset-4 hover:underline"
            rel="noreferrer noopener"
            target="_blank"
          >
            Fly.io
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
