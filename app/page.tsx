import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { SelectedWork } from "@/components/sections/selected-work";
import { Skills } from "@/components/sections/skills";
import { Contact } from "@/components/sections/contact";
import { site, skills } from "@/lib/content";

const profilePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  name: `${site.name} — ${site.role}`,
  url: site.url,
  description: site.tagline,
  mainEntity: {
    "@type": "Person",
    name: site.name,
    url: site.url,
    jobTitle: site.role,
    worksFor: {
      "@type": "Organization",
      name: site.company,
    },
    sameAs: [site.links.linkedin, site.links.github],
    knowsAbout: skills.flatMap((group) => group.skills),
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(profilePageJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Hero />
      <About />
      <Experience />
      <SelectedWork />
      <Skills />
      <Contact />
    </>
  );
}
