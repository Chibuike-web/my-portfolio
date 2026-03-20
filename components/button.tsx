"use client";

import Link, { type LinkProps } from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";
import type { Route } from "next";

type BaseProps = VariantProps<typeof buttonVariants> & {
	children: ReactNode;
	className?: string;
	fullWidth?: boolean;
};

type ButtonAsButton = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { as?: "button" };

type ButtonAsAnchor = BaseProps &
	AnchorHTMLAttributes<HTMLAnchorElement> & { as: "a"; href: string };

type ButtonAsLink = BaseProps & LinkProps<Route> & { as: "link"; href: Route };

type ButtonProps = ButtonAsButton | ButtonAsAnchor | ButtonAsLink;

const buttonVariants = cva(
	"flex items-center justify-between rounded-full font-semibold transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 focus-visible:ring-offset-2",
	{
		variants: {
			variant: {
				primary: "bg-gray-700 pl-4 pr-3.5 text-white",
				secondary: "bg-gray-100 pl-4 pr-3.5 text-gray-700",
			},
			size: {
				sm: "h-9 text-sm",
				md: "h-10 text-sm",
				lg: "h-12 text-base",
			},
			fullWidth: {
				true: "w-full",
				false: "w-auto",
			},
		},
		defaultVariants: {
			variant: "primary",
			size: "md",
			fullWidth: true,
		},
	},
);

export function Button({
	as = "button",
	className,
	variant,
	size,
	fullWidth,
	...props
}: ButtonProps) {
	const classes = cn(buttonVariants({ variant, size, fullWidth }), className);

	if (as === "a") {
		const anchorProps = props as ButtonAsAnchor;
		return <a className={classes} {...anchorProps} />;
	}

	if (as === "link") {
		const linkProps = props as ButtonAsLink;
		return <Link className={classes} {...linkProps} />;
	}

	const buttonProps = props as ButtonAsButton;
	return <button className={classes} {...buttonProps} />;
}
