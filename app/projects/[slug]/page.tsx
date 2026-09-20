import type { Metadata } from "next";
import { SiteLink as Link } from "@/components/site-link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getProject, projects } from "@/lib/projects";
import { site } from "@/lib/content";
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

        <p className="mt-5 text-sm leading-6 text-muted-foreground">{project.stack.join(" · ")}</p>

        {project.repo && (
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              <GithubIcon className="h-4 w-4" aria-hidden="true" />
              View on GitHub
            </a>
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
