"use client";

import { sections } from "@/lib/data";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function VerticalTabs() {
	const [activeSection, setActiveSection] = useState("");

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveSection(entry.target.id);
					}
				});
			},
			{ threshold: 0.5 },
		);

		const sectionElements = document.querySelectorAll("section");

		sectionElements.forEach((section) => observer.observe(section));

		return () => observer.disconnect();
	}, []);

	return (
		<div className="w-56">
			<div className="relative flex flex-col">
				<div className="absolute left-0 top-0 h-full w-px bg-black/10" />

				{sections.map((section) => {
					const isActive = activeSection === section.id;

					return (
						<a
							key={section.id}
							href={`#${section.id}`}
							className={cn(
								"relative flex items-center py-3 pl-6 pr-4 text-sm transition-colors",
								isActive ? "text-black" : "text-neutral-400 hover:text-black",
							)}
						>
							{isActive && (
								<motion.div
									layoutId="active-indicator"
									className="absolute left-0 top-1/2 h-6 w-px -translate-y-1/2 bg-black"
									transition={{
										type: "spring",
										stiffness: 350,
										damping: 30,
									}}
								/>
							)}

							<span
								className={cn(
									"transition-all duration-200",
									isActive && "translate-x-1 font-medium",
								)}
							>
								{section.label}
							</span>
						</a>
					);
				})}
			</div>
		</div>
	);
}
