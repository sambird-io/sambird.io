import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ProjectArt } from "@/components/project-art";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project, headingLevel = 3 }: { project: Project; headingLevel?: 2 | 3 }) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  return (
    <Link href={`/projects/${project.slug}`} className="project-card group">
      <ProjectArt slug={project.slug} />
      <div className="flex flex-1 flex-col p-6">
        <p className="eyebrow text-[10px]">{project.context} <span className="px-1" aria-hidden="true">/</span> {project.year}</p>
        <div className="mt-3 flex items-start justify-between gap-4">
          <Heading className="text-xl font-medium leading-tight tracking-tight">{project.title}</Heading>
          <ArrowUpRight size={18} className="shrink-0 text-accent transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
        </div>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{project.tagline}</p>
        <p className="mt-6 border-t border-border pt-4 font-mono text-[10px] leading-5 text-muted-foreground">{project.stack.slice(0, 3).join(" / ")}</p>
      </div>
    </Link>
  );
}
