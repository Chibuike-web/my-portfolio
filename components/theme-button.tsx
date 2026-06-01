import { Sun } from "lucide-react";

export default function ThemeButton() {
	return (
		<button
			aria-hidden="true"
			className="flex size-10 items-center justify-center rounded-full hover:bg-surface-muted cursor-pointer"
		>
			<Sun className="size-5 text-foreground" />
		</button>
	);
}
