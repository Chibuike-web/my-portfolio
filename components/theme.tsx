import { cookies } from "next/headers";
import { ThemeButton } from "./theme-button";

type ThemeValue = "light" | "dark";

export async function Theme() {
	const cookieStore = await cookies();
	const storedTheme = cookieStore.get("theme")?.value;
	const initialTheme: ThemeValue = storedTheme === "dark" ? "dark" : "light";

	return <ThemeButton initialTheme={initialTheme} />;
}
