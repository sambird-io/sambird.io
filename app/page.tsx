import { Hero } from "@/components/sections/hero";
import { Logos } from "@/components/sections/logos";
import { Pillars } from "@/components/sections/pillars";
import { SignatureProject } from "@/components/sections/signature-project";
import { FeaturedWork } from "@/components/sections/featured-work";
import { LatestWriting } from "@/components/sections/latest-writing";
import { HomeCta } from "@/components/sections/home-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Logos />
      <SignatureProject />
      <FeaturedWork />
      <LatestWriting />
      <Pillars />
      <HomeCta />
    </>
  );
}
