import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	logging: { fetches: { fullUrl: true } },
	reactCompiler: false,
	experimental: {
		optimizePackageImports: ["lucide-react", "@base-ui/react"],
		turbopackFileSystemCacheForBuild: true,
	},
	reactStrictMode: true,
	typedRoutes: true,
};

export default nextConfig;
