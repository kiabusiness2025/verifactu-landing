/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  poweredByHeader: false,
  experimental: {
    serverActions: {
      allowedOrigins: ["localhost:3000", "verifactu.business"]
    }
  },
  images: {
    domains: ["verifactu.business"]
  }
}

module.exports = nextConfig
