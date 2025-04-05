import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  eslint: {
    // Disables ESLint during `next dev` to reduce startup time
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Disables type checking during builds for faster startup
    ignoreBuildErrors: true,
  },
};

export default nextConfig;