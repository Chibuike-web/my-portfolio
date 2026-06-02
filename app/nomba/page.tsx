import { Tag } from "@/components/tag";
import ThemeButton from "@/components/theme-button";
import { Undo2 } from "lucide-react";
import Link from "next/link";

export default function NombaPage() {
	return (
		<main className="mx-auto w-full max-w-[48.875rem] px-4 py-22">
			<nav className="flex items-center justify-between">
				<Link href="/" className="px-4 py-2 bg-surface-muted rounded-full hover:bg-surface-hover">
					<Undo2 className="size-5" />
				</Link>
				<ThemeButton />
			</nav>
			<div className="my-22">
				<div className="flex items-center justify-between">
					<div className="flex flex-col gap-3">
						<h1 className="text-[18px] font-semibold tight">Nomba</h1>
						<div className="flex items-center gap-1.5">
							<p className="font-medium text-[1rem] text-muted-foreground tight no-line-height">
								Bulk Airtime Transfer
							</p>
							<span className="size-0.5 bg-muted-foreground rounded-full" />
							<p className="font-medium text-[1rem] text-muted-foreground tight no-line-height">
								2024
							</p>
						</div>
					</div>
					<div className="flex gap-2">
						{tags.map((tag) => (
							<Tag key={tag.label} label={tag.label} color={tag.color} bgColor={tag.bgColor} />
						))}
					</div>
				</div>
			</div>
			<section id="overview" className="my-22 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-8 ">
				<div className="flex flex-col gap-2 w-full">
					<p className="font-secondary font-semibold text-foreground">PROBLEM STATEMENT</p>
					<p className="font-medium text-muted-foreground tight leading-[1.4]">
						Demola, a frequent airtime sender, faces a stressful and time-consuming process of
						sending airtime to each recipient individually. This repetitive task becomes especially
						inefficient during special occasions like birthdays, when he needs to send airtime to a
						long list of friends and family. To address this pain point, I designed a feature that
						simplifies the process by enabling him to send airtime to multiple recipients in a
						single transaction.
					</p>
				</div>
				<div className="flex flex-col gap-2 w-full">
					<p className="font-secondary font-semibold text-foreground">OBJECTIVE</p>
					<p className="font-medium text-muted-foreground tight leading-[1.4]">
						Design a simple and efficient mobile feature that allows users to send airtime to
						multiple recipients at once, streamlining the process and reducing the time and effort
						required for a user who regularly sends airtime to a large number of people.
					</p>
				</div>
				<div className="flex flex-col gap-2 w-full">
					<p className="font-secondary font-semibold text-foreground">SOLUTION OVERVIEW</p>
					<p className="font-medium text-muted-foreground tight leading-[1.4]">
						To address Demola's pain points and create a more efficient way to send airtime to
						multiple recipients, I designed a feature that enables users to send airtime to several
						recipients in a single transaction. This feature is built around two primary solutions
						for ease of use and flexibility.
					</p>
				</div>
				<div className="flex items-cemter justify-between">
					<div className="flex flex-col gap-2 w-full">
						<p className="font-secondary font-semibold text-foreground">ROLE</p>
						<p className="font-medium text-muted-foreground tight">Product Designer</p>
					</div>
					<div className="flex flex-col gap-2 w-full">
						<p className="font-secondary font-semibold text-foreground">DURATION</p>
						<p className="font-medium text-muted-foreground tight">1 week</p>
					</div>
				</div>
			</section>
			<section id="selecting-recipients-from-contacts">
				<div className="flex flex-col gap-3">
					<h2 className="text-[18px] font-medium tight no-line-height">
						Selecting Recipients from Contacts
					</h2>
					<p className="font-medium leading-[1.3] tight text-muted-foreground">
						In this flow, users can select recipients directly from their saved contact list. By
						tapping the "Select from Contacts" option, they are taken to a dedicated screen
						displaying their full contact list. From there, users can select multiple recipients
						with ease. The selected contacts are then displayed as chips on the next screen,
						providing a clear visual summary for review.
					</p>
				</div>
				<ul className="p-4 bg-surface-muted rounded-[12px] -ml-4 my-6">
					<li className="">
						<span className="font-medium text-foreground">User Action:</span>{" "}
						<span className="font-medium leading-[1.3] tight text-muted-foreground">
							Select recipients from the contact list.
						</span>
					</li>
					<li className="">
						<span className="font-medium text-foreground">Output:</span>{" "}
						<span className="font-medium leading-[1.3] tight text-muted-foreground">
							Selected contacts are displayed as chips on the next screen, where users can review
							and proceed with entering airtime details.
						</span>
					</li>
				</ul>
				<p className="font-medium leading-[1.3] tight text-muted-foreground">
					I used familiar interaction patterns to make the process feel intuitive and fast. The
					experience was designed around speed and control, with support for quick selection,
					search, and bulk actions. Features like tap-to-select and real-time filtering help reduce
					effort and make managing multiple recipients feel seamless.
				</p>
			</section>
			<section id="manually-entering-phone-numbers"></section>

			<section id="recipient-management"></section>

			<section id="payment-review"></section>

			<section id="transaction-summary-&-details"></section>

			<section id="design-feedbacks-&-iterations"></section>
		</main>
	);
}

const tags = [
	{
		label: "Design",
		color: "var(--blue)",
		bgColor: "var(--blue-muted)",
	},
	{
		label: "Mobile App",
		color: "var(--amber)",
		bgColor: "var(--amber-muted)",
	},
];
