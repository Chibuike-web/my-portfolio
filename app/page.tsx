import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";
import { Suspense } from "react";

export const metadata: Metadata = {
	title: "Product Engineer & Design Engineer",
	description:
		"Chibuike Maduabuchi builds AI-driven systems and high-trust digital products. Selected work across design engineering, product design, and frontend development.",
	openGraph: {
		title: "Chibuike Maduabuchi | Product Engineer",
		description: "AI systems, design engineering, and product-focused frontend work.",
		url: "https://chibuike-maduabuchi.vercel.app",
		images: [
			{
				url: "/og-image.png",
				width: 1200,
				height: 630,
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Chibuike Maduabuchi | Product Engineer",
		description: "AI systems, design engineering, and product-focused frontend work.",
		images: ["/og-image.png"],
	},
};

export default function Page() {
	return (
		<Suspense>
			<HomePage />
		</Suspense>
	);
}
