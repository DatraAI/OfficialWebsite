/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'docs',
  images: {
    unoptimized: true,
  },
  basePath: '',
  assetPrefix: '',
  trailingSlash: true,
}

module.exports = nextConfig 