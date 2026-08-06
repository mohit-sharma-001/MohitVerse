/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['ogl', 'three', 'postprocessing'],
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        encoding: false,
      };
    }
    return config;
  },
};

export default nextConfig;
