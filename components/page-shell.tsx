import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

export function PageShell({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Navbar />
			{children}
			<Footer />
		</>
	);
}
