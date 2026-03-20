import Image, { type ImageProps } from "next/image";
import { cn } from "@/lib/utils";

type LazyImageProps = Omit<ImageProps, "placeholder">;

export function LazyImage({ className, sizes, alt, loading = "lazy", ...props }: LazyImageProps) {
	return (
		<Image
			alt={alt}
			className={cn("h-full w-full", className)}
			sizes={sizes ?? "(max-width: 768px) 100vw, 1296px"}
			loading={loading}
			{...props}
		/>
	);
}
