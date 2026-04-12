"use client";

import { motion } from "motion/react";
import { Button } from "@/components/button";
import { useCopyEmail } from "@/hooks/use-copy-email";
import { RiCheckLine, RiFileCopyLine } from "@remixicon/react";

export function CopyEmailButton() {
	const { copied, copyEmail } = useCopyEmail();

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
					Copy email
					{copied ? <RiCheckLine className="size-5" /> : <RiFileCopyLine className="size-5" />}
				</Button>
			</motion.div>
		</div>
	);
}
