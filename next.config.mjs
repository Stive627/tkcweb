/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'tkcapi.tsasoft.com',
          port: '',
          pathname: '/**',
          search: '',
        },
        {
          protocol:'https',
          hostname:'bucket-tkc.s3.ap-south-1.amazonaws.com',
          port:'',
          pathname:'/**',
          search:''
        }
      ],
    },
};

export default nextConfig;