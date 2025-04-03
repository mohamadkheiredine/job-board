import { NextConfig } from 'next';
import withBundleAnalyzer from '@next/bundle-analyzer';

const config: NextConfig = {
  reactStrictMode: false, // Disable React Strict Mode for faster builds
  
  webpack(config, { isServer }) {
    config.cache = false; // Disable webpack caching
    return config;
  },

  images: {
    loader: 'default', // Disable image optimization in dev mode
  },

  experimental: {
    // Keep other experimental features if required by your project
  },
};

export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})(config);
