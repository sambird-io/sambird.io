import { SiteLink as Link } from "@/components/site-link";
import { getFeaturedProjects } from "@/lib/projects";
import { ProjectCard } from "@/components/project-card";

export function FeaturedWork() {
  const featured = getFeaturedProjects().slice(0, 4);
  return (
    <section className="site-shell section-space" aria-labelledby="selected-work-title">
      <div className="mb-5 flex flex-wrap items-baseline justify-between gap-4">
        <h2 id="selected-work-title" className="section-title">Selected work</h2>
        <Link href="/projects" className="text-link">All work</Link>
      </div>
      <div>
        {featured.map((project) => <ProjectCard key={project.slug} project={project} />)}
      </div>
    </section>
  );
}
