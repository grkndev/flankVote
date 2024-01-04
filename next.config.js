/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    esmExternals: "loose", // <-- add this
    serverComponentsExternalPackages: ["mongoose"] // <-- and this
  },
  images:{
    domains:[
      "upload.wikimedia.org",
      "liquipedia.net",
      "owcdn.net"
    ]
  }
}

module.exports = nextConfig
