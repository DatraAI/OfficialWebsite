/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: '',
  assetPrefix: '',
  distDir: 'docs',
}

module.exports = nextConfig 