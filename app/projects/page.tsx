import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected projects and case studies in cloud, platform, data and AI engineering: Kubernetes, Terraform, RAG and CI/CD.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Things I've built"
        intro="A mix of teaching tools, reference builds and experiments, each one a way to learn a system deeply, or to make a hard one easier for others to understand."
      />
      <section className="site-shell pb-20">
        <div>
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} headingLevel={2} />
          ))}
        </div>
      </section>
    </>
  );
}
