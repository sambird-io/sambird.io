import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getAllPosts } from "@/lib/posts";
import { PostCard } from "@/components/post-card";

export function LatestWriting() {
  const posts = getAllPosts().slice(0, 3);
  if (!posts.length) return null;
  return (
    <section className="site-shell section-space !pt-0">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
        <div><p className="eyebrow">03 / Field notes</p><h2 className="section-title mt-4">Learn it. Build it. Write it down.</h2></div>
        <Link href="/writing" className="text-link">All writing <ArrowUpRight size={16} aria-hidden="true" /></Link>
      </div>
      <div className="border-b border-border">{posts.map((post) => <PostCard key={post.slug} post={post} />)}</div>
    </section>
  );
}
