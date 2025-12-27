/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // basePath: "/portfolio", <--- MAKE SURE THIS IS GONE OR COMMENTED //
};

export default nextConfig;