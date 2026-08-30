// Single source of truth for site copy.

export const site = {
  name: "Sam Bird",
  role: "Lead Cloud Engineer",
  company: "Lloyds Banking Group",
  tagline:
    "Cloud and data-platform engineer designing secure, observable GCP platforms for regulated financial services.",
  bio: "I'm a Lead Cloud Engineer with more than seven years in cloud and DevOps engineering. I design and improve data platforms, delivery systems, and cloud infrastructure in regulated environments, with a current focus on Google Cloud, Kubernetes, Terraform, and automation. I enjoy solving cross-team technical problems, turning constraints into reusable engineering patterns, and helping people make clear, well-informed decisions. My experience spans Lloyds Banking Group, the UK Home Office, and the John Lewis Partnership.",
  location: "Yorkshire, United Kingdom",
  url: "https://sambird.io",
  email: "sam.birdd@hotmail.co.uk",
  links: {
    linkedin: "https://www.linkedin.com/in/sambird-io/",
    github: "https://github.com/sambird-io",
  },
} as const;

export type Experience = {
  company: string;
  role: string;
  period: string;
  logo: string;
  logoAlt: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    company: "Lloyds Banking Group",
    role: "Lead Cloud Engineer",
    period: "Nov 2023 — Present",
    logo: "/img/lloyds.png",
    logoAlt: "Lloyds Banking Group",
    bullets: [
      "Lead cloud engineering on the Economic Crime Intelligence data platform.",
      "Build reusable cloud and platform patterns that improve consistency and delivery.",
      "Strengthen reliability and operability through automation, observability, and least-privilege access.",
      "Mentor engineers and communicate architectural trade-offs clearly to technical and non-technical stakeholders.",
    ],
  },
  {
    company: "Publicis Sapient",
    role: "Senior DevOps Consultant",
    period: "Apr 2022 — Nov 2023",
    logo: "/img/publicis-sapient.png",
    logoAlt: "Publicis Sapient",
    bullets: [
      "Built automated deployment pipelines (Terraform, Jenkins, Helm) delivering applications to GCP for Lloyds Banking Group, enabling faster, more reliable releases.",
      "Cut environment-provisioning pipeline runtime from 4 hours to 2 by analysing and documenting bottlenecks for the Platform Engineering team.",
      "Led on-prem-to-GCP network design over dedicated Interconnect, and ran bi-weekly tech-talk sessions for 6+ months to embed CI/CD best practice.",
      "Engaged through my own consultancy, Fregata Consulting (Director), founded to provide specialist Cloud & DevOps engineering.",
    ],
  },
  {
    company: "IBM",
    role: "DevOps Consultant → Senior DevOps Consultant",
    period: "Mar 2019 — Apr 2022",
    logo: "/img/ibm.png",
    logoAlt: "IBM",
    bullets: [
      "Cut National Law Enforcement Data Programme deployments from half a day to under 30 minutes with parallel Jenkins release pipelines — now run multiple times a day across environments.",
      "Built GCP Terraform modules integrated into Jenkins for Lloyds' new API management solution (Apigee X).",
      "Identified up to 90% AWS hosting-cost savings using EC2 Spot instances; findings fed into the production architecture.",
      "Refactored Jenkins pipeline code from 600 to 300 lines via a shared library, and mentored across five Scrum teams.",
    ],
  },
  {
    company: "John Lewis & Partners",
    role: "Technology Graduate",
    period: "Sep 2016 — Mar 2019",
    logo: "/img/john-lewis.png",
    logoAlt: "John Lewis & Partners",
    bullets: [
      "Reduced platform-onboarding Google Group creation from a one-week process to under 5 minutes by automating Google APIs with Python in GitLab CI.",
      "Built tier-based GCP pipelines (Terraform, Kubernetes) for faster delivery, and added Prometheus observability via a custom NGINX base image.",
      "Rotated across seven roles — from Business Intelligence and iOS development to DevOps — across the John Lewis and Waitrose brands.",
    ],
  },
  {
    company: "Sage",
    role: "Undergraduate Software Engineer",
    period: "Sep 2014 — Aug 2015",
    logo: "/img/sage.png",
    logoAlt: "Sage",
    bullets: [
      "Maintained Sage UK&I's subscription sales systems, resolving live issues for internal and external customers.",
      "Designed and built a rollback tool to correct mis-applied subscription changes, helping Finance issue timely customer refunds.",
    ],
  },
];

export type SkillGroup = {
  title: string;
  skills: string[];
};

export const skills: SkillGroup[] = [
  {
    title: "Cloud & Containers",
    skills: ["Google Cloud", "AWS", "Kubernetes", "Docker", "Helm"],
  },
  {
    title: "Infrastructure as Code",
    skills: ["Terraform", "Vault"],
  },
  {
    title: "CI/CD & Automation",
    skills: ["Jenkins", "GitLab CI", "GitHub", "Python", "Groovy", "Gradle"],
  },
  {
    title: "Observability & Quality",
    skills: ["Prometheus", "Dynatrace", "SonarQube", "Nexus"],
  },
];

export type SelectedWork = {
  title: string;
  kind: string;
  period: string;
  description: string;
  href?: string;
  linkLabel?: string;
};

export const selectedWork: SelectedWork[] = [
  {
    title: "Inside the Kubernetes Cluster",
    kind: "Talk & teaching demo",
    period: "2026",
    description:
      "Built a local-first, live teaching demo showing what happens after you apply YAML — from API validation and scheduling to reconciliation, readiness, scaling, and rollouts.",
    href: "https://github.com/sambird-io/inside-the-k8s-cluster",
    linkLabel: "Explore the project",
  },
  {
    title: "Google Cloud Summit London",
    kind: "Speaking",
    period: "2024",
    description: "Presented at Google Cloud Summit London.",
  },
];
