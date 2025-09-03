const repo = "portfolio";
const onCI = process.env.GITHUB_ACTIONS === "true";

/** @type {import('next').NextConfig} */
export default {
  output: "export",
  images: { unoptimized: true },     // required on GH Pages
  basePath: onCI ? `/${repo}` : "",
  assetPrefix: onCI ? `/${repo}/` : "",
  trailingSlash: true,
};
