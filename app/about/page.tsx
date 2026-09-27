import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Skills } from "@/components/sections/skills";
import { Certifications } from "@/components/sections/certifications";
import { Beyond } from "@/components/sections/beyond";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "About",
  description:
    "Sam Bird's cloud and platform engineering experience across financial services, the public sector and retail, plus technical skills and current focus.",
  path: "/about",
});

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
