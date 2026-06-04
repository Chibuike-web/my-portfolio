"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

function getPrefersDark() {
	if (typeof window === "undefined") {
		return undefined;
	}
	return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function applyTheme(theme: Theme) {
	const shouldUseDark = theme === "dark" || (theme === "system" && getPrefersDark() === true);

	document.documentElement.classList.toggle("dark", shouldUseDark);
	document.documentElement.classList.toggle("light", !shouldUseDark);
}

export function ThemeButton({ initialTheme }: { initialTheme?: string }) {
	const [isDark, setIsDark] = useState(initialTheme === "dark" ? true : false);
	useEffect(() => {
		const localTheme = localStorage.getItem("theme");

		const storedTheme =
			localTheme === "light" || localTheme === "dark" || localTheme === "system"
				? localTheme
				: "system";

		const shouldUseDark =
			storedTheme === "dark" || (storedTheme === "system" && getPrefersDark() === true);

		applyTheme(storedTheme);
		setIsDark(shouldUseDark);
	}, []);

	const toggleTheme = () => {
		const nextTheme = isDark ? "light" : "dark";
		const shouldUseDark = nextTheme === "dark";

		localStorage.setItem("theme", nextTheme);
		applyTheme(nextTheme);
		document.cookie = `theme=${nextTheme}; path=/; max-age=31536000; samesite=lax`;

		setIsDark(shouldUseDark);
	};

	return (
		<button
			aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
			className="flex size-10 cursor-pointer items-center justify-center rounded-full duration-150 ease-out hover:bg-surface-muted active:scale-96 transition-all"
			onClick={toggleTheme}
			type="button"
		>
			{isDark ? (
				<Sun className="size-5 text-foreground" />
			) : (
				<Moon className="size-5 text-foreground" />
			)}
		</button>
	);
}
