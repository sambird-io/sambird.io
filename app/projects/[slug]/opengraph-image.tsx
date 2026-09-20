import { ImageResponse } from "next/og";
import { SocialImage } from "@/components/social-image";
import { getProject, projects } from "@/lib/projects";
import { site } from "@/lib/content";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "A project by Sam Bird";
export function generateStaticParams() { return projects.map((p) => ({ slug: p.slug })); }
export default async function ProjectOGImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  return new ImageResponse(<SocialImage title={project?.title ?? site.name} category="Project" subtitle={project?.tagline} />, size);
}
