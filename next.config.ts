import type { NextConfig } from "next";
import createMDX from '@next/mdx';

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  // Disable Turbopack to avoid MDX serialization issues
  experimental: {
    turbo: undefined,
  },
};

const withMDX = createMDX({
  // Simplified config for Next.js 16 compatibility
});

export default withMDX(nextConfig);
