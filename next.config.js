/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // basePath: '/codigoinerte.github.io',
  // assetPrefix: '/codigoinerte.github.io/',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
