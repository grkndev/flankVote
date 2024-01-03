/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    esmExternals: "loose", // <-- add this
    serverComponentsExternalPackages: ["mongoose"] // <-- and this
  },
  images:{
    domains:[
      "upload.wikimedia.org"
    ]
  }
}

module.exports = nextConfig
