"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useSearchParams } from "next/navigation";
import { Card } from "@/components/card";
import { HomeHero } from "@/components/home-hero";
import { ProjectButtons } from "@/components/project-buttons";
import { projects } from "@/lib/data";
import { filter } from "@/lib/filter";
import { useRouter } from "next/navigation";
import { PageShell } from "./page-shell";
import { Tabs } from "@base-ui/react/tabs";

export function HomePage() {
	const searchParams = useSearchParams();
	const router = useRouter();
	const category = searchParams.get("category") ?? "all";
	const selectedCategory = category === "design" || category === "engineering" ? category : "all";
	const filteredProjects =
		selectedCategory === "all"
			? projects
			: projects.filter((project) => project.category === selectedCategory);

	return (
		<PageShell>
			<HomeHero />

			<div className="mx-auto mt-[3.25rem] flex w-full max-w-[81rem] gap-2 px-6 md:mt-[6.5rem] xl:px-0">
				<Tabs.Root className="rounded-full bg-gray-100" defaultValue="all">
					<Tabs.List className="relative z-0 flex gap-1 p-1" loopFocus activateOnFocus>
						{filter.map((categoryItem) => (
							<Tabs.Tab
								key={categoryItem.id}
								value={categoryItem.id}
								onClick={() =>
									router.push(categoryItem.id === "all" ? "/" : `/?category=${categoryItem.id}`, {
										scroll: false,
									})
								}
								className="px-3 py-1.5 data-[active]:text-white rounded-full text-sm focus:outline-0 focus-visible:ring-2 focus-visible:ring-gray-300 focus-visible:ring-offset-2"
							>
								{categoryItem.text}
							</Tabs.Tab>
						))}
						<Tabs.Indicator className="absolute top-1/2 left-0 z-[-1] h-[var(--active-tab-height)] w-[var(--active-tab-width)] translate-x-[var(--active-tab-left)] -translate-y-1/2 bg-gray-700 text-white rounded-full transition-all duration-200 ease-in-out" />
					</Tabs.List>
				</Tabs.Root>
			</div>

			<div
				key={selectedCategory}
				className="mx-auto mt-5 mb-[3.25rem] grid w-full max-w-[81rem] grid-cols-1 gap-x-6 gap-y-10 px-6 md:mt-10 md:mb-[6.5rem] md:grid-cols-2 lg:grid-cols-3 xl:px-0"
			>
				{filteredProjects.map((project, index) => (
					<motion.div
						key={`${selectedCategory}-${project.id}`}
						initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
						animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
						transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 * index }}
						viewport={{ once: true, amount: 0.2 }}
					>
						<Card>
							<Card.Image className="ring-1 ring-black/5">
								<Image
									src={project.image}
									alt={project.title}
									width={416}
									height={350}
									className="h-full w-full object-cover"
									priority={index === 0}
								/>
							</Card.Image>
							<Card.Content>
								<div className="flex flex-col gap-2.5 px-1">
									<Card.Title>
										<h3>{project.title.toUpperCase()}</h3>
										<p>{project.year}</p>
									</Card.Title>
									<Card.SubTitle>{project.subtitle.toUpperCase()}</Card.SubTitle>
								</div>
								<ProjectButtons type={project.type} />
							</Card.Content>
						</Card>
					</motion.div>
				))}
			</div>
		</PageShell>
	);
}
