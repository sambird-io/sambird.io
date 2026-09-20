import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getFeaturedProjects } from "@/lib/projects";
import { ProjectCard } from "@/components/project-card";

export function FeaturedWork() {
  const featured = getFeaturedProjects().filter((p) => p.slug !== "inside-the-kubernetes-cluster").slice(0, 3);
  return (
    <section className="site-shell section-space">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div><p className="eyebrow">02 / The workshop</p><h2 className="section-title mt-4">Built out of curiosity.</h2></div>
        <Link href="/projects" className="text-link">All projects <ArrowUpRight size={16} aria-hidden="true" /></Link>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {featured.map((project) => <ProjectCard key={project.slug} project={project} />)}
      </div>
    </section>
  );
}
