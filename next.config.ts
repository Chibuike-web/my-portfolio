import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	logging: { fetches: { fullUrl: true } },
	experimental: { turbopackFileSystemCacheForBuild: true },
	reactStrictMode: true,
	typedRoutes: true,
};

export default nextConfig;
