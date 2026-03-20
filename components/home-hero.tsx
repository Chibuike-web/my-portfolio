"use client";

import { motion } from "motion/react";
import { Button } from "@/components/button";
import { LinkedinLogo } from "@/components/icons";
import { CopyEmailButton } from "@/components/copy-email-button";

export function HomeHero() {
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
				<motion.span
					initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
					animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
					transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
				>
					Design Engineer
				</motion.span>
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
								Linkedin <LinkedinLogo />
							</Button>
						</motion.div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
