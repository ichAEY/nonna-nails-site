import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: "/nonna-nails-site",
  assetPrefix: "/nonna-nails-site/",
};

export default nextConfig;
