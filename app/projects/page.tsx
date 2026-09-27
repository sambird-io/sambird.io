import { PageHeader } from "@/components/page-header";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/projects";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Projects",
  description:
    "Selected projects and case studies in cloud, platform, data and AI engineering: Kubernetes, Terraform, RAG and CI/CD.",
  path: "/projects",
});

export default function ProjectsPage() {
  const professional = projects.filter((project) => project.category === "professional");
  const independent = projects.filter((project) => project.category === "independent");

  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Selected work"
        intro="A measured outcome from professional platform work, followed by independent projects that make complex systems easier to understand and use."
      />
      <section className="site-shell pb-12" aria-labelledby="professional-work-title">
        <h2 id="professional-work-title" className="section-title mb-2">Professional impact</h2>
        <p className="mb-6 max-w-2xl text-sm leading-6 text-muted-foreground">
          Production engineering work, described at a level cleared for publication.
        </p>
        <div>
          {professional.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
      <section className="site-shell pb-20" aria-labelledby="independent-work-title">
        <h2 id="independent-work-title" className="section-title mb-2">Independent builds</h2>
        <p className="mb-6 max-w-2xl text-sm leading-6 text-muted-foreground">
          Solo projects and reference builds with public source code.
        </p>
        <div>
          {independent.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
