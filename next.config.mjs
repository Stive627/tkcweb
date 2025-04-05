/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'https://tmxpddkrvu.ap-south-1.awsapprunner.com',
          port: '',
          pathname: '/**',
          search: '',
        },
      ],
    },
};

export default nextConfig;