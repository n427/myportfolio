// next.config.ts
import type { NextConfig } from "next";

const repo = "portfolio";                           // <-- your repo name
const isProd = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",                                 // produce /out for GH Pages
  images: { unoptimized: true },                    // safe for GH Pages
  basePath: isProd ? `/${repo}` : undefined,        // add /portfolio in prod
  assetPrefix: isProd ? `/${repo}/` : undefined,    // make _next assets load
  trailingSlash: true,                              // optional: nicer static paths
};

export default nextConfig;
