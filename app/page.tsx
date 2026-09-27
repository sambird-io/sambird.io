import { Hero } from "@/components/sections/hero";
import { SelectedImpact } from "@/components/sections/selected-impact";
import { Logos } from "@/components/sections/logos";
import { Pillars } from "@/components/sections/pillars";
import { FeaturedWork } from "@/components/sections/featured-work";
import { LatestWriting } from "@/components/sections/latest-writing";
import { HomeCta } from "@/components/sections/home-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <SelectedImpact />
      <Logos />
      <Pillars />
      <FeaturedWork />
      <LatestWriting />
      <HomeCta />
    </>
  );
}
