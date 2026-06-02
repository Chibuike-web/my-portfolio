import { Sun } from "lucide-react";

export function ThemeButton() {
	return (
		<button
			aria-hidden="true"
			className="flex size-10 cursor-pointer items-center justify-center rounded-full duration-150 ease-out hover:bg-surface-muted active:scale-96 transition-all"
		>
			<Sun className="size-5 text-foreground" />
		</button>
	);
}
