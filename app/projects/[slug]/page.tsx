import type { Metadata } from "next";
import { SiteLink as Link } from "@/components/site-link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getProject, projects } from "@/lib/projects";
import { site } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";
import { GithubIcon } from "@/components/icons";
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
  return pageMetadata({
    title: project.title,
    description: project.tagline,
    path: `/projects/${project.slug}`,
    type: "article",
  });
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const sections = [
    { key: "problem", label: project.category === "professional" ? "The constraint" : "The problem" },
    { key: "approach", label: project.category === "professional" ? "The decision" : "The approach" },
    { key: "result", label: "The result" },
  ] as const;

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
    <article className="site-shell pt-14 pb-20 sm:pt-16">
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

        <div className="mt-8 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
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

        {project.role && (
          <p className="mt-6 border-l-2 border-accent pl-4 text-sm leading-6 text-muted-foreground">
            <span className="font-medium text-foreground">My role:</span> {project.role}
          </p>
        )}

        <p className="mt-5 text-sm leading-6 text-muted-foreground">{project.stack.join(" · ")}</p>

        {(project.repo || project.relatedWriting) && (
          <div className="mt-8 flex flex-wrap gap-3">
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                <GithubIcon className="h-4 w-4" aria-hidden="true" />
                View on GitHub
              </a>
            )}
            {project.relatedWriting && (
              <Link href={project.relatedWriting.href} className="text-link">
                {project.relatedWriting.label}
              </Link>
            )}
          </div>
        )}

        {project.slug === "inside-the-kubernetes-cluster" && (
          <div className="mt-12"><ClusterDiagram /></div>
        )}
        <div className="mt-12 space-y-10">
          {sections.map((section) => (
            <section key={section.key} className="grid gap-4 border-t border-border pt-8 sm:grid-cols-[160px_1fr] sm:gap-10">
              <h2 className="text-sm font-medium text-foreground">
                {section.label}
              </h2>
              <p className="text-base leading-8 text-muted-foreground">
                {project[section.key]}
              </p>
            </section>
          ))}

          {project.detailSections?.map((section) => (
            <section key={section.heading} className="grid gap-4 border-t border-border pt-8 sm:grid-cols-[160px_1fr] sm:gap-10">
              <h2 className="text-sm font-medium text-foreground">
                {section.heading}
              </h2>
              <p className="text-base leading-8 text-muted-foreground">
                {section.body}
              </p>
            </section>
          ))}

          {project.runCommands && (
            <section className="grid gap-4 border-t border-border pt-8 sm:grid-cols-[160px_1fr] sm:gap-10">
              <h2 className="text-sm font-medium text-foreground">Run locally</h2>
              <ul className="min-w-0 space-y-2">
                {project.runCommands.map((command) => (
                  <li key={command}>
                    <code className="block overflow-x-auto rounded-lg bg-surface px-4 py-3 font-mono text-sm text-foreground">
                      {command}
                    </code>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {project.evidenceLinks && (
            <section className="grid gap-4 border-t border-border pt-8 sm:grid-cols-[160px_1fr] sm:gap-10">
              <h2 className="text-sm font-medium text-foreground">Source and setup</h2>
              <ul className="space-y-2">
                {project.evidenceLinks.map((evidence) => (
                  <li key={evidence.href}>
                    <a href={evidence.href} target="_blank" rel="noopener noreferrer" className="text-link">
                      {evidence.label}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section>
            <h2 className="text-sm font-medium text-foreground">
              Highlights
            </h2>
            <ul className="mt-3 space-y-2">
              {project.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex gap-3 text-base leading-relaxed text-muted-foreground"
                >
              <span aria-hidden="true" className="mt-3 h-1 w-1 shrink-0 bg-muted-foreground" />
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
