import { Footer } from "@/components/layouts/footer";
import { Hero } from "@/components/layouts/hero";
import { Navbar } from "@/components/layouts/navbar";

export default function Home() {
	return (
		<main className="w-full max-w-[782px] py-[88px] mx-auto px-4">
			<Navbar />
			<Hero />
			<Footer />
		</main>
	);
}
