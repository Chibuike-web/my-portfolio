"use client";

import { sections } from "@/lib/data";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";
import { RiArrowDownSLine } from "@remixicon/react";

export function Progress() {
	const [activeSection, setActiveSection] = useState(-1);
	const [activeSectionHeading, setActiveSectionHeading] = useState<string | undefined>("");
	const [isExpanded, setIsExpanded] = useState(true);

	useEffect(function observeSections() {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const sectionIndex = sections.findIndex((section) => section.id === entry.target.id);
						const heading = entry.target.querySelector("h1, h2, h3");
						if (sectionIndex !== -1) {
							setActiveSection(sectionIndex);
							setActiveSectionHeading(heading?.textContent);
						}
					}
				});
			},
			{ threshold: 0.5 },
		);
		const sectionElements = document.querySelectorAll("section");
		sectionElements.forEach((section) => observer.observe(section));

		const handleScroll = () => {
			if (window.scrollY < window.innerHeight * 0.5) {
				setActiveSection(-1);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			observer.disconnect();
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	const progress = activeSection >= 0 ? ((activeSection + 1) / sections.length) * 100 : 0;

	return (
		<div className="fixed top-6 left-1/2 z-50 w-[320px] -translate-x-1/2 rounded-2xl border border-black/10 bg-white/80 shadow-lg backdrop-blur-xl">
			<div className="flex items-center justify-between px-4 py-3">
				<div className="flex min-w-0 items-center gap-2">
					<AnimatePresence mode="wait">
						<motion.p
							key={activeSectionHeading}
							initial={{ opacity: 0, filter: "blur(4px)" }}
							animate={{ opacity: 1, filter: "blur(0px)" }}
							exit={{ opacity: 0, filter: "blur(4px)" }}
							transition={{ duration: 0.15, ease: "linear" }}
							className="truncate text-sm font-medium text-black"
						>
							{activeSectionHeading}
						</motion.p>
					</AnimatePresence>

					<span className="text-xs text-neutral-500">
						{String(activeSection + 1).padStart(2, "0")} /{" "}
						{String(sections.length).padStart(2, "0")}
					</span>
				</div>

				<button
					onClick={() => setIsExpanded((prev) => !prev)}
					className="flex h-7 w-7 items-center justify-center rounded-full transition-colors hover:bg-black/[0.05]"
				>
					<motion.div
						animate={{ rotate: isExpanded ? 0 : -90 }}
						transition={{ duration: 0.15, ease: "linear" }}
					>
						<RiArrowDownSLine className="size-4 text-neutral-600" />
					</motion.div>
				</button>
			</div>

			<div className="px-4 pb-4">
				<div className="h-1.5 overflow-hidden rounded-full bg-neutral-200">
					<div
						className="h-full rounded-full bg-black transition-all duration-300 ease-out"
						style={{ width: `${progress}%` }}
					/>
				</div>

				<AnimatePresence initial={false}>
					{isExpanded && (
						<motion.div
							initial={{ opacity: 0, filter: "blur(4px)", height: 0 }}
							animate={{ opacity: 1, filter: "blur(0px)", height: "auto" }}
							exit={{ opacity: 0, filter: "blur(4px)", height: 0 }}
							transition={{ duration: 0.15, ease: "linear" }}
							className="overflow-hidden"
						>
							<div className="mt-4 flex flex-col gap-1">
								{sections.map(({ id, label }, i) => {
									const isActive = i === activeSection;

									return (
										<motion.div
											key={id}
											animate={{
												opacity: isActive ? 1 : 0.45,
												filter: isActive ? "blur(0px)" : "blur(1px)",
											}}
											transition={{ duration: 0.15, ease: "linear" }}
											className={cn(
												"group relative flex items-center gap-3 rounded-lg px-2 py-1.5 transition-all",
												isActive && "bg-black/[0.04]",
											)}
										>
											<div
												className={cn(
													"h-1.5 w-1.5 rounded-full transition-colors",
													isActive ? "bg-black" : "bg-neutral-300",
												)}
											/>

											<p
												className={cn(
													"text-sm transition-colors",
													isActive ? "font-medium text-black" : "text-neutral-400",
												)}
											>
												{label}
											</p>
										</motion.div>
									);
								})}
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</div>
	);
}
