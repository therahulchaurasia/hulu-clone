/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "links.papareact.com",
      "image.tmdb.org",
      "upload.wikimedia.org",
      "download.logo.wine",
    ],
  },
};

module.exports = nextConfig;
