/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'kashlan-law.vercel.app',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'kash.law',
        port: '',
        pathname: '/**',
      },
    ],
  },
};
  
export default nextConfig;