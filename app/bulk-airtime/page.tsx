import type { Metadata } from "next";
import { Button } from "@/components/button";
import { LazyImage } from "@/components/lazy-image";
import heroImage from "@/assets/bulk-airtime/hero.webp";
import firstImage from "@/assets/bulk-airtime/first.webp";
import secondImage from "@/assets/bulk-airtime/second.webp";
import thirdImage from "@/assets/bulk-airtime/third.webp";
import fourthImage from "@/assets/bulk-airtime/fourth.webp";
import fifthImage from "@/assets/bulk-airtime/fifth.webp";
import sixthImage from "@/assets/bulk-airtime/sixth.webp";
import seventhImage from "@/assets/bulk-airtime/seventh.webp";
import eighthImage from "@/assets/bulk-airtime/eighth.webp";
import { RiCloseLine } from "@remixicon/react";

export const metadata: Metadata = {
	title: "Bulk Airtime",
	description: "Case study for a mobile bulk airtime feature designed for Nomba.",
};

export default function BulkAirtimePage() {
	return (
		<main className="mx-auto w-full max-w-[81rem] px-6 xl:px-0">
			<nav className="flex w-full items-center justify-between py-8 text-sm md:text-base">
				<header className="flex flex-col gap-2.5">
					<p className="font-secondary font-semibold text-gray-700">BULK AIRTIME</p>
					<p className="font-secondary font-semibold text-gray-500">
						LESS STRESS, MORE CELEBRATION
					</p>
				</header>
				<Button as="link" href="/" fullWidth={false} aria-label="Back to home">
					<RiCloseLine className="size-5" />
				</Button>
			</nav>

			<h1 className="text-[2rem] font-semibold tracking-[-0.02em] text-balance md:text-[4rem]">
				Crafting a mobile airtime feature that saves time when it matters most
			</h1>
			<figure className="mt-11 mb-[3.25rem] w-full xl:h-[52.5rem] md:mt-[5.5rem] md:mb-[6.5rem]">
				<LazyImage
					src={heroImage}
					alt="A mockup of the Send Airtime screen displayed on an iPhone 16 Pro resting on a bubbly surface"
					className="h-full rounded-[1rem] object-cover ring-1 ring-black/5 md:rounded-[2rem]"
					sizes="(max-width: 1280px) 100vw, 1296px"
					loading="eager"
				/>
			</figure>

			<section className="flex flex-col gap-6 md:flex-row">
				<div className="row-span-3 w-full max-w-[26rem] font-secondary text-xl font-bold text-gray-700 md:text-2xl">
					NOMBA
				</div>
				<div className="grid max-w-[53.5rem] grid-cols-1 gap-6 sm:grid-cols-2">
					<p className="w-full text-sm leading-[1.6] font-medium text-gray-500 md:text-base">
						As part of a design task for Nomba&apos;s internship application stage two, I created a
						mobile feature that makes it easier to send airtime to multiple people.
					</p>
					<p className="w-full text-sm leading-[1.6] font-medium text-gray-500 md:text-base">
						I independently mapped user flows, designed wireframes, and focused on solving a real
						user problem with a clear, simple solution.
					</p>
					<div className="flex w-full flex-col gap-1">
						<h2 className="font-secondary text-sm font-semibold text-gray-700 md:text-base">
							PROBLEM STATEMENT
						</h2>
						<p className="w-full text-sm leading-[1.6] font-medium text-gray-500 md:text-base">
							Sending airtime to multiple users especially during special occasions is often slow,
							repetitive, and prone to errors. I designed a feature that provides users with a
							simple way to send airtime to several recipients in one transaction.
						</p>
					</div>
					<div className="flex w-full flex-col gap-1">
						<h2 className="font-secondary text-sm font-semibold text-gray-700 md:text-base">
							SOLUTION OVERVIEW
						</h2>
						<p className="w-full text-sm leading-[1.6] font-medium text-gray-500 md:text-base">
							I designed a bulk airtime feature structured around two core flows: adding recipients
							from contact list or manually entering recipients&apos; numbers.
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
								1 week
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="mt-[3.25rem] md:mt-[6.5rem]">
				<LazyImage
					src={firstImage}
					alt="Image showing three screens side by side: Home screen on the left, Choose Airtime screen in the center, and Send to Multiple People screen on the right"
					className="rounded-[1rem] ring-1 ring-black/5 md:rounded-[2rem]"
				/>
				<p className="mt-6 w-full max-w-[53.4375rem] text-sm leading-[1.6] font-medium text-gray-500 md:mt-12 md:text-base">
					By building on existing and familiar patterns, I crafted designs that empower users to
					easily complete both single and bulk airtime transfers. Key actions are easy to access,
					and the straightforward flow helps users stay in control without needing additional
					guidance.
				</p>
			</section>

			<section className="mt-[3.25rem] md:mt-[6.5rem]">
				<div className="flex flex-col gap-2.5">
					<h2 className="text-2xl font-semibold tracking-[-0.02em] text-gray-700 md:text-5xl">
						Select from contacts
					</h2>
					<p className="mb-6 w-full max-w-[53.4375rem] text-sm leading-[1.6] font-medium text-gray-500 md:mb-12 md:text-base">
						I made it easy to select and deselect any contact through tap-based interactions with
						immediate visual feedback. I also introduced search, allowing users to quickly find who
						they need and making the selection process feel smooth and effortless.
					</p>
				</div>
				<LazyImage
					src={secondImage}
					alt="Image showing two screens side by side - Select from contacts unselected and the same screen with selection"
					className="rounded-[1rem] ring-1 ring-black/5 md:rounded-[2rem]"
				/>
			</section>

			<section className="mt-[3.25rem] md:mt-[6.5rem]">
				<LazyImage
					src={thirdImage}
					alt="Image showing two screens side by side - Send Airtime with the first contact selected and the same screen with the second contact selected"
					className="rounded-[1rem] ring-1 ring-black/5 md:rounded-[2rem]"
				/>
				<p className="mt-6 w-full max-w-[53.4375rem] text-sm leading-[1.6] font-medium text-gray-500 md:mt-12 md:text-base">
					Clickable chips let users move through recipients quickly without losing focus or being
					pulled away from the main action.
				</p>
			</section>

			<LazyImage
				src={fourthImage}
				alt="Two screens side by side: one showing the Summary screen, and the other showing the same screen with a payment bottom sheet visible"
				className="mt-[3.25rem] rounded-[1rem] ring-1 ring-black/5 md:mt-[6.5rem] md:rounded-[2rem]"
			/>

			<section className="mt-[3.25rem] md:mt-[6.5rem]">
				<div className="flex flex-col gap-2.5">
					<h2 className="text-2xl font-semibold tracking-[-0.02em] text-gray-700 md:text-5xl">
						Enter numbers manually
					</h2>
					<p className="mb-6 w-full max-w-[53.4375rem] text-sm leading-[1.6] font-medium text-gray-500 md:mb-12 md:text-base">
						Manually entering recipient numbers is simple and clear. A handy little helper is always
						nearby to keep things smooth and frustration-free.
					</p>
				</div>
				<LazyImage
					src={fifthImage}
					alt="Three screens side by side: the left shows manual number input, the center shows a help tip bottom sheet, and the right shows an error state for the input field"
					className="rounded-[1rem] ring-1 ring-black/5 md:rounded-[2rem]"
				/>
			</section>

			<LazyImage
				src={sixthImage}
				alt="Image showing two screens side by side - Send Airtime with the first recipient number selected and the same screen with the second recipient number selected"
				className="mt-[3.25rem] rounded-[1rem] ring-1 ring-black/5 md:mt-[6.5rem] md:rounded-[2rem]"
			/>
			<LazyImage
				src={seventhImage}
				alt="Three screens side by side: the left shows the Summary screen, the center shows the Summary screen with the Remove Recipient modal open, and the right shows the success modal after removal"
				className="mt-[3.25rem] rounded-[1rem] ring-1 ring-black/5 md:mt-[6.5rem] md:rounded-[2rem]"
			/>
			<LazyImage
				src={eighthImage}
				alt="Four images side by side showing successful and failed airtime purchase summaries and transaction details"
				className="my-[3.25rem] rounded-[1rem] ring-1 ring-black/5 md:my-[6.5rem] md:rounded-[2rem]"
			/>
		</main>
	);
}
