/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains:["content-management-files.canva.com", "static.canva.com", "template.canva.com"],
  },
};

module.exports = nextConfig;
