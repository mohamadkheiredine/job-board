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
  experimental: {
    serverActions: {
      bodySizeLimit: '5mb', // Set the limit to 5 MB or any other size you need
    },
  },
};

export default nextConfig;
