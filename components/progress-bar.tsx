"use client";

import { cn } from "@/lib/utils";
import { ChevronsUpDown } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export default function ProgressBar() {
	const [activeSectionHeading, setActiveSectionHeading] = useState<string | undefined>(
		items[0].label,
	);
	const [activeSection, setActiveSection] = useState(0);
	const [isExpanded, setIsExpanded] = useState(true);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const sectionIndex = items.findIndex((section) => section.id === entry.target.id);
						setActiveSection(sectionIndex);
						setActiveSectionHeading(items[sectionIndex].label);
					}
				});
			},
			{ threshold: 0.1 },
		);
		items.forEach((item) => {
			const section = document.getElementById(item.id);
			if (section) {
				observer.observe(section);
			}
		});

		return () => {
			observer.disconnect();
		};
	}, []);
	return (
		<div className="fixed bottom-4 left-1/2 z-[100] w-[calc(100%-32px)] max-w-[350px] -translate-x-1/2 rounded-[24px] bg-[#464648]">
			<button
				className="flex justify-between items-center w-full px-5 py-[12px] cursor-poin"
				onClick={() => setIsExpanded((prev) => !prev)}
			>
				<span>{activeSectionHeading}</span>
				<ChevronsUpDown className="size-[18px]" />
			</button>
			<AnimatePresence>
				{isExpanded && (
					<motion.div
						initial={{ opacity: 0, filter: "blur(4px)", height: 0 }}
						animate={{ opacity: 1, filter: "blur(0px)", height: "auto" }}
						exit={{ opacity: 0, filter: "blur(4px)", height: 0 }}
						transition={{ duration: 0.15, ease: "linear" }}
						className="overflow-hidden"
					>
						<ul className="pb-2 px-2">
							{items.map((item, index) => {
								const isActive = index === activeSection;
								return (
									<li
										key={item.id}
										className={cn(
											"hover:bg-white/10 rounded-full w-full",
											isActive && "bg-white/15",
										)}
									>
										<button
											className="p-3 text-left w-full cursor-pointer"
											onClick={() => {
												console.log("click");

												document.getElementById(item.id)?.scrollIntoView({
													behavior: "smooth",
												});
											}}
										>
											{item.label}
										</button>
									</li>
								);
							})}
						</ul>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}

const items = [
	{
		id: "overview",
		label: "Overview",
	},
	{
		id: "patient-onboarding",
		label: "Patient Onboarding",
	},
	{
		id: "patient-management",
		label: "Patient Management",
	},
	{
		id: "patient-transfer",
		label: "Patient Transfer",
	},
];
