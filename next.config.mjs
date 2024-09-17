/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:["fakestoreapi.com"]
    },
    experimental: {
        instrumentationHook: true,
    },
    // output:"export"
};

export default nextConfig;
