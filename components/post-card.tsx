import Link from "next/link";
import type { Post } from "@/lib/posts";
import { formatDate } from "@/lib/posts";

export function PostCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/writing/${post.slug}`}
      className="group block rounded-2xl border border-border bg-background p-6 transition hover:border-accent/50"
    >
      <div className="flex items-center gap-3 text-xs text-muted-foreground">
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        <span aria-hidden="true">&middot;</span>
        <span>{post.readingMinutes} min read</span>
      </div>
      <h3 className="mt-3 text-lg font-semibold leading-snug transition group-hover:text-accent">
        {post.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {post.summary}
      </p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-border bg-surface px-2.5 py-0.5 text-xs text-muted-foreground"
          >
            {tag}
          </li>
        ))}
      </ul>
    </Link>
  );
}
