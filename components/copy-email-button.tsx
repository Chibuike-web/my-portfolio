"use client";

import { AnimatePresence, motion } from "motion/react";
import { Button } from "@/components/button";
import { CopyIcon } from "@/components/icons";
import { useCopyEmail } from "@/hooks/use-copy-email";

export function CopyEmailButton() {
	const { copyStatus, copyEmail } = useCopyEmail();

	return (
		<div className="relative">
			<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
				<Button
					onClick={copyEmail}
					size="sm"
					variant="secondary"
					fullWidth={false}
					className="gap-1.5 rounded-full"
				>
					Copy email <CopyIcon />
				</Button>
			</motion.div>

			<AnimatePresence initial={false}>
				{copyStatus ? (
					<motion.span
						initial={{ opacity: 0, y: -5 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -5 }}
						transition={{ duration: 0.2 }}
						className="absolute bottom-[-10px] left-0 translate-y-full font-medium text-gray-700"
					>
						{copyStatus}
					</motion.span>
				) : null}
			</AnimatePresence>
		</div>
	);
}
