"use client";

import { AnimatePresence, motion } from "motion/react";
import { Button } from "@/components/button";
import { CopyEmailButton } from "@/components/copy-email-button";
import { RiLinkedinFill } from "@remixicon/react";
import { useEffect, useState } from "react";

const items = ["Design Engineer", "Interface Designer", "Frontend Engineer", "Product Engineer"];

export function HomeHero() {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const id = setInterval(() => {
			setIndex((prev) => (prev + 1) % items.length);
		}, 2000);

		return () => clearInterval(id);
	}, []);

	return (
		<section className="mx-auto mt-[3.25rem] grid w-full max-w-[81rem] grid-cols-1 gap-y-5 px-6 md:mt-[6.5rem] md:grid-cols-3 md:gap-x-6 md:gap-y-10 xl:px-0">
			<h1 className="col-span-3 flex flex-col gap-1 text-[clamp(2rem,calc(3vw+2vh),4rem)] font-semibold tracking-[-0.02em] text-balance text-gray-700 lg:col-span-2">
				<motion.span
					initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
					animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
					transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
				>
					Hi, I&apos;m Chibuike
				</motion.span>
				<motion.div
					className="overflow-hidden relative h-[1.2em]"
					initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
					animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
					transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
				>
					<AnimatePresence mode="wait">
						<motion.div
							key={items[index]}
							initial={{ y: -80, opacity: 0, filter: "blur(10px)" }}
							animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
							exit={{ y: 80, opacity: 0, filter: "blur(10px)" }}
							transition={{
								duration: 0.8,
								ease: [0.22, 1, 0.36, 1],
							}}
							className="absolute inset-0 flex items-center"
						>
							{items[index]}
						</motion.div>
					</AnimatePresence>
				</motion.div>
			</h1>

			<div className="col-span-3 flex flex-col gap-10 lg:col-span-1">
				<motion.p
					initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
					animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
					transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
					className="w-full text-pretty font-medium leading-[1.6] text-gray-500"
				>
					I&apos;m a hybrid of{" "}
					<span className="font-semibold text-gray-700">designer and developer</span>. I blend{" "}
					<span className="font-semibold text-gray-700">design and code</span> to build{" "}
					<span className="font-semibold text-gray-700">beautiful,</span> human-centered software
					that <span className="font-semibold text-gray-700">looks good</span> and{" "}
					<span className="font-semibold text-gray-700">feels great</span> to use.
				</motion.p>

				<motion.div
					initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
					animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
					transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
				>
					<div className="flex items-center gap-2">
						<CopyEmailButton />
						<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
							<Button
								as="a"
								href="https://www.linkedin.com/in/chibuike-maduabuchi"
								target="_blank"
								rel="noopener noreferrer"
								size="sm"
								variant="secondary"
								fullWidth={false}
								className="gap-1.5 rounded-full bg-gray-100 text-gray-700"
							>
								Linkedin <RiLinkedinFill className="size-4" />
							</Button>
						</motion.div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
