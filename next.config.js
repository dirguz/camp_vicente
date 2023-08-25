/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ['react-tweet'],
  images: {
    domains: ['images2.imgbox.com'],
  },

}

module.exports = nextConfig
