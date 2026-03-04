/** @type {import('next').NextConfig} */
const nextConfig = {images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.fastly.com',
        port: '',
        pathname: 'www.fastly.com',
        search: '',
      },
    ],
  },
  
  reactCompiler: true,
};

export default nextConfig;
