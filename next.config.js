/** @type {import('next').NextConfig} */
const nextConfig = { images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "w7.pngwing.com",
        port: "",
        pathname: "/pngs/**",
      },
      {
        protocol:"https",
        hostname:"cdn.vatanbilgisayar.com"
      }
    ],
  },}

module.exports = nextConfig
