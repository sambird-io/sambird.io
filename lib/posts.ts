// Blog metadata is the source of truth here; each post's body lives in an MDX
// file at content/writing/<slug>.mdx, rendered by app/writing/[slug]/page.tsx.
// Keep slugs in sync with the MDX filenames.

export type Post = {
  slug: string;
  title: string;
  summary: string;
  // ISO date (YYYY-MM-DD).
  date: string;
  tags: string[];
  readingMinutes: number;
  draft?: boolean;
};

export const posts: Post[] = [
  {
    slug: "what-happens-when-you-kubectl-apply",
    title: "What actually happens when you kubectl apply",
    summary:
      "A walk through the Kubernetes control plane — API server, etcd, scheduler and controllers — and the project I built to watch it happen live.",
    date: "2026-05-20",
    tags: ["Kubernetes", "Platform Engineering"],
    readingMinutes: 4,
  },
  {
    slug: "rag-from-scratch-evals",
    title: "Why I built a RAG system with no frameworks",
    summary:
      "Frameworks hide the parts of retrieval-augmented generation you most need to understand. Here's what I learned building one by hand — and why evaluation comes first.",
    date: "2026-06-02",
    tags: ["AI", "Data Engineering", "RAG"],
    readingMinutes: 4,
  },
  {
    slug: "terraform-pipeline-4h-to-2h",
    title: "Cutting a Terraform pipeline from four hours to two",
    summary:
      "A debugging story about provisioning bottlenecks, and a way of thinking about pipeline performance that generalises well beyond Terraform.",
    date: "2026-06-15",
    tags: ["Terraform", "Platform Engineering", "CI/CD"],
    readingMinutes: 3,
  },
];

// Published posts, newest first.
export const getAllPosts = () =>
  posts
    .filter((p) => !p.draft)
    .sort((a, b) => (a.date < b.date ? 1 : -1));

export const getPost = (slug: string) =>
  posts.find((p) => p.slug === slug && !p.draft);

// Stable, locale-explicit date formatting (avoids hydration drift).
export const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
