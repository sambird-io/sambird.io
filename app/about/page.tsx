import type { Metadata } from "next";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Skills } from "@/components/sections/skills";
import { Certifications } from "@/components/sections/certifications";
import { Beyond } from "@/components/sections/beyond";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description: site.tagline,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <About />
      <Experience />
      <Skills />
      <Certifications />
      <Beyond />
    </>
  );
}
