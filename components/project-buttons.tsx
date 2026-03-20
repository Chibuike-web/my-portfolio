"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { Button } from "@/components/button";
import { RightArrowIcon } from "@/components/icons";
import type { ProjectType } from "@/lib/data";

export function ProjectButtons({ type }: { type: ProjectType | ProjectType[] }) {
	const [hovered, setHovered] = useState("");

	if (Array.isArray(type)) {
		return (
			<div className="flex gap-2.5">
				{type.map((item, index) => {
					const key = index === 0 ? "primary" : "secondary";

					return (
						<motion.div
							key={item.link}
							className="w-full"
							whileTap={{ scale: 0.96 }}
							onHoverStart={() => setHovered(key)}
							onHoverEnd={() => setHovered("")}
						>
							<Button
								as="a"
								href={item.link}
								target="_blank"
								rel="noopener noreferrer"
								variant={index === 0 ? "primary" : "secondary"}
								size="md"
								fullWidth
							>
								{item.value}
								<motion.div
									animate={{ x: hovered === key ? -10 : 0 }}
									transition={{ type: "spring", stiffness: 300, damping: 20, bounce: 0 }}
								>
									<RightArrowIcon className={index === 0 ? "text-white" : ""} />
								</motion.div>
							</Button>
						</motion.div>
					);
				})}
			</div>
		);
	}

	if (type.value === "Case Study") {
		return (
			<motion.div
				whileTap={{ scale: 0.96 }}
				onHoverStart={() => setHovered("case-study")}
				onHoverEnd={() => setHovered("")}
			>
				<Button
					as="link"
					href={type.link}
					variant="primary"
					size="md"
					fullWidth
					className="flex items-center"
				>
					{type.value}
					<motion.div
						animate={{ x: hovered === "case-study" ? -10 : 0 }}
						transition={{ type: "spring", stiffness: 300, damping: 20, bounce: 0 }}
					>
						<RightArrowIcon className="text-white" />
					</motion.div>
				</Button>
			</motion.div>
		);
	}

	return (
		<motion.div
			whileTap={{ scale: 0.96 }}
			onHoverStart={() => setHovered("external")}
			onHoverEnd={() => setHovered("")}
		>
			<Button
				as="a"
				href={type.link}
				target="_blank"
				rel="noopener noreferrer"
				variant="primary"
				size="md"
				fullWidth
			>
				{type.value}
				<motion.div
					animate={{ x: hovered === "external" ? -10 : 0 }}
					transition={{ type: "spring", stiffness: 300, damping: 20, bounce: 0 }}
				>
					<RightArrowIcon className="text-white" />
				</motion.div>
			</Button>
		</motion.div>
	);
}
