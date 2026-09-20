import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Terminal } from "lucide-react";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Uses",
  description:
    "The tools Sam Bird uses for cloud and platform engineering, all installed by a single, tested bootstrap script.",
  alternates: { canonical: "/uses" },
};

const groups = [
  { title: "Package manager", items: ["Homebrew"] },
  { title: "Shell & terminal", items: ["zsh + Oh My Zsh", "fzf"] },
  { title: "Cloud CLIs", items: ["gcloud", "awscli"] },
  { title: "Kubernetes", items: ["kubectl", "k9s", "Helm", "kind (local clusters)"] },
  { title: "Containers", items: ["Docker", "Colima"] },
  { title: "Infrastructure as Code", items: ["Terraform"] },
];

export default function UsesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Uses / The working environment"
        title="A setup I can rebuild."
        intro="My machine isn't set up by hand. A single, tested bootstrap script takes it from a clean install to a working cloud-engineering environment. These are the tools it brings along."
      />
      <section className="site-shell pb-24" aria-label="Engineering tools">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-16">
          <div className="border-t border-border">
            {groups.map((group) => (
              <div key={group.title} className="grid gap-4 border-b border-border py-6 sm:grid-cols-[180px_minmax(0,1fr)]">
                <h2 className="text-sm font-semibold leading-7">{group.title}</h2>
                <ul className="space-y-2 font-mono text-sm leading-7 text-muted-foreground">
                  {group.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <aside className="rounded-lg border border-border bg-surface p-7 sm:p-8" aria-labelledby="bootstrap-title">
            <Terminal className="h-7 w-7 text-accent" aria-hidden="true" />
            <p className="eyebrow mt-8">The setup is a project, too</p>
            <h2 id="bootstrap-title" className="mt-4 text-2xl font-semibold tracking-tight">bootstrap-mac</h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              A modular, idempotent Bash bootstrap. Safely re-runnable, tested
              locally and in Docker, with handling for MDM-managed machines.
            </p>
            <Link href="/projects/bootstrap-mac" className="text-link mt-7 min-h-11 text-sm">
              See how it works <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </aside>
        </div>
      </section>
    </>
  );
}
