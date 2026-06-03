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
		icon: [{ url: "/profile.png", type: "image/svg+xml", sizes: "any" }],
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
				<div
					aria-hidden="true"
					className="pointer-events-none fixed inset-x-0 bottom-0 z-30 select-none"
					style={{ height: "120px" }}
				>
					<div
						className="absolute inset-0"
						style={{
							backdropFilter: "blur(0.5px)",
							WebkitBackdropFilter: "blur(0.5px)",
							maskImage: "linear-gradient(to top, transparent 67%, black 84%, transparent 100%)",
							WebkitMaskImage:
								"linear-gradient(to top, transparent 67%, black 84%, transparent 100%)",
						}}
					/>

					<div
						className="absolute inset-0"
						style={{
							backdropFilter: "blur(1px)",
							WebkitBackdropFilter: "blur(1px)",
							maskImage: "linear-gradient(to top, transparent 50%, black 67%, transparent 84%)",
							WebkitMaskImage:
								"linear-gradient(to top, transparent 50%, black 67%, transparent 84%)",
						}}
					/>

					<div
						className="absolute inset-0"
						style={{
							backdropFilter: "blur(2px)",
							WebkitBackdropFilter: "blur(2px)",
							maskImage: "linear-gradient(to top, transparent 34%, black 50%, transparent 67%)",
							WebkitMaskImage:
								"linear-gradient(to top, transparent 34%, black 50%, transparent 67%)",
						}}
					/>

					<div
						className="absolute inset-0"
						style={{
							backdropFilter: "blur(4px)",
							WebkitBackdropFilter: "blur(4px)",
							maskImage: "linear-gradient(to top, transparent 17%, black 34%, transparent 50%)",
							WebkitMaskImage:
								"linear-gradient(to top, transparent 17%, black 34%, transparent 50%)",
						}}
					/>

					<div
						className="absolute inset-0"
						style={{
							backdropFilter: "blur(8px)",
							WebkitBackdropFilter: "blur(8px)",
							maskImage: "linear-gradient(to top, transparent 0%, black 17%, transparent 34%)",
							WebkitMaskImage:
								"linear-gradient(to top, transparent 0%, black 17%, transparent 34%)",
						}}
					/>

					<div
						className="absolute inset-0"
						style={{
							backdropFilter: "blur(16px)",
							WebkitBackdropFilter: "blur(16px)",
							maskImage: "linear-gradient(to top, transparent 0%, black 0%, transparent 17%)",
							WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 0%, transparent 17%)",
						}}
					/>

					<div
						className="absolute inset-0"
						style={{
							background: "linear-gradient(to bottom, transparent, var(--background))",
						}}
					/>
				</div>
			</body>
		</html>
	);
}
