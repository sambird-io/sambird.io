import type { Metadata } from "next";
import { site } from "@/lib/content";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  publishedTime?: string;
};

export function socialMetadata({
  title,
  description,
  path,
  type = "website",
  publishedTime,
}: PageMetadataOptions): Pick<Metadata, "openGraph" | "twitter"> {
  const socialTitle = `${title} · ${site.name}`;
  const shared = {
    title: socialTitle,
    description,
    url: `${site.url}${path}`,
    siteName: site.name,
    locale: "en_GB",
  };

  return {
    openGraph: type === "article"
      ? { ...shared, type: "article", publishedTime }
      : { ...shared, type: "website" },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
    },
  };
}

export function pageMetadata(options: PageMetadataOptions): Metadata {
  return {
    title: options.title,
    description: options.description,
    alternates: { canonical: options.path },
    ...socialMetadata(options),
  };
}
