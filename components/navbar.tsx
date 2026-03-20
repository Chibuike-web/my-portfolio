"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useRealTime } from "@/hooks/use-real-time";
import { CancelIcon, Logo, MenuIcon, RightArrowIcon } from "@/components/icons";
import type { Route } from "next";

const resumeUrl =
	"https://drive.google.com/file/d/1-Pp56NqO3jCauLwMdeoSMwgWw7UvlGnD/view?usp=sharing";

export function Navbar() {
	const pathname = usePathname();

	return (
		<>
			<div className="hidden min-[800px]:block">
				<DesktopNav pathname={pathname} />
			</div>
			<div className="min-[800px]:hidden">
				<MobileNav pathname={pathname} />
			</div>
		</>
	);
}

function DesktopNav({ pathname }: { pathname: string }) {
	const time = useRealTime();

	return (
		<nav className="py-5.5">
			<header className="mx-auto grid w-full max-w-[81rem] grid-cols-[1fr_250px_1fr] gap-6 px-6 xl:px-0">
				<Link
					href="/"
					className="w-max rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300"
				>
					<Logo className="text-gray-700" />
				</Link>
				<div className="flex w-full items-center justify-between rounded-full p-1">
					<NavItem href="/" active={pathname === "/"}>
						Work
					</NavItem>
					<NavItem href="/about" active={pathname === "/about"}>
						About
					</NavItem>
					<a
						href={resumeUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="button flex h-9 items-center justify-center rounded-full text-gray-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300"
					>
						Resume
					</a>
				</div>
				<div className="flex w-full items-center justify-end gap-4 font-semibold">
					<span>Enugu, Nigeria</span>
					<span className="tabular-nums">{time}</span>
				</div>
			</header>
		</nav>
	);
}

function MobileNav({ pathname }: { pathname: string }) {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		document.body.style.overflow = isOpen ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [isOpen]);

	return (
		<nav className="bg-white py-4">
			<header className="mx-auto flex w-full max-w-[81rem] items-center justify-between px-6 xl:px-0">
				<Link
					href="/"
					className="rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300"
				>
					<Logo className="h-[2rem] w-[2rem]" />
				</Link>

				<button
					type="button"
					onClick={() => setIsOpen((previous) => !previous)}
					aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
					aria-expanded={isOpen}
					aria-controls="mobile-navigation-menu"
					className="flex size-10 items-center justify-center rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300"
				>
					{isOpen ? <CancelIcon /> : <MenuIcon />}
				</button>
			</header>
			{isOpen ? <MobileLinks pathname={pathname} closeMenu={() => setIsOpen(false)} /> : null}
		</nav>
	);
}

function MobileLinks({ pathname, closeMenu }: { pathname: string; closeMenu: () => void }) {
	const time = useRealTime();

	return (
		<div
			id="mobile-navigation-menu"
			className="fixed inset-0 top-[4.1106rem] z-50 flex flex-col bg-white px-6 text-gray-700"
		>
			<div className="flex w-full flex-col gap-12 py-10 font-medium">
				<MobileNavItem href="/" active={pathname === "/"} onClick={closeMenu}>
					Work
				</MobileNavItem>
				<MobileNavItem href="/about" active={pathname === "/about"} onClick={closeMenu}>
					About
				</MobileNavItem>
				<a
					href={resumeUrl}
					target="_blank"
					rel="noopener noreferrer"
					className="flex h-[4rem] items-center justify-between text-gray-500"
					onClick={closeMenu}
				>
					<span>Resume</span>
					<span>
						<RightArrowIcon className="h-6 w-6" />
					</span>
				</a>
			</div>
			<div className="mt-auto flex h-16 w-full items-center justify-between pb-6 font-semibold">
				<span>Enugu, Nigeria</span>
				<span className="tabular-nums">{time}</span>
			</div>
		</div>
	);
}

function NavItem({
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
			className={cn(
				"button flex h-9 items-center justify-center rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300",
				active ? "font-semibold text-gray-700" : "font-normal text-gray-500",
			)}
		>
			{children}
		</Link>
	);
}

function MobileNavItem({
	href,
	active,
	onClick,
	children,
}: {
	href: Route;
	active: boolean;
	onClick: () => void;
	children: React.ReactNode;
}) {
	return (
		<Link
			href={href}
			className={cn(
				"flex h-[4rem] items-center justify-between",
				active ? "font-semibold text-gray-700" : "font-normal text-gray-500",
			)}
			onClick={onClick}
		>
			<span>{children}</span>
			<span>
				<RightArrowIcon className="h-6 w-6" />
			</span>
		</Link>
	);
}
