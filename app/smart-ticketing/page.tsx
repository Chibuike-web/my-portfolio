import type { Metadata } from "next";
import { Button } from "@/components/button";
import { LazyImage } from "@/components/lazy-image";
import heroImage from "@/assets/smart-ticketing/hero-image.webp";
import firstImage from "@/assets/smart-ticketing/first.webp";
import secondImage from "@/assets/smart-ticketing/second.webp";
import thirdImage from "@/assets/smart-ticketing/third.webp";
import fourthImage from "@/assets/smart-ticketing/fourth.webp";
import fifthImage from "@/assets/smart-ticketing/fifth.webp";
import sixthImage from "@/assets/smart-ticketing/sixth.webp";
import seventhImage from "@/assets/smart-ticketing/seventh.webp";
import eighthImage from "@/assets/smart-ticketing/eighth.webp";
import ninthImage from "@/assets/smart-ticketing/ninth.webp";
import tenthImage from "@/assets/smart-ticketing/tenth.webp";
import eleventhImage from "@/assets/smart-ticketing/eleventh.webp";
import twelfthImage from "@/assets/smart-ticketing/twelfth.webp";
import thirteenthImage from "@/assets/smart-ticketing/thirteenth.webp";
import { RiCloseLine } from "@remixicon/react";

export const metadata: Metadata = {
	title: "Smart Ticketing",
	description: "Case study for Kulipal's multi-day event ticketing flow redesign.",
};

const flowImages = [
	{
		src: fourthImage,
		alt: "Image showing two screens: the first shows the Select Ticket screen for a multi-day event, and the second shows the same screen for a single-day event",
	},
	{
		src: fifthImage,
		alt: "Image showing two screens: the first shows the Ticket Summary screen for a multi-day event, and the second shows the same screen for a single-day event",
	},
	{
		src: sixthImage,
		alt: "Image showing two screens: the first shows the promo section on the Ticket Summary screen for a multi-day event, and the second shows the promo section for a single-day event",
	},
	{
		src: seventhImage,
		alt: "Image showing two screens: the first shows the promo code section, and the second shows the bottom sheet for entering a promo code",
	},
	{
		src: eighthImage,
		alt: "Image showing two screens: the first shows the Payment Details screen with two payment options, and the second shows a success modal confirming successful payment",
	},
];

const redesignImages = [
	{
		src: tenthImage,
		alt: "Image showing three screens: the first shows the success screen for funds added and the center one shows a failed transaction screen and the last shows transaction details",
	},
	{
		src: eleventhImage,
		alt: "Image showing three screens: the first shows the success screen for funds added, the center shows the failed transaction screen, and the last shows the transaction details screen",
	},
	{
		src: twelfthImage,
		alt: "Image showing three screens: the first shows the Update Wallet PIN screen, the center shows an error state for the PIN input, and the last shows a modal confirming successful update",
	},
	{
		src: thirteenthImage,
		alt: "Image showing three screens: the first shows the Send Funds screen with beneficiaries, the center shows the full list of beneficiaries, and the third shows a selected list of beneficiaries",
	},
];

export default function SmartTicketingPage() {
	return (
		<main className="mx-auto w-full max-w-[81rem] px-6 xl:px-0">
			<nav className="flex w-full items-center justify-between py-8 text-sm md:text-base">
				<header className="flex flex-col gap-2.5">
					<p className="font-secondary font-semibold text-gray-700">SMART TICKETING</p>
					<p className="font-secondary font-semibold text-gray-500">ONE FLOW, EVERY DATE</p>
				</header>
				<Button as="link" href="/" fullWidth={false} aria-label="Back to home">
					<RiCloseLine className="size-5" />
				</Button>
			</nav>

			<h1 className="text-[2rem] font-semibold tracking-[-0.02em] text-balance md:text-[4rem]">
				Redefining how users browse, select, and buy tickets across multiple event days
			</h1>
			<figure className="mt-11 mb-[3.25rem] w-full xl:h-[52.5rem] md:mt-[5.5rem] md:mb-[6.5rem]">
				<LazyImage
					src={heroImage}
					alt="Two stacked iPhone 16 Pro devices resting on a rocky surface, showing the Event Details and Select Ticket screens"
					className="h-full rounded-[1rem] object-cover ring-1 ring-black/5 md:rounded-[2rem]"
					sizes="(max-width: 1280px) 100vw, 1296px"
				/>
			</figure>

			<section className="flex flex-col gap-6 md:flex-row">
				<div className="row-span-3 w-full max-w-[26rem] font-secondary text-xl font-bold text-gray-700 md:text-2xl">
					KULIPAL TECHNOLOGIES
				</div>
				<div className="grid max-w-[53.5rem] grid-cols-1 gap-6 sm:grid-cols-2">
					<p className="w-full text-sm leading-[1.6] font-medium text-gray-500 md:text-base">
						As part of a broader redesign at Kulipal, I focused on improving the event purchasing
						experience within the customer-facing platform.
					</p>
					<p className="w-full text-sm leading-[1.6] font-medium text-gray-500 md:text-base">
						Led end-to-end design of Kulipal&apos;s event platform, improving the ticket flow,
						integrating new features, and refining the experience for smoother experience.
					</p>
					<div className="flex w-full flex-col gap-1">
						<h2 className="font-secondary text-sm font-semibold text-gray-700 md:text-base">
							PROBLEM STATEMENT
						</h2>
						<p className="w-full text-sm leading-[1.6] font-medium text-gray-500 md:text-base">
							The platform only supported single-day events, creating friction with promotions and
							no way to buy tickets across multiple days. Users struggled to browse, select, and
							purchase tickets for multi-day events clearly and efficiently.
						</p>
					</div>
					<div className="flex w-full flex-col gap-1">
						<h2 className="font-secondary text-sm font-semibold text-gray-700 md:text-base">
							SOLUTION OVERVIEW
						</h2>
						<p className="w-full text-sm leading-[1.6] font-medium text-gray-500 md:text-base">
							Redesigned the flow to support multi-day events with clear date selection, tabbed
							navigation, and streamlined promo integration. The result is a simpler and more
							intuitive ticketing experience.
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
								2 months
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="mt-[3.25rem] md:mt-[6.5rem]">
				<LazyImage
					src={firstImage}
					alt="Image showing three elements: the left shows a paid event card, the center displays a vertical stack of events, and the right shows a free event card"
					className="rounded-[1rem] ring-1 ring-black/5 md:rounded-[2rem]"
				/>
				<p className="mt-6 w-full max-w-[53.4375rem] text-sm leading-[1.6] font-medium text-gray-500 md:mt-12 md:text-base">
					For the entry screen, I drew inspiration from Airbnb&apos;s card layout and applied a
					content-first approach that prioritizes scannability. Each card highlights key details
					like date, location, and availability at a glance.
				</p>
			</section>

			<section className="mt-[3.25rem] md:mt-[6.5rem]">
				<LazyImage
					src={secondImage}
					alt="Two design screens side by side: the first shows event details for a multi-day event, and the second shows event details for a single-day event"
					className="rounded-[1rem] ring-1 ring-black/5 md:rounded-[2rem]"
				/>
				<p className="mt-6 w-full max-w-[53.4375rem] text-sm leading-[1.6] font-medium text-gray-500 md:mt-12 md:text-base">
					Key event details are shown clearly, whether it&apos;s a one-day show or a multi-day
					experience. The focus was on helping users quickly understand what&apos;s happening and
					when.
				</p>
			</section>

			<section className="mt-[3.25rem] md:mt-[6.5rem]">
				<LazyImage
					src={thirdImage}
					alt="Image showing two screens: the first displays the Select Event Day screen with unselected options, and the second shows the same screen with selected options"
					className="rounded-[1rem] ring-1 ring-black/5 md:rounded-[2rem]"
				/>
				<p className="mt-6 w-full max-w-[53.4375rem] text-sm leading-[1.6] font-medium text-gray-500 md:mt-12 md:text-base">
					I designed a low-friction selection flow that encourages quick decisions through clear
					options and immediate visual feedback.
				</p>
			</section>

			{flowImages.map((image) => (
				<LazyImage
					key={image.alt}
					src={image.src}
					alt={image.alt}
					className="mt-[3.25rem] rounded-[1rem] ring-1 ring-black/5 md:mt-[6.5rem] md:rounded-[2rem]"
				/>
			))}

			<section className="mt-[3.25rem] md:mt-[6.5rem]">
				<p className="mb-6 w-full max-w-[53.4375rem] text-sm leading-[1.6] font-medium text-gray-500 md:mb-12 md:text-base">
					Unfortunately, the entire team was let go, and as a result, much of my work was ultimately
					shelved. Below are some of my contributions to the entire mobile app redesign.
				</p>
				<LazyImage
					src={ninthImage}
					alt="Three app screens: the first shows the Wallet screen, the middle shows the Add Funds screen with input fields, and the third shows the Wallet screen with a toast notification"
					className="rounded-[1rem] ring-1 ring-black/5 md:rounded-[2rem]"
				/>
			</section>

			{redesignImages.map((image, index) => (
				<LazyImage
					key={image.alt}
					src={image.src}
					alt={image.alt}
					className={`mt-[3.25rem] rounded-[1rem] ring-1 ring-black/5 md:mt-[6.5rem] md:rounded-[2rem] ${
						index === redesignImages.length - 1 ? "mb-[3.25rem] md:mb-[6.5rem]" : ""
					}`}
				/>
			))}
		</main>
	);
}
