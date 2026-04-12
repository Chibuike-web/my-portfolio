import type { Metadata } from "next";
import { Button } from "@/components/button";
import { LazyImage } from "@/components/lazy-image";
import heroImage from "@/assets/burnout-leave/hero-image.webp";
import firstImage from "@/assets/burnout-leave/first.webp";
import secondImage from "@/assets/burnout-leave/second.webp";
import thirdImage from "@/assets/burnout-leave/third.webp";
import fourthImage from "@/assets/burnout-leave/fourth.webp";
import fifthImage from "@/assets/burnout-leave/fifth.webp";
import sixthImage from "@/assets/burnout-leave/sixth.webp";
import seventhImage from "@/assets/burnout-leave/seventh.webp";
import eighthImage from "@/assets/burnout-leave/eighth.webp";
import ninthImage from "@/assets/burnout-leave/ninth.webp";
import tenthImage from "@/assets/burnout-leave/tenth.webp";
import eleventhImage from "@/assets/burnout-leave/eleventh.webp";
import twelfthImage from "@/assets/burnout-leave/twelfth.webp";
import { RiCloseLine } from "@remixicon/react";

export const metadata: Metadata = {
	title: "Burnout Leave",
	description: "Case study for Zenly's burnout management dashboard for admins.",
};

export default function BurnoutLeavePage() {
	return (
		<main className="mx-auto w-full max-w-[81rem] px-6 xl:px-0">
			<nav className="flex w-full items-center justify-between py-8 text-sm md:text-base">
				<header className="flex flex-col gap-2.5">
					<p className="font-secondary font-semibold text-gray-700">BURNOUT LEAVE</p>
					<p className="font-secondary font-semibold text-gray-500">
						LESS BURNOUT, MORE PRODUCTIVITY
					</p>
				</header>
				<Button as="link" href="/" fullWidth={false} aria-label="Back to home">
					<RiCloseLine className="size-5" />
				</Button>
			</nav>

			<h1 className="text-[2rem] font-semibold tracking-[-0.02em] text-balance md:text-[4rem]">
				Smarter Burnout Tracking for Stronger Team Results
			</h1>
			<figure className="mt-11 mb-[3.25rem] w-full xl:h-[52.5rem] md:mt-[5.5rem] md:mb-[6.5rem]">
				<LazyImage
					src={heroImage}
					alt="Image showing a MacBook laptop on a concrete surface displaying the dashboard screen"
					className="h-full rounded-[1rem] object-cover ring-1 ring-black/5 md:rounded-[2rem]"
					sizes="(max-width: 1280px) 100vw, 1296px"
				/>
			</figure>

			<section className="flex flex-col gap-6 md:flex-row">
				<div className="row-span-3 w-full max-w-[26rem] font-secondary text-xl font-bold text-gray-700 md:text-2xl">
					ZENLY
				</div>
				<div className="grid max-w-[53.5rem] grid-cols-1 gap-6 sm:grid-cols-2">
					<p className="w-full text-sm leading-[1.6] font-medium text-gray-500 md:text-base">
						Zenly is a final project for Checklearn Intermediate UI/UX Design Batch. The idea is to
						build a system that can anticipate each team member&apos;s burnout state based on the
						mental difficulty of the work they have done so far.
					</p>
					<p className="w-full text-sm leading-[1.6] font-medium text-gray-500 md:text-base">
						We worked on a team of three and alternated leadership positions every week. I worked on
						the admin part of the product.
					</p>
					<div className="flex w-full flex-col gap-1">
						<h2 className="font-secondary text-sm font-semibold text-gray-700 md:text-base">
							PROBLEM STATEMENT
						</h2>
						<p className="w-full text-sm leading-[1.6] font-medium text-gray-500 md:text-base">
							Many team members struggle to recognize early signs of burnout and often fail to take
							annual leave until exhaustion has already affected their productivity and well-being.
						</p>
					</div>
					<div className="flex w-full flex-col gap-1">
						<h2 className="font-secondary text-sm font-semibold text-gray-700 md:text-base">
							SOLUTION OVERVIEW
						</h2>
						<p className="w-full text-sm leading-[1.6] font-medium text-gray-500 md:text-base">
							I designed the admin side of Zenly&apos;s burnout management dashboard. Admins can
							create, edit, and delete teams, assign team leads, and configure burnout limits for
							each group.
						</p>
					</div>
					<div className="flex w-full items-start gap-4">
						<div className="flex w-full flex-col gap-1">
							<h2 className="font-secondary text-sm font-semibold text-gray-700 md:text-base">
								ROLE
							</h2>
							<p className="w-full text-sm leading-[1.6] font-medium text-gray-500 md:text-base">
								Product Designer
							</p>
						</div>
						<div className="flex w-full flex-col gap-1">
							<h2 className="font-secondary text-sm font-semibold text-gray-700 md:text-base">
								DURATION
							</h2>
							<p className="w-full text-sm leading-[1.6] font-medium text-gray-500 md:text-base">
								1 month
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="mt-[3.25rem] md:mt-[6.5rem]">
				<LazyImage
					src={firstImage}
					alt="Image showing a single dashboard"
					className="rounded-[1rem] ring-1 ring-black/5 md:rounded-[2rem]"
				/>
			</section>

			<section className="mt-[3.25rem] md:mt-[6.5rem]">
				<h2 className="text-2xl font-semibold tracking-[-0.02em] text-gray-700 md:text-5xl">
					Create new team
				</h2>
				<LazyImage
					src={secondImage}
					alt="Image showing two team creation screens with modals"
					className="mt-6 rounded-[1rem] ring-1 ring-black/5 md:mt-12 md:rounded-[2rem]"
				/>
				<LazyImage
					src={thirdImage}
					alt="Image showing two team creation screens with supporting states"
					className="mt-6 rounded-[1rem] ring-1 ring-black/5 md:mt-12 md:rounded-[2rem]"
				/>
			</section>

			<section className="mt-[3.25rem] md:mt-[6.5rem]">
				<h2 className="text-2xl font-semibold tracking-[-0.02em] text-gray-700 md:text-5xl">
					Edit Team
				</h2>
				<LazyImage
					src={fourthImage}
					alt="Image showing two edit team screens with modals"
					className="mt-6 rounded-[1rem] ring-1 ring-black/5 md:mt-12 md:rounded-[2rem]"
				/>
				<LazyImage
					src={fifthImage}
					alt="Image showing detailed team edit screens"
					className="mt-6 rounded-[1rem] ring-1 ring-black/5 md:mt-12 md:rounded-[2rem]"
				/>
				<LazyImage
					src={sixthImage}
					alt="Image showing a single team edit screen"
					className="mt-6 rounded-[1rem] ring-1 ring-black/5 md:mt-12 md:rounded-[2rem]"
				/>
			</section>

			<section className="mt-[3.25rem] md:mt-[6.5rem]">
				<h2 className="text-2xl font-semibold tracking-[-0.02em] text-gray-700 md:text-5xl">
					Assign Team Lead
				</h2>
				<LazyImage
					src={seventhImage}
					alt="Image showing a single team lead assignment screen"
					className="mt-6 rounded-[1rem] ring-1 ring-black/5 md:mt-12 md:rounded-[2rem]"
				/>
				<LazyImage
					src={eighthImage}
					alt="Image showing two team lead assignment screens with modals"
					className="mt-6 rounded-[1rem] ring-1 ring-black/5 md:mt-12 md:rounded-[2rem]"
				/>
			</section>

			<section className="mt-[3.25rem] md:mt-[6.5rem]">
				<h2 className="text-2xl font-semibold tracking-[-0.02em] text-gray-700 md:text-5xl">
					Manage Team Member
				</h2>
				<LazyImage
					src={ninthImage}
					alt="Image showing a single manage team member screen"
					className="mt-6 rounded-[1rem] ring-1 ring-black/5 md:mt-12 md:rounded-[2rem]"
				/>
				<LazyImage
					src={tenthImage}
					alt="Image showing another team management screen"
					className="mt-6 rounded-[1rem] ring-1 ring-black/5 md:mt-12 md:rounded-[2rem]"
				/>
				<LazyImage
					src={eleventhImage}
					alt="Image showing a manage team member screen with modal"
					className="mt-6 rounded-[1rem] ring-1 ring-black/5 md:mt-12 md:rounded-[2rem]"
				/>
				<LazyImage
					src={twelfthImage}
					alt="Image showing the final team management screen"
					className="mt-6 mb-[3.25rem] rounded-[1rem] ring-1 ring-black/5 md:mt-12 md:mb-[6.5rem] md:rounded-[2rem]"
				/>
			</section>
		</main>
	);
}
