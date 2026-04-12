"use client";

import Link from "next/link";
import { useCopyEmail } from "@/hooks/use-copy-email";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import type { Route } from "next";
import { RiCheckLine, RiCornerDownLeftLine } from "@remixicon/react";

export function Footer() {
	const pathname = usePathname();
	const { copied, copyEmail } = useCopyEmail();

	return (
		<footer className="bg-white py-10 text-gray-700">
			<div className="mx-auto grid w-full max-w-[81rem] grid-cols-1 gap-12 px-6 xl:gap-6 xl:px-0 md:grid-cols-3">
				<div>
					<p className="max-w-[16.1875rem] font-semibold leading-[1.6] text-gray-700">
						Designed and Developed by Chibuike ©2026
					</p>
				</div>

				<div className="flex items-start gap-8">
					<div className="flex w-full flex-col gap-6">
						<p className="font-semibold leading-[1]">Sitemap</p>
						<div className="flex flex-col gap-4 leading-[1]">
							<FooterNavLink href="/" active={pathname === "/"}>
								Work
							</FooterNavLink>
							<FooterNavLink href="/about" active={pathname === "/about"}>
								About
							</FooterNavLink>
							<a
								href="https://drive.google.com/file/d/1-Pp56NqO3jCauLwMdeoSMwgWw7UvlGnD/view?usp=sharing"
								target="_blank"
								rel="noopener noreferrer"
								className="button w-max py-1"
							>
								Resume
							</a>
						</div>
					</div>
					<div className="flex w-full flex-col gap-6">
						<p className="font-semibold leading-[1]">Connect</p>
						<div className="flex w-max flex-col gap-4 leading-[1]">
							<a
								href="https://www.linkedin.com/in/chibuike-maduabuchi"
								target="_blank"
								rel="noopener noreferrer"
								className="button w-max py-1"
							>
								Linkedin
							</a>
							<a
								href="https://github.com/Chibuike-web"
								target="_blank"
								rel="noopener noreferrer"
								className="button w-max py-1"
							>
								Github
							</a>
							<a
								href="https://codepen.io/chibuike-web"
								target="_blank"
								rel="noopener noreferrer"
								className="button w-max py-1"
							>
								Codepen
							</a>
							<a
								href="https://dribbble.com/maduabuchichibuike"
								target="_blank"
								rel="noopener noreferrer"
								className="button w-max py-1"
							>
								Dribbble
							</a>
						</div>
					</div>
				</div>

				<div className="flex flex-col gap-14 xl:h-full">
					<div className="relative flex flex-col gap-2">
						<p>Let&apos;s build something together.</p>
						<button
							onClick={copyEmail}
							className="w-full cursor-pointer flex gap-1 break-words text-left font-semibold select-all"
						>
							chibuikemaduabuchi2023@gmail.com
							{copied && <RiCheckLine className="size-5" />}
						</button>
					</div>
					<button
						className="mt-auto flex w-max items-center gap-1.5"
						onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
					>
						<RiCornerDownLeftLine /> <span className="font-semibold">Back to the top</span>
					</button>
				</div>
			</div>
		</footer>
	);
}

function FooterNavLink({
	href,
	active,
	children,
}: {
	href: Route;
	active: boolean;
	children: React.ReactNode;
}) {
	return (
		<Link
			href={href}
			className={cn("button w-max py-1 text-gray-700", active ? "font-semibold" : "")}
		>
			{children}
		</Link>
	);
}
