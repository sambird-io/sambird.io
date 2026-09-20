import type { Metadata } from "next";
import Link from "next/link";
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
        eyebrow="Uses"
        title="A setup I can rebuild."
        intro="My machine isn't set up by hand. A single, tested bootstrap script takes it from a clean install to a working cloud-engineering environment. These are the tools it brings along."
      />
      <section className="site-shell pb-24" aria-label="Engineering tools">
        <div className="max-w-4xl border-t border-border">
          {groups.map((group) => (
            <div key={group.title} className="grid gap-2 border-b border-border py-4 sm:grid-cols-[180px_minmax(0,1fr)] sm:gap-6">
              <h2 className="text-sm font-medium leading-6">{group.title}</h2>
              <ul className="flex flex-wrap gap-x-4 gap-y-1 text-sm leading-6 text-muted-foreground">
                {group.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <aside className="mt-10 max-w-4xl border-t border-border pt-6" aria-labelledby="bootstrap-title">
          <p className="eyebrow">The setup is a project, too</p>
          <h2 id="bootstrap-title" className="mt-2 text-lg font-medium">bootstrap-mac</h2>
          <p className="mt-2 max-w-2xl text-sm leading-7 text-muted-foreground">
            A modular, idempotent Bash bootstrap. Safely re-runnable, tested locally and in Docker, with handling for MDM-managed machines.
          </p>
          <Link href="/projects/bootstrap-mac" className="mt-3 inline-flex min-h-11 items-center text-sm text-accent underline underline-offset-4 hover:decoration-2">
            See how it works
          </Link>
        </aside>
      </section>
    </>
  );
}
