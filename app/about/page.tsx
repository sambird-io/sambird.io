import type { Metadata } from "next";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Skills } from "@/components/sections/skills";
import { Certifications } from "@/components/sections/certifications";
import { Beyond } from "@/components/sections/beyond";

export const metadata: Metadata = {
  title: "About",
  description:
    "Lead Cloud Engineer at Lloyds Banking Group with 6+ years across cloud, data and platform engineering in financial services, public sector and retail.",
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
