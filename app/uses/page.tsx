import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Uses",
  description:
    "The tools Sam Bird uses for cloud and platform engineering — all installed by a single, tested bootstrap script.",
  alternates: { canonical: "/uses" },
};

const groups: { title: string; items: string[] }[] = [
  { title: "Package manager", items: ["Homebrew"] },
  { title: "Shell & terminal", items: ["zsh + Oh My Zsh", "fzf"] },
  { title: "Cloud CLIs", items: ["gcloud", "awscli"] },
  {
    title: "Kubernetes",
    items: ["kubectl", "k9s", "Helm", "kind (local clusters)"],
  },
  { title: "Containers", items: ["Docker", "Colima"] },
  { title: "Infrastructure as Code", items: ["Terraform"] },
];

export default function UsesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Uses"
        title="What I work with"
        intro="My machine isn't set up by hand — it's rebuilt from zero by a single, idempotent, tested script. Here's roughly what that installs."
      />
      <section className="px-6 pb-12">
        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-border bg-background p-6"
            >
              <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                {group.title}
              </h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border bg-surface px-3 py-1 text-sm"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-5xl rounded-3xl border border-border bg-surface/50 px-8 py-10 text-center">
          <p className="text-balance text-muted-foreground">
            The whole setup lives in{" "}
            <Link
              href="/projects/bootstrap-mac"
              className="text-accent underline-offset-4 hover:underline"
            >
              bootstrap-mac
            </Link>{" "}
            — one command takes a clean Mac to a working cloud-engineering
            environment, safely re-runnable.
          </p>
        </div>
      </section>
    </>
  );
}
