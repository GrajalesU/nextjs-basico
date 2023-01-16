/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    unoptimized: false,
  },
  rewrites: async function(){
    return [
        {
            source: "/avocado/:path*",
            destination: "/product/:path*"
        }
    ]
  }
};

module.exports = nextConfig;
