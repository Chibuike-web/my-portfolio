import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	logging: { fetches: { fullUrl: true } },
	reactCompiler: false,
	cacheComponents: true,
	experimental: {
		optimizePackageImports: ["lucide-react", "@base-ui/react"],
	},
	reactStrictMode: true,
	typedRoutes: true,
};

export default nextConfig;
