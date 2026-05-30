// Single source of truth for site copy.
// Edit the TODO placeholders to fill in real content.

export const site = {
  name: "Sam Bird",
  role: "Lead Cloud Engineer",
  company: "Lloyds Banking Group",
  tagline:
    "Cloud & DevOps engineering leader with 6+ years automating cloud-native workloads across financial services, public sector, and retail.",
  bio: "I'm a Lead Cloud Engineer with over six years designing, automating, and operating cloud-native workloads across financial services, the public sector, and retail. AWS and Google Cloud certified, I bring deep expertise in DevOps practices, cloud infrastructure, and automation with tools like Terraform, Jenkins, and Python. I have a knack for turning manual, repetitive work into reliable automation, and I enjoy mentoring junior engineers and communicating clearly with both technical and non-technical teams. Key clients I've supported include Lloyds Banking Group, the UK Home Office, and the John Lewis Partnership.",
  location: "Leeds, United Kingdom",
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
  // TODO: fill in real start/end (e.g. "2023 — Present")
  period: string;
  logo: string;
  logoAlt: string;
  // TODO: replace bullets with real impact statements
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
    skills: ["AWS", "Google Cloud", "Kubernetes", "Docker", "Helm"],
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
