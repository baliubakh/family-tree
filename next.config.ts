import type { NextConfig } from "next";
import NextTranspile from "next-transpile-modules";

const nextConfig: NextConfig = {
  /* config options here */
};

export const withTM = NextTranspile(["@balkangraph/familytree.js"]);

export default nextConfig;
