import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { PostCard } from "@/components/post-card";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Writing on cloud, platform and data engineering: Kubernetes, Terraform, RAG, CI/CD and the lessons in between.",
  alternates: { canonical: "/writing" },
};

export default function WritingPage() {
  const posts = getAllPosts();
  return (
    <>
      <PageHeader
        eyebrow="Writing"
        title="Notes from the workbench."
        intro="Long-form writing on cloud, platform and data engineering: how the systems work, why they break, and what I've learned shipping them."
      />
      <section className="site-shell pb-24">
        <div className="border-b border-border">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} headingLevel={2} />
          ))}
        </div>
      </section>
    </>
  );
}
