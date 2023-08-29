/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ['react-tweet'],
  images: {
    domains: ['images2.imgbox.com','scontent.fbog2-3.fna.fbcdn.net'],
  },

}

module.exports = nextConfig
