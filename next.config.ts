import type { NextConfig } from "next";

const nextConfig: NextConfig = {


    allowedDevOrigins: ["http://192.168.56.1:3000", "http://172.18.0.1:3000"],
    compiler: {
        styledComponents: true,
    },


  /* config options here */

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

export default nextConfig;
