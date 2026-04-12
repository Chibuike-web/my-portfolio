import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	logging: { fetches: { fullUrl: true } },
	experimental: {
		turbopackFileSystemCacheForBuild: true,
		optimizePackageImports: ["@remixicon/react"],
	},
	reactStrictMode: true,
	typedRoutes: true,
};

export default nextConfig;
