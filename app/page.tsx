import { Hero } from "@/components/sections/hero";
import { FeaturedWork } from "@/components/sections/featured-work";
import { LatestWriting } from "@/components/sections/latest-writing";
import { HomeCta } from "@/components/sections/home-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedWork />
      <LatestWriting />
      <HomeCta />
    </>
  );
}
