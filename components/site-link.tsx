import NextLink from "next/link";
import type { ComponentProps } from "react";

type SiteLinkProps = ComponentProps<typeof NextLink>;

export function SiteLink(props: SiteLinkProps) {
  return <NextLink {...props} prefetch={false} />;
}
