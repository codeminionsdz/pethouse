/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/products",
        destination: "/categories",
        permanent: false,
      },
      {
        source: "/cart",
        destination: "/checkout",
        permanent: false,
      },
    ]
  },
}

export default nextConfig
