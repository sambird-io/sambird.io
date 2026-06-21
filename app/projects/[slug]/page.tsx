import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getProject, projects } from "@/lib/projects";
import { site } from "@/lib/content";
import { GithubIcon } from "@/components/icons";

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
      title: `${project.title} — ${site.name}`,
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
    <article className="px-6 pt-32 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <div className="mx-auto max-w-3xl">
        <Link
          href="/projects"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground transition hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          All projects
        </Link>

        <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          <span>{project.year}</span>
          <span aria-hidden="true">&middot;</span>
          <span>{project.context}</span>
        </div>
        <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
          {project.title}
        </h1>
        <p className="mt-4 text-balance text-lg leading-relaxed text-muted-foreground">
          {project.tagline}
        </p>

        <ul className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted-foreground"
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
              className="inline-flex h-10 items-center gap-2 rounded-full border border-border px-5 text-sm font-medium transition hover:border-accent/60"
            >
              <GithubIcon className="h-4 w-4" aria-hidden="true" />
              View on GitHub
            </a>
          </div>
        )}

        <div className="mt-12 space-y-10">
          {sections.map((section) => (
            <section key={section.key}>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-accent">
                {section.label}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {project[section.key]}
              </p>
            </section>
          ))}

          <section>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-accent">
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
              className="text-accent underline-offset-4 hover:underline"
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
