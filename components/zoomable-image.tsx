"use client";

import Image, { type StaticImageData } from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

type ZoomableImageProps = {
	src: StaticImageData;
	alt: string;
	width: number;
	height: number;
	className?: string;
};

export function ZoomableImage({ src, alt, width, height, className }: ZoomableImageProps) {
	const [isZoomed, setIsZoomed] = useState(false);
	const layoutId = `zoom-image-${src.src}`;

	const handleOpen = () => {
		document.documentElement.style.overflow = "hidden";
		document.body.style.overflow = "hidden";
		setIsZoomed(true);
	};

	const handleClose = () => {
		setIsZoomed(false);
		document.documentElement.style.overflow = "";
		document.body.style.overflow = "";
	};

	return (
		<>
			{/* Thumbnail state */}
			<motion.div
				layoutId={layoutId}
				onClick={handleOpen}
				className={cn(
					"w-full cursor-zoom-in overflow-hidden rounded-xl bg-surface-muted ring ring-surface-hover",
					isZoomed && "pointer-events-none opacity-0",
					className,
				)}
				transition={{ type: "spring", duration: 0.2, bounce: 0 }}
			>
				<Image
					src={src}
					alt={alt}
					width={width}
					height={height}
					loading="lazy"
					placeholder="blur"
					className="h-auto w-full"
				/>
			</motion.div>

			<AnimatePresence>
				{isZoomed && (
					<>
						{/* Backdrop */}
						<motion.div
							className="fixed inset-0 z-40 bg-background/90 backdrop-blur-md"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.2 }}
							onClick={handleClose}
						/>

						{/* Expanded state */}
						<motion.div
							className="fixed inset-0 z-50 flex cursor-zoom-out items-center justify-center px-4 lg:px-0"
							onClick={handleClose}
							initial={{ opacity: 1 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 1 }}
						>
							<motion.div
								layoutId={layoutId}
								className="w-full select-none overflow-hidden rounded-xl bg-surface-muted ring ring-surface-hover lg:max-w-[75vw] 2xl:max-w-[75rem]"
								transition={{ type: "spring", duration: 0.2, bounce: 0 }}
							>
								<Image
									src={src}
									alt={alt}
									width={width}
									height={height}
									loading="lazy"
									placeholder="blur"
									className="h-auto w-full"
								/>
							</motion.div>

							<button
								type="button"
								className="absolute right-4 top-4 z-10 text-foreground"
								onClick={handleClose}
								aria-label="Close image preview"
							>
								<X className="size-5" />
							</button>
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</>
	);
}
