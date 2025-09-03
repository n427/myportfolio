/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

// If this is a *project page* (https://<you>.github.io/<repo>), set basePath/assetPrefix to "/<repo>" in prod.
// If this is a *user/organization page* (https://<you>.github.io), leave them empty.
const base = isProd ? '/<repo>' : ''   // <-- change <repo> to your repo name

module.exports = {
  output: 'export',           // build a static site into /out
  images: { unoptimized: true }, // you used <img>, but this makes Next/Image safe too
  basePath: base,
  assetPrefix: base + '/',
  trailingSlash: true,        // avoids refresh/404 issues on GH Pages
}