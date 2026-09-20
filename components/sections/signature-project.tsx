import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getProject } from "@/lib/projects";
import { ClusterDiagram } from "@/components/cluster-diagram";

export function SignatureProject() {
  const project = getProject("inside-the-kubernetes-cluster");
  if (!project) return null;
  return (
    <section id="selected-work" className="border-y border-border bg-surface/60">
      <div className="site-shell section-space">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <p className="eyebrow">01 / A closer look</p>
          <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Built to make the invisible visible</span>
        </div>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="eyebrow mb-4">Kubernetes / Teaching tool</p>
            <h2 className="section-title max-w-md">{project.title}</h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">What actually happens after you run <code className="font-mono text-sm text-foreground">kubectl apply</code>? I built a dashboard that lets you watch the control plane react, one event at a time.</p>
            <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2 font-mono text-[11px] text-muted-foreground">
              {project.stack.slice(0, 4).map((tech) => <li key={tech}>{tech}</li>)}
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <Link href={`/projects/${project.slug}`} className="button-primary">Read the case study <ArrowUpRight size={16} aria-hidden="true" /></Link>
              <a href={project.repo} target="_blank" rel="noopener noreferrer" className="text-link">View source <ArrowUpRight size={14} aria-hidden="true" /></a>
            </div>
          </div>
          <ClusterDiagram />
        </div>
      </div>
    </section>
  );
}
