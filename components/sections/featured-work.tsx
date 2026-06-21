import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getFeaturedProjects } from "@/lib/projects";
import { ProjectCard } from "@/components/project-card";

export function FeaturedWork() {
  const featured = getFeaturedProjects().slice(0, 3);
  return (
    <section className="bg-surface/40 px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Selected work
            </h2>
            <p className="mt-3 max-w-xl text-base text-muted-foreground">
              Things I&rsquo;ve built to learn deeply — and to make hard systems
              easier to understand.
            </p>
          </div>
          <Link
            href="/projects"
            className="hidden shrink-0 items-center gap-1 text-sm font-medium text-muted-foreground transition hover:text-foreground sm:inline-flex"
          >
            All projects
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <div className="mt-8 sm:hidden">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1 text-sm font-medium"
          >
            All projects
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
