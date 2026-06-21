import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  output: "standalone",
  poweredByHeader: false,
  reactStrictMode: true,
  // Allow .md/.mdx alongside the usual extensions so blog bodies compile.
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
};

const withMDX = createMDX();

export default withMDX(nextConfig);
