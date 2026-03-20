import type { Metadata } from "next";
import Image from "next/image";
import portrait from "@/assets/image.png";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
	title: "About",
	description:
		"Learn more about Chibuike Maduabuchi, his background across civil engineering, brand design, product design, and frontend development.",
};

export default function AboutPage() {
	return (
		<PageShell>
			<main className="mx-auto flex w-full max-w-[81rem] flex-col justify-between px-6 xl:px-0">
				<section className="mt-[3.25rem] grid grid-cols-1 gap-y-8 lg:mt-[6.5rem] lg:grid-cols-3 lg:gap-x-6 lg:gap-y-0">
					<Image
						src={portrait}
						alt="A portrait of Chibuike"
						className="w-full rounded-2xl ring-1 ring-black/5 md:rounded-[1.25rem]"
						sizes="(max-width: 1024px) 100vw, 416px"
					/>
					<div className="col-span-2 flex flex-col gap-4">
						<h1 className="text-[2rem] font-semibold text-balance text-gray-700 md:text-[4rem]">
							Hi, I&apos;m Chibuike Maduabuchi
						</h1>
						<div className="col-span-2 space-y-3.5 text-lg leading-[1.6] text-gray-500">
							<p>
								I&apos;ve always been drawn to how things fit together, how small parts connect to
								create something bigger. That mindset led me to study Civil Engineering.
							</p>
							<p>
								Over time, I became more curious about the digital world, a space shaped entirely by
								people, where the only limits are imagination and intent.
							</p>
							<p>
								I started in brand design, crafting the visual identities of startups and
								early-stage companies. Then I moved into product design, building digital solutions
								that solve real problems. Along the way, I learned to code so I could prototype,
								test, and bring ideas to life faster.
							</p>
							<p>
								Today, I work at the intersection of design and engineering. I focus on
								accessibility, clarity, and ease of use, designing systems that adapt to people, not
								the other way around.
							</p>
						</div>
					</div>
				</section>

				<section className="mt-[3.25rem] grid grid-cols-1 gap-y-6 lg:mt-[6.5rem] lg:grid-cols-3 lg:gap-x-6 lg:gap-y-0">
					<p className="font-secondary font-medium tracking-[0.08em] text-gray-500">EXPERIENCE</p>
					<div className="col-span-2 flex flex-col gap-10">
						<div className="grid grid-cols-1 gap-y-4 lg:grid-cols-2 lg:gap-x-6">
							<p className="flex flex-col leading-[1.6]">
								<span className="font-secondary font-bold tracking-[0.08em] text-gray-700">
									INDEPENDENT PRACTICE
								</span>
								<span className="font-secondary font-medium tracking-[0.08em] text-gray-500">
									2024-PRESENT
								</span>
							</p>
							<p className="leading-[1.6] text-gray-500">
								Designed and built responsive web applications using React.js and Next.js,
								delivering seamless user experiences and production-ready solutions for diverse
								clients.
							</p>
						</div>
						<div className="grid grid-cols-1 gap-y-4 lg:grid-cols-2 lg:gap-x-6">
							<p className="flex flex-col leading-[1.6]">
								<span className="font-secondary font-bold tracking-[0.08em] text-gray-700">
									KULIPAL TECHNOLOGIES LIMITED
								</span>
								<span className="font-secondary font-medium tracking-[0.08em] text-gray-500">
									2024-2025
								</span>
							</p>
							<p className="leading-[1.6] text-gray-500">
								Designed different product features across mobile and web platform while
								collaborating effectively with engineering to ensure pixel-perfect implementation.
							</p>
						</div>
					</div>
				</section>

				<section className="my-[3.25rem] grid grid-cols-1 gap-y-6 lg:my-[6.5rem] lg:grid-cols-3 lg:gap-x-6 lg:gap-y-0">
					<p className="font-secondary font-medium tracking-[0.08em] text-gray-500">EDUCATION</p>
					<div className="col-span-2 flex flex-col gap-10">
						<div className="grid grid-cols-1 gap-y-4 lg:grid-cols-2 lg:gap-x-6">
							<p className="font-secondary font-bold leading-[1.6] tracking-[0.08em] text-gray-700">
								UNIVERSITY OF NIGERIA NSUKKA
							</p>
							<p className="flex flex-col leading-[1.6]">
								<span className="font-semibold text-gray-700">Bachelor Of Engineering</span>
								<span className="font-semibold text-gray-500">Civil Engineering</span>
							</p>
						</div>
						<div className="grid grid-cols-1 items-center gap-y-4 lg:grid-cols-2 lg:gap-x-6">
							<p className="font-secondary font-bold leading-[1.6] tracking-[0.08em] text-gray-700">
								UI/UX DESIGN COURSE
							</p>
							<p className="font-semibold text-gray-700">Checklearn Batch (Experienced)</p>
						</div>
					</div>
				</section>
			</main>
		</PageShell>
	);
}
