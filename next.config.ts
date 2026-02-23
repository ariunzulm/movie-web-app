import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    token: process.env.token,
  },
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
