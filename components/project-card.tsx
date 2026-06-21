import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-border bg-background p-6 transition hover:border-accent/50"
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold leading-tight">{project.title}</h3>
        <ArrowUpRight
          className="h-5 w-5 shrink-0 text-muted-foreground transition group-hover:text-accent"
          aria-hidden="true"
        />
      </div>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {project.tagline}
      </p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {project.competencies.slice(0, 3).map((c) => (
          <li
            key={c}
            className="rounded-full border border-border bg-surface px-2.5 py-0.5 text-xs text-muted-foreground"
          >
            {c}
          </li>
        ))}
      </ul>
    </Link>
  );
}
