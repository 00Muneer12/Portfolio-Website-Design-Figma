import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Optional: Enable React Strict Mode for better error handling
  experimental: {
    // appDir: true, // Ensure app directory is enabled
  },
};

export default nextConfig;
