"use client";

import { Moon, Sun } from "lucide-react";
import { useState } from "react";

type Theme = "light" | "dark";

function applyTheme(shouldUseDark: boolean) {
	document.documentElement.classList.toggle("dark", shouldUseDark);
	document.documentElement.classList.toggle("light", !shouldUseDark);
}

export function ThemeButton({ initialTheme }: { initialTheme: Theme }) {
	const [isDark, setIsDark] = useState(initialTheme === "dark");
	const toggleTheme = () => {
		const nextTheme = isDark ? "light" : "dark";

		document.cookie = `theme=${nextTheme}; path=/; max-age=31536000; samesite=lax`;
		applyTheme(nextTheme === "dark");

		setIsDark(nextTheme === "dark");
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
