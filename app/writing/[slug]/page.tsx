import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getAllPosts, getPost, formatDate } from "@/lib/posts";
import { site } from "@/lib/content";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.summary,
    alternates: { canonical: `/writing/${post.slug}` },
    openGraph: {
      title: `${post.title} — ${site.name}`,
      description: post.summary,
      url: `${site.url}/writing/${post.slug}`,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const { default: Body } = await import(`@/content/writing/${slug}.mdx`);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.summary,
    datePublished: post.date,
    dateModified: post.date,
    url: `${site.url}/writing/${post.slug}`,
    mainEntityOfPage: `${site.url}/writing/${post.slug}`,
    author: { "@type": "Person", name: site.name, url: site.url },
    keywords: post.tags.join(", "),
  };

  return (
    <article className="px-6 pt-32 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <div className="mx-auto max-w-3xl">
        <Link
          href="/writing"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground transition hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          All writing
        </Link>

        <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span aria-hidden="true">&middot;</span>
          <span>{post.readingMinutes} min read</span>
        </div>
        <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
          {post.title}
        </h1>
        <ul className="mt-5 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted-foreground"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="article mt-10">
          <Body />
        </div>

        <div className="mt-14 border-t border-border pt-8">
          <p className="text-sm text-muted-foreground">
            Thanks for reading. If this was useful, find me on{" "}
            <a
              href={site.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline-offset-4 hover:underline"
            >
              LinkedIn
            </a>{" "}
            or{" "}
            <Link
              href="/contact"
              className="text-accent underline-offset-4 hover:underline"
            >
              get in touch
            </Link>
            .
          </p>
        </div>
      </div>
    </article>
  );
}
