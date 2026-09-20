import { SiteLink as Link } from "@/components/site-link";
import { getFeaturedProjects } from "@/lib/projects";
import { ProjectCard } from "@/components/project-card";

export function FeaturedWork() {
  const featured = getFeaturedProjects().slice(0, 4);
  return (
    <section className="site-shell section-space" aria-labelledby="selected-projects-title">
      <div className="mb-5 flex flex-wrap items-baseline justify-between gap-4">
        <h2 id="selected-projects-title" className="section-title">Selected projects</h2>
        <Link href="/projects" className="text-link">All projects</Link>
      </div>
      <div>
        {featured.map((project) => <ProjectCard key={project.slug} project={project} />)}
      </div>
    </section>
  );
}
