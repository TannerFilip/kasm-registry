/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'Tanner\'s Registry',
    description: 'Tanner\'s personal registry of Kasm workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://tannerfilip.org/kasm-registry/',
    contactUrl: 'https://github.com/tannerfilip/kasm-registry',
  },
  reactStrictMode: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
