import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Compression is handled by Vercel/hosting, but we ensure clean output
  poweredByHeader: false,
};

export default nextConfig;
