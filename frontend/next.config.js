/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
