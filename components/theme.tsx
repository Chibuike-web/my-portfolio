import { cookies } from "next/headers";
import { ThemeButton } from "./theme-button";

export async function Theme() {
	const cookieStore = await cookies();
	const stored = cookieStore.get("theme")?.value;
	return <ThemeButton initialTheme={stored} />;
}
