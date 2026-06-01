import { LogoIcon } from "@/icons/logo-icon";
import { Sun } from "lucide-react";

export function Navbar() {
	return (
		<div className="flex items-center justify-between">
			<div className="flex items-center gap-[10px]">
				<div className="bg-gray-05 size-[48px] rounded-full flex items-center justify-center shrink-0">
					<LogoIcon />
				</div>
				<div className="flex flex-col gap-[10px] font-medium">
					<p className="text-gray no-line-height tight">Chibuike Maduabuchi</p>
					<p className="text-gray-70 no-line-height tight">Design Engineer</p>
				</div>
			</div>
			<div className="p-[6px] hover:bg-gray-05 rounded-full">
				<Sun className="text-gray size-5" />
			</div>
		</div>
	);
}
