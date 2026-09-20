import { ImageResponse } from "next/og";
import { SocialImage } from "@/components/social-image";
import { getAllPosts, getPost } from "@/lib/posts";
import { site } from "@/lib/content";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Field notes by Sam Bird";
export function generateStaticParams() { return getAllPosts().map((post) => ({ slug: post.slug })); }
export default async function PostOGImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  return new ImageResponse(<SocialImage title={post?.title ?? site.name} category="Field notes" subtitle={post ? `${post.tags.join(" / ")} · ${post.readingMinutes} min read` : undefined} />, size);
}
