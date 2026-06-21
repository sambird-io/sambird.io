import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import type { AnchorHTMLAttributes } from "react";

// Internal links use next/link for client-side navigation; external links open
// in a new tab with safe rel. Everything else is styled via the `.article`
// scope in globals.css.
function MdxLink({
  href = "",
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
}

const components: MDXComponents = {
  a: MdxLink,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
