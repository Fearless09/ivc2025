import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {hostname: "picsum.photos", protocol: "https"},
    ]
  },
};

export default nextConfig;
