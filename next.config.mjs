/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: "/practice-areas/:slug",
        destination: "/zh/practice-areas/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
