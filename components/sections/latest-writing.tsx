import { SiteLink as Link } from "@/components/site-link";
import { getAllPosts } from "@/lib/posts";
import { PostCard } from "@/components/post-card";

export function LatestWriting() {
  const posts = getAllPosts().slice(0, 3);
  if (!posts.length) return null;
  return (
    <section className="site-shell section-space !pt-0" aria-labelledby="recent-writing-title">
      <div className="mb-5 flex flex-wrap items-baseline justify-between gap-4">
        <h2 id="recent-writing-title" className="section-title">Recent writing</h2>
        <Link href="/writing" className="text-link">All writing</Link>
      </div>
      <div>{posts.map((post) => <PostCard key={post.slug} post={post} />)}</div>
    </section>
  );
}
