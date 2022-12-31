/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["links.papareact.com"]
  },
  publicRuntimeConfig: {
    assetRoute: "https://links.papareact.com/"
  }
};

module.exports = nextConfig;
