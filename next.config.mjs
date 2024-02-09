/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    unoptimized : true,
  },
  async rewrites() {
    return [
      {
        source: '/api/staging/:path*',
        destination: 'http://localhost:3000/:path*',
      },
    ]
  },
};

export default nextConfig;
