/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_BASE: process.env.API_BASE,
    API_STATIC: process.env.API_STATIC
  },
  images: {
    domains: [
      'localhost',
      'citydream.pp.ua',
      'trello.com',
      'platform-lookaside.fbsbx.com',
      'trello-members.s3.amazonaws.com',
    ]
  }
}

module.exports = nextConfig
