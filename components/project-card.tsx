import Link from "next/link";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project, headingLevel = 3 }: { project: Project; headingLevel?: 2 | 3 }) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  return (
    <Link href={`/projects/${project.slug}`} className="project-card group">
      <div>
        <Heading className="text-base font-medium leading-snug tracking-tight transition-colors">
          {project.title}
        </Heading>
        <p className="mt-1 text-sm text-muted-foreground">{project.context} · {project.year}</p>
      </div>
      <p className="text-sm leading-6 text-muted-foreground">{project.tagline}</p>
    </Link>
  );
}
