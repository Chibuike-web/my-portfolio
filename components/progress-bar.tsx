"use client";

import { sections } from "@/lib/data";
import { useEffect, useState } from "react";

export function ProgressBar() {
	const [activeSection, setActiveSection] = useState(-1);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const index = sections.findIndex((s) => s.id === entry.target.id);
						if (index !== -1) {
							setActiveSection(index);
						}
					}
				});
			},
			{
				threshold: 0.5,
			},
		);

		sections.forEach((section) => {
			const el = document.getElementById(section.id);
			if (el) observer.observe(el);
		});

		const handleScroll = () => {
			if (window.scrollY < window.innerHeight * 0.5) {
				setActiveSection(-1);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => observer.disconnect();
	}, []);

	const progress = activeSection === -1 ? 0 : ((activeSection + 1) / sections.length) * 100;
	return (
		<div className="fixed top-0 left-0 w-full h-1 z-50 bg-gray-200">
			<div
				className="h-full bg-gray-800 transition-all duration-300 ease-out"
				style={{ width: `${progress}%` }}
			/>
		</div>
	);
}
