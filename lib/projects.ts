// Curated case studies. Grounded in real repos; every claim must be true.
// `repo` links point at the canonical github.com/sambird-io owner. Only public
// repos are linked. Omit `repo` for anything private.

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  year: string;
  category: "professional" | "independent";
  // How the work was carried out, e.g. "Solo project" or "Professional work".
  context: string;
  role?: string;
  stack: string[];
  competencies: string[];
  // Case-study body. Plain prose, kept honest and free of confidential detail.
  problem: string;
  approach: string;
  result: string;
  // Short bullets surfaced on cards and detail pages.
  highlights: string[];
  // Additional, source-backed reasoning and implementation detail.
  detailSections?: { heading: string; body: string }[];
  runCommands?: string[];
  evidenceLinks?: { label: string; href: string }[];
  relatedWriting?: { label: string; href: string };
  repo?: string;
  demo?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "terraform-pipeline-performance",
    title: "Halving a Terraform Provisioning Pipeline",
    tagline:
      "From four hours to two by measuring bottlenecks and simplifying the delivery path.",
    year: "2022–2023",
    category: "professional",
    context: "Professional work",
    role: "Senior DevOps Consultant · Publicis Sapient",
    stack: ["Terraform", "CI/CD", "Infrastructure as Code"],
    competencies: [
      "Platform Engineering",
      "Infrastructure as Code",
      "Performance analysis",
      "CI/CD",
    ],
    problem:
      "An environment-provisioning pipeline took four hours to run. The Platform Engineering team needed to understand where the time went before making changes that would keep it fast as it grew.",
    approach:
      "I measured stage timings and expensive calls first. The timeline exposed independent modules running in sequence, repeated provider and module downloads, and slow cloud resources blocking other work. I then parallelised work without shared dependencies, cached repeated downloads, and scoped state and applies to reduce unnecessary work.",
    result:
      "Pipeline runtime fell from four hours to two. I documented the bottlenecks and the reasoning behind the changes so the Platform Engineering team could keep tracking performance as the pipeline evolved.",
    highlights: [
      "Provisioning runtime reduced from 4 hours to 2",
      "Measured stage timings before changing the pipeline",
      "Parallel work, caching and smaller applies addressed the measured bottlenecks",
    ],
    relatedWriting: {
      label: "Read the full Terraform pipeline story",
      href: "/writing/terraform-pipeline-4h-to-2h",
    },
    featured: true,
  },
  {
    slug: "inside-the-kubernetes-cluster",
    title: "Inside the Kubernetes Cluster",
    tagline:
      "A local teaching dashboard for watching Kubernetes resources reconcile in real time.",
    year: "2026",
    category: "independent",
    context: "Solo project",
    stack: [
      "Next.js",
      "FastAPI",
      "Python",
      "Kubernetes client",
      "kind",
      "Docker",
      "Server-Sent Events",
    ],
    competencies: [
      "Platform Engineering",
      "Kubernetes",
      "Full-stack",
      "Developer Experience",
    ],
    problem:
      "Kubernetes' control plane is mostly invisible. When you run kubectl apply, the API server, scheduler and controllers do a lot of work you never see, which makes the system hard to teach and hard to reason about under pressure.",
    approach:
      "I built a local-first dashboard backed by a kind cluster. FastAPI uses the Kubernetes Python client to watch workload state and stream snapshots over Server-Sent Events to a Next.js interface. Live pod placement, ownership, readiness and replica counts sit beside clearly labelled conceptual explanations of scheduler and controller behaviour.",
    result:
      "A repeatable teaching tool that runs locally against a kind cluster. The repo includes one-command setup, architecture notes, a 30-minute presentation guide, a rehearsal checklist and API smoke tests for anyone who wants to run the demo.",
    highlights: [
      "Live Kubernetes resource state streamed to the dashboard over SSE",
      "Four-layer architecture: kind, demo workload, FastAPI and Next.js",
      "One-command local setup plus rehearsal and smoke checks",
    ],
    detailSections: [
      {
        heading: "Architecture",
        body: "A local kind cluster runs one control-plane and two worker nodes. A small HTTP workload exposes pod identity and readiness. FastAPI watches Kubernetes resources and serves initial state, live SSE updates and namespace-scoped actions. Next.js separates live demo controls from a teaching view; conceptual control-plane cards are explicitly distinguished from discovered cluster data.",
      },
      {
        heading: "Run and verify",
        body: "With Docker, kubectl, kind, make, Node.js and Python installed, the one-command setup creates the cluster, deploys the workload and starts both services. Automated rehearsal and API smoke checks help verify the session; the setup guide also documents reset and teardown.",
      },
    ],
    runCommands: [
      "make demo-all VERSION=v1",
      "make rehearsal-check",
      "make smoke-test",
    ],
    relatedWriting: {
      label: "Read how kubectl apply works",
      href: "/writing/what-happens-when-you-kubectl-apply",
    },
    evidenceLinks: [
      {
        label: "Architecture and data flow",
        href: "https://github.com/sambird-io/inside-the-k8s-cluster/blob/main/docs/architecture.md",
      },
      {
        label: "Run the local demo",
        href: "https://github.com/sambird-io/inside-the-k8s-cluster/blob/main/docs/setup.md",
      },
      {
        label: "Rehearsal checks",
        href: "https://github.com/sambird-io/inside-the-k8s-cluster/blob/main/docs/rehearsal-checklist.md",
      },
    ],
    repo: "https://github.com/sambird-io/inside-the-k8s-cluster",
    featured: true,
  },
  {
    slug: "eval-first-rag",
    title: "Eval-First RAG",
    tagline:
      "A learning project: retrieval-augmented generation built from scratch, with evals to show where it fails.",
    year: "2025",
    category: "independent",
    context: "Solo project",
    stack: [
      "Python",
      "FastAPI",
      "Claude API",
      "sentence-transformers",
      "ChromaDB",
      "Jupyter",
    ],
    competencies: [
      "AI / Data Tooling",
      "RAG",
      "Evaluation-driven development",
      "Python",
    ],
    problem:
      "RAG systems fail quietly. When an answer is wrong, was it retrieval or generation? Frameworks abstract away exactly the parts you need to understand to answer that question.",
    approach:
      "I built a RAG pipeline over the Kubernetes documentation with no frameworks. Chunking, embeddings, a ChromaDB vector index, retrieval and Claude-based generation each became an explicit, inspectable step, and then I wrote an evaluation suite that scores retrieval and generation separately.",
    result:
      "A hands-on reference that makes RAG legible: a notebook-by-notebook progression from raw documents to an evaluated pipeline, plus a FastAPI service. The evals tell you where the system is failing, not just that it failed.",
    highlights: [
      "No frameworks, so every RAG component is explicit",
      "Separate evals for retrieval vs generation quality",
      "Notebook progression from documents to a served pipeline",
    ],
    repo: "https://github.com/sambird-io/eval-first-rag",
    featured: true,
  },
  {
    slug: "gcp-platform-terraform",
    title: "A GCP Platform in Terraform",
    tagline:
      "Reusable VPC, GKE and IAM modules and a multi-environment delivery pattern teams can self-serve.",
    year: "2023",
    category: "independent",
    context: "Reference build",
    stack: ["Terraform", "Google Cloud", "GKE", "Shared VPC", "Jenkins"],
    competencies: [
      "Cloud",
      "Infrastructure as Code",
      "Platform Engineering",
      "GCP",
    ],
    problem:
      "Teams re-implementing networking, clusters and IAM per project is slow and inconsistent. Regulated organisations need that to be standard, reviewable and repeatable across dev, staging and prod.",
    approach:
      "I built reusable Terraform modules covering Shared VPC, GKE with autoscaling node pools and release channels, project scaffolding and IAM role bindings, then wired them into a per-environment structure delivered through Jenkins running on Kubernetes pod agents.",
    result:
      "A modular pattern an organisation can extend: define an environment once and get consistent, peer-reviewed infrastructure. It mirrors the production patterns I've shipped on real financial-services platforms.",
    highlights: [
      "Shared VPC, GKE, IAM and project modules, composable by design",
      "Per-environment structure delivered via Jenkins pod agents",
      "Mirrors production financial-services infrastructure patterns",
    ],
    // Public environments repo. The modules repo is private.
    repo: "https://github.com/sambird-io/tier-1-bank-environments",
    featured: true,
  },
  {
    slug: "bootstrap-mac",
    title: "bootstrap-mac",
    tagline:
      "An idempotent, tested bootstrap that rebuilds a full cloud-engineering setup from zero.",
    year: "2025",
    category: "independent",
    context: "Solo project",
    stack: [
      "Bash",
      "Homebrew",
      "Docker / Colima",
      "kubectl / k9s",
      "Terraform",
      "gcloud / awscli",
    ],
    competencies: ["Automation", "Developer Experience", "Shell", "Tooling"],
    problem:
      "Setting up a new Mac for cloud work is hours of manual, error-prone steps, and easy to get subtly wrong on MDM-managed machines.",
    approach:
      "A modular, idempotent Bash bootstrap that installs the whole toolchain (Homebrew, container, Kubernetes, cloud and IaC tools) with a test harness that runs locally and in Docker against stubbed installs, plus handling for MDM and permission edge cases.",
    result:
      "From a clean machine to a working cloud-engineering setup with one command, safely re-runnable. It's also the basis for my uses page.",
    highlights: [
      "Idempotent and safe to re-run",
      "Tested locally and in Docker against stubbed installs",
      "Handles MDM-managed machines and permission edge cases",
    ],
    repo: "https://github.com/sambird-io/bootstrap-mac",
    featured: true,
  },
  {
    slug: "webgoat-cicd",
    title: "WebGoat CI/CD",
    tagline:
      "An end-to-end Jenkins pipeline: build, test, scan, containerise and deploy with Helm.",
    year: "2023",
    category: "independent",
    context: "Reference build",
    stack: [
      "Jenkins",
      "Kubernetes pod agents",
      "Maven",
      "Docker",
      "Helm",
      "SonarQube",
    ],
    competencies: ["CI/CD", "DevOps", "Kubernetes", "Security"],
    problem:
      "Shipping a containerised app safely means joining up build, test, quality gates, image creation and deployment, without a pile of bespoke glue.",
    approach:
      "I built a Jenkins pipeline on Kubernetes pod agents that takes OWASP WebGoat from source through Maven build and test, code-quality scanning, a Docker image, and a templated Helm chart deployed to Kubernetes with Ingress and TLS.",
    result:
      "A clear, end-to-end reference for how a containerised app moves from commit to running cluster, the kind of pipeline I design and operate for delivery teams.",
    highlights: [
      "Build → test → scan → image → Helm, end to end",
      "Jenkins on Kubernetes pod agents",
      "Templated Helm chart with Ingress and TLS",
    ],
    repo: "https://github.com/sambird-io/webgoat-build",
    featured: false,
  },
];

export const getFeaturedProjects = () => projects.filter((p) => p.featured);

export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);
