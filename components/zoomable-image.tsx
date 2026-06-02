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
};

export function ZoomableImage({ src, alt, width, height }: ZoomableImageProps) {
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
		<div className="relative">
			<motion.button
				type="button"
				onClick={handleOpen}
				className="block w-full cursor-zoom-in"
				aria-label="Open image preview"
			>
				<motion.div
					layoutId={layoutId}
					transition={{ type: "spring", duration: 0.2, bounce: 0 }}
					className={cn(
						"flex overflow-hidden rounded-[1rem] bg-surface-muted ring ring-surface-hover",
						isZoomed && "opacity-0",
					)}
				>
					<Image
						src={src}
						alt={alt}
						width={width}
						height={height}
						loading="lazy"
						className="h-auto w-full"
					/>
				</motion.div>
			</motion.button>

			<motion.div
				className={cn(
					"fixed inset-0 z-50 flex items-center justify-center bg-white/90 backdrop-blur-md",
					isZoomed ? "pointer-events-auto" : "pointer-events-none",
				)}
				onClick={handleClose}
				animate={{ opacity: isZoomed ? 1 : 0 }}
				initial={false}
				transition={{ duration: 0.2 }}
				aria-hidden={!isZoomed}
			>
				<button
					type="button"
					className="absolute right-4 top-4 z-10 text-foreground"
					onClick={handleClose}
					aria-label="Close image preview"
					tabIndex={isZoomed ? 0 : -1}
				>
					<X className="size-5" />
				</button>

				<button
					type="button"
					className="flex w-full cursor-zoom-out items-center justify-center px-6"
					onClick={handleClose}
					tabIndex={isZoomed ? 0 : -1}
				>
					<AnimatePresence>
						{isZoomed && (
							<motion.div
								layoutId={layoutId}
								transition={{ type: "spring", duration: 0.2, bounce: 0 }}
								className="flex max-w-[1000px] overflow-hidden rounded-[1rem] bg-surface-muted ring ring-surface-hover"
							>
								<Image
									src={src}
									alt={alt}
									width={width}
									height={height}
									loading="lazy"
									className="h-auto w-full"
								/>
							</motion.div>
						)}
					</AnimatePresence>
				</button>
			</motion.div>
		</div>
	);
}
