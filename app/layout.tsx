import type { Metadata } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	metadataBase: new URL("https://chibuike-maduabuchi.vercel.app"),
	title: {
		default: "Chibuike Maduabuchi",
		template: "%s | Chibuike Maduabuchi",
	},
	description:
		"Portfolio of Chibuike Maduabuchi, a design engineer blending design and code to build thoughtful digital products.",
	icons: {
		icon: "/profile.svg",
	},
	openGraph: {
		title: "Chibuike Maduabuchi | Design Engineer",
		description: "AI systems, design engineering, and product-focused frontend work.",
		url: "https://chibuike-maduabuchi.vercel.app",
		siteName: "Chibuike Maduabuchi",
		images: [{ url: "/og-image.png", width: 1200, height: 630 }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Chibuike Maduabuchi | Design Engineer",
		description: "AI systems, design engineering, and product-focused frontend work.",
		images: ["/og-image.png"],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${inter.variable} ${geistMono.variable} antialiased`}
			suppressHydrationWarning
		>
			<body>
				{children}
			</body>
		</html>
	);
}
