import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected projects and case studies in cloud, platform, data and AI engineering — Kubernetes, Terraform, RAG and CI/CD.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Things I've built"
        intro="A mix of teaching tools, reference builds and experiments — each one a way to learn a system deeply, or to make a hard one easier for others to understand."
      />
      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
