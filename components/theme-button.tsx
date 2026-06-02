import { Sun } from "lucide-react";

export function ThemeButton() {
	return (
		<button
			aria-hidden="true"
			className="flex size-10 cursor-pointer items-center justify-center rounded-full transition-colors duration-150 ease-out hover:bg-surface-muted"
		>
			<Sun className="size-5 text-foreground" />
		</button>
	);
}
