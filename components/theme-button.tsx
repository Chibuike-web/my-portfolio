"use client";

import { Moon, Sun } from "lucide-react";

function applyTheme(shouldUseDark: boolean) {
	document.documentElement.classList.toggle("dark", shouldUseDark);
	document.documentElement.classList.toggle("light", !shouldUseDark);
}

export function ThemeButton() {
	const toggleTheme = () => {
		const shouldUseDark = !document.documentElement.classList.contains("dark");
		const nextTheme = shouldUseDark ? "dark" : "light";

		window.localStorage.setItem("theme", nextTheme);
		applyTheme(shouldUseDark);
	};

	return (
		<button
			aria-label="Toggle theme"
			className="flex size-10 cursor-pointer items-center justify-center rounded-full duration-150 ease-out hover:bg-surface-muted active:scale-96 transition-all"
			onClick={toggleTheme}
			type="button"
		>
			<Sun className="hidden size-5 text-foreground dark:block" />
			<Moon className="size-5 text-foreground dark:hidden" />
		</button>
	);
}
