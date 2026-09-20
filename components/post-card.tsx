import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Post } from "@/lib/posts";
import { formatDate } from "@/lib/posts";

export function PostCard({ post, headingLevel = 3 }: { post: Post; headingLevel?: 2 | 3 }) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  return (
    <Link href={`/writing/${post.slug}`} className="post-row group">
      <div className="flex gap-3 font-mono text-[10px] leading-6 text-muted-foreground sm:block">
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        <p>{post.readingMinutes} min read</p>
      </div>
      <div>
        <p className="eyebrow text-[10px]">{post.tags[0]}</p>
        <Heading className="mt-2 text-xl font-medium leading-snug tracking-tight transition sm:text-2xl">{post.title}</Heading>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">{post.summary}</p>
      </div>
      <ArrowUpRight size={20} className="mt-1 text-accent transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
    </Link>
  );
}
