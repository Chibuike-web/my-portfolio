import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	logging: { fetches: { fullUrl: true } },
	cacheComponents: true,
	experimental: {
		optimizePackageImports: ["lucide-react"],
	},
	reactStrictMode: true,
	typedRoutes: true,
};

export default nextConfig;
