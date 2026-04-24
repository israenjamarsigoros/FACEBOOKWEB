/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // This is the most important line!
  basePath: '/FACEBOOKWEB',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;