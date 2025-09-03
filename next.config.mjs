const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
export default {
  output: 'export',                 // writes static site to /out
  basePath: isProd ? '/portfolio' : '',
  images: { unoptimized: true },    // needed for static export
  assetPrefix: isProd ? '/portfolio/' : undefined, // NEVER set in dev
};
