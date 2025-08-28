import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    domains: ['res.cloudinary.com'],
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['react-icons'],
  },
};

export default nextConfig;
