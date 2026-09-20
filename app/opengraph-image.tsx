import { ImageResponse } from "next/og";
import { SocialImage } from "@/components/social-image";
import { site } from "@/lib/content";
export const alt = `${site.name} · ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OpenGraphImage() {
  return new ImageResponse(<SocialImage title={site.headline} category="Engineering" subtitle={`${site.role} at ${site.company}`} />, size);
}
