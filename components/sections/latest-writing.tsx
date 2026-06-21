import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllPosts } from "@/lib/posts";
import { PostCard } from "@/components/post-card";

export function LatestWriting() {
  const posts = getAllPosts().slice(0, 3);
  if (posts.length === 0) return null;

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Writing
            </h2>
            <p className="mt-3 max-w-xl text-base text-muted-foreground">
              Notes on cloud, platform and data engineering — and the occasional
              lesson learned the hard way.
            </p>
          </div>
          <Link
            href="/writing"
            className="hidden shrink-0 items-center gap-1 text-sm font-medium text-muted-foreground transition hover:text-foreground sm:inline-flex"
          >
            All posts
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
        <div className="mt-8 sm:hidden">
          <Link
            href="/writing"
            className="inline-flex items-center gap-1 text-sm font-medium"
          >
            All posts
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
