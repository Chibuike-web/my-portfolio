import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
	return <div className={cn("flex flex-col gap-4 bg-white", className)} {...props} />;
}

Card.Image = function CardImage({ className, ...props }: HTMLAttributes<HTMLElement>) {
	return (
		<figure
			className={cn(
				"h-[15.625rem] w-full overflow-hidden rounded-2xl sm:h-[21.875rem] md:rounded-[1.25rem]",
				className,
			)}
			{...props}
		/>
	);
};

Card.Content = function CardContent({ className, ...props }: HTMLAttributes<HTMLElement>) {
	return (
		<div
			className={cn("flex flex-col gap-6 text-sm leading-[1em] md:text-base", className)}
			{...props}
		/>
	);
};

Card.Title = function CardTitle({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			className={cn(
				"flex items-center justify-between font-secondary font-semibold text-gray-500",
				className,
			)}
			{...props}
		/>
	);
};

Card.SubTitle = function CardSubTitle({
	className,
	...props
}: HTMLAttributes<HTMLParagraphElement>) {
	return (
		<p
			className={cn("min-w-0 truncate font-secondary font-semibold text-gray-700", className)}
			{...props}
		/>
	);
};
