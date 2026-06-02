import { Tag } from "@/components/tag";
import ThemeButton from "@/components/theme-button";
import { Undo2 } from "lucide-react";
import Link from "next/link";

export default function MedibridgePage() {
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
						<h1 className="text-[18px] font-semibold tight">Medibridge</h1>
						<div className="flex items-center gap-1.5">
							<p className="font-medium text-[1rem] text-muted-foreground tight no-line-height">
								AI-powered healthcare management system
							</p>
							<span className="size-0.5 bg-muted-foreground rounded-full" />
							<p className="font-medium text-[1rem] text-muted-foreground tight no-line-height">
								2025
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
						Medical records are still commonly stored as paper files, scanned documents, PDFs, or
						images. This makes it difficult for hospitals and clinics to quickly access, organize,
						and transfer accurate patient information, especially during inter-facility transfers.
						Healthcare staff often spend time manually reviewing documents, extracting information,
						and handling fragmented records across different systems. The lack of structured and
						interoperable medical data slows down workflows and affects continuity of care.
					</p>
				</div>
				<div className="flex flex-col gap-2 w-full">
					<p className="font-secondary font-semibold text-foreground">OBJECTIVE</p>
					<p className="font-medium text-muted-foreground tight leading-[1.4]">
						Design a platform that helps hospitals and clinics digitize medical records, extract
						structured patient information from unstructured files, and streamline patient record
						transfers between healthcare facilities. The goal is to reduce administrative workload,
						improve accessibility of patient records, and create a faster and more reliable transfer
						process with review and patient approval workflows.ople.
					</p>
				</div>
				<div className="flex flex-col gap-2 w-full">
					<p className="font-secondary font-semibold text-foreground">SOLUTION OVERVIEW</p>
					<p className="font-medium text-muted-foreground tight leading-[1.4]">
						MediBridge is an AI-powered healthcare platform designed to convert physical and
						unstructured medical records into structured digital patient data. The platform allows
						healthcare staff to upload scanned documents, PDFs, and images, automatically extract
						patient information using AI, review the extracted data, and manage patient transfers
						between hospitals through a centralized workflow. The system also includes transfer
						approval flows, record sharing, and structured patient profiles to improve record
						management and continuity of care.
					</p>
				</div>
				<div className="flex items-cemter justify-between">
					<div className="flex flex-col gap-2 w-full">
						<p className="font-secondary font-semibold text-foreground">ROLE</p>
						<div>
							<p className="font-medium text-muted-foreground tight">Product Designer</p>
							<p className="font-medium text-muted-foreground tight">Product Manager</p>
							<p className="font-medium text-muted-foreground tight">Product Engineer</p>
						</div>
					</div>
					<div className="flex flex-col gap-2 w-full">
						<p className="font-secondary font-semibold text-foreground">DURATION</p>
						<p className="font-medium text-muted-foreground tight">Ongoing</p>
					</div>
				</div>
			</section>
			<section id="selecting-recipients-from-contacts"></section>
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
		label: "Dev",
		color: "var(--red)",
		bgColor: "var(--red-muted)",
	},
	{
		label: "Web App",
		color: "var(--green)",
		bgColor: "var(--green-muted)",
	},
];
