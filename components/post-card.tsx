import Link from "next/link";
import type { Post } from "@/lib/posts";
import { formatDate } from "@/lib/posts";

export function PostCard({ post, headingLevel = 3 }: { post: Post; headingLevel?: 2 | 3 }) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  return (
    <Link href={`/writing/${post.slug}`} className="post-row group">
      <p className="text-sm leading-6 text-muted-foreground">
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        <span aria-hidden="true"> · </span>{post.readingMinutes} min read
      </p>
      <div>
        <Heading className="text-base font-medium leading-snug tracking-tight transition-colors sm:text-lg">
          {post.title}
        </Heading>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">{post.summary}</p>
      </div>
    </Link>
  );
}
