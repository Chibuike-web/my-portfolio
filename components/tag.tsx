type TagProps = {
	label: string;
	color: string;
	bgColor: string;
};

export function Tag({ label, color, bgColor }: TagProps) {
	return (
		<div className="flex items-center gap-2">
			<span
				className="px-2 py-1.5 text-[12px] rounded-full"
				style={{
					color,
					backgroundColor: bgColor,
				}}
			>
				{label}
			</span>
		</div>
	);
}
