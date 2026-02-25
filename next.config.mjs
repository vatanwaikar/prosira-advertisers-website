/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,

  typescript: {
    ignoreBuildErrors: false, // safer production
  },

  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60,

     deviceSizes: [320, 420, 640, 768, 1024, 1280, 1440],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

  },

  experimental: {
    optimizePackageImports: ["lucide-react"],
     optimizeCss: true,
  },
};

export default nextConfig;
