import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getProject, projects } from "@/lib/projects";
import { site } from "@/lib/content";
import { GithubIcon } from "@/components/icons";
import { ProjectArt } from "@/components/project-art";
import { ClusterDiagram } from "@/components/cluster-diagram";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.tagline,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.title} · ${site.name}`,
      description: project.tagline,
      url: `${site.url}/projects/${project.slug}`,
      type: "article",
    },
  };
}

const sections = [
  { key: "problem", label: "The problem" },
  { key: "approach", label: "The approach" },
  { key: "result", label: "The result" },
] as const;

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Projects",
        item: `${site.url}/projects`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: project.title,
        item: `${site.url}/projects/${project.slug}`,
      },
    ],
  };

  return (
    <article className="site-shell pt-32 pb-24 sm:pt-40">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <div className="mx-auto max-w-4xl">
        <Link
          href="/projects"
          className="text-link text-muted-foreground"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          All projects
        </Link>

        <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs font-medium uppercase tracking-wider text-muted-foreground">
          <span>{project.year}</span>
          <span aria-hidden="true">&middot;</span>
          <span>{project.context}</span>
        </div>
        <h1 className="display-title mt-5">
          {project.title}
        </h1>
        <p className="mt-4 text-balance text-lg leading-relaxed text-muted-foreground">
          {project.tagline}
        </p>

        <ul className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded border border-border px-3 py-1.5 font-mono text-[10px] text-muted-foreground"
            >
              {tech}
            </li>
          ))}
        </ul>

        {project.repo && (
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary"
            >
              <GithubIcon className="h-4 w-4" aria-hidden="true" />
              View on GitHub
            </a>
          </div>
        )}

        <div className="mt-12 overflow-hidden rounded-md border border-border">
          {project.slug === "inside-the-kubernetes-cluster" ? <ClusterDiagram /> : <ProjectArt slug={project.slug} />}
        </div>
        <div className="mt-12 space-y-10">
          {sections.map((section) => (
            <section key={section.key} className="grid gap-4 border-t border-border pt-8 sm:grid-cols-[160px_1fr] sm:gap-10">
              <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-accent-2">
                {section.label}
              </h2>
              <p className="text-base leading-8 text-muted-foreground">
                {project[section.key]}
              </p>
            </section>
          ))}

          <section>
            <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-accent-2">
              Highlights
            </h2>
            <ul className="mt-3 space-y-2">
              {project.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex gap-3 text-base leading-relaxed text-muted-foreground"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                  />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="mt-14 border-t border-border pt-8">
          <p className="text-sm text-muted-foreground">
            Want to talk through any of this?{" "}
            <Link
              href="/contact"
              className="text-accent underline underline-offset-4 hover:decoration-2"
            >
              Get in touch
            </Link>
            .
          </p>
        </div>
      </div>
    </article>
  );
}
