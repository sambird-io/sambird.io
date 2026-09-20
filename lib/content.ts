// Single source of truth for site copy.
// Editorial rule: every claim here must be true. No invented metrics, no TODO
// in rendered values. Positioning is hands-on Cloud / Data / Platform engineering
// (IC with a leadership dimension), not people-management.

export const site = {
  name: "Sam Bird",
  role: "Lead Cloud Engineer",
  company: "Lloyds Banking Group",
  tagline:
    "Cloud, data and platform engineer with 7+ years turning manual, fragile systems into automated platforms across financial services, public sector, and retail.",
  bio: "I'm a Lead Cloud Engineer with more than seven years designing, automating, and operating cloud-native platforms across financial services, the public sector, and retail. Today I lead cloud engineering on a financial-crime intelligence data platform at Lloyds Banking Group. I'm AWS and Google Cloud certified, and I work deep in Kubernetes, Terraform and Python. Lately I've been getting curious about the data and AI tooling built on top, learning how retrieval and evaluation systems work by building small ones from scratch. I like turning repetitive, manual work into reliable automation, mentoring engineers, and explaining complex systems clearly to technical and non-technical people alike. Clients I've supported include Lloyds Banking Group, the UK Home Office, and the John Lewis Partnership.",
  location: "Yorkshire, United Kingdom",
  url: "https://sambird.io",
  email: "sam.birdd@hotmail.co.uk",
  headline: "Making complex systems work. Simply.",
  introduction: "I’m Sam, a cloud and platform engineer turning complicated infrastructure into reliable systems that people can build on.",
  // A soft, non-desperate signal. Shown on /about and /contact.
  availability:
    "Open to conversations about senior and staff platform, cloud and data engineering roles. UK-based and remote-friendly.",
  // Set to e.g. "/sam-bird-cv.pdf" once a CV is added to /public; the download
  // button only renders when this is non-empty.
  cvUrl: "",
  // Short professional focus line shown on the hero. Update whenever focus shifts.
  currently: "writing about how Kubernetes actually works",
  links: {
    // Canonical handle. github.com/SamBird/* redirects here.
    linkedin: "https://www.linkedin.com/in/sambird-io/",
    github: "https://github.com/sambird-io",
  },
} as const;

// What I want to be known for. Each pillar links somewhere that proves it.
export type Pillar = {
  title: string;
  body: string;
  href: string;
};

export const pillars: Pillar[] = [
  {
    title: "Cloud & Platform Engineering",
    body: "Self-service platforms on AWS and GCP, built with Kubernetes, Terraform and CI/CD that cut delivery time and engineering toil.",
    href: "/projects",
  },
  {
    title: "Data Platforms",
    body: "Leading cloud engineering on a financial-crime data platform at Lloyds, and exploring AI tooling by building small retrieval systems to understand how they actually work.",
    href: "/writing",
  },
  {
    title: "Engineering Leadership",
    body: "Leading delivery, mentoring engineers across teams, and running tech-talk series that level up how whole orgs build.",
    href: "/about",
  },
];

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
    period: "Nov 2023 to Present",
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
    period: "Apr 2022 to Nov 2023",
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
    period: "Mar 2019 to Apr 2022",
    logo: "/img/ibm.png",
    logoAlt: "IBM",
    bullets: [
      "Cut National Law Enforcement Data Programme deployments from half a day to under 30 minutes with parallel Jenkins release pipelines that now run multiple times a day across environments.",
      "Built GCP Terraform modules integrated into Jenkins for Lloyds' new API management solution (Apigee X).",
      "Identified up to 90% AWS hosting-cost savings using EC2 Spot instances; findings fed into the production architecture.",
      "Refactored Jenkins pipeline code from 600 to 300 lines via a shared library, and mentored across five Scrum teams.",
    ],
  },
  {
    company: "John Lewis & Partners",
    role: "Technology Graduate",
    period: "Sep 2016 to Mar 2019",
    logo: "/img/john-lewis.png",
    logoAlt: "John Lewis & Partners",
    bullets: [
      "Reduced platform-onboarding Google Group creation from a one-week process to under 5 minutes by automating Google APIs with Python in GitLab CI.",
      "Built tier-based GCP pipelines (Terraform, Kubernetes) for faster delivery, and added Prometheus observability via a custom NGINX base image.",
      "Rotated across seven roles spanning Business Intelligence, iOS development and DevOps, across the John Lewis and Waitrose brands.",
    ],
  },
  {
    company: "Sage",
    role: "Undergraduate Software Engineer",
    period: "Sep 2014 to Aug 2015",
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
    skills: ["AWS", "Google Cloud", "Kubernetes", "Docker", "Helm"],
  },
  {
    title: "Infrastructure as Code",
    skills: ["Terraform", "Vault"],
  },
  {
    title: "CI/CD & Automation",
    skills: ["Jenkins", "GitLab CI", "GitHub Actions", "Gradle"],
  },
  {
    title: "Languages",
    skills: ["Python", "Go", "Bash", "Groovy"],
  },
  {
    title: "Currently exploring",
    skills: ["RAG", "Claude API", "Embeddings", "ChromaDB", "Evaluation"],
  },
  {
    title: "Observability & Quality",
    skills: ["Prometheus", "Dynatrace", "SonarQube", "Nexus"],
  },
];

// Truthful, generic. The site already states AWS + GCP certified. Specific
// titles / Credly links can be slotted in later via `url`.
export type Certification = {
  name: string;
  issuer: string;
  url?: string;
};

export const certifications: Certification[] = [
  { name: "AWS Certified", issuer: "Amazon Web Services" },
  { name: "Google Cloud Certified", issuer: "Google Cloud" },
];
