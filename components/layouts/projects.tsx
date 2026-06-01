import Image from "next/image";
import Link from "next/link";

const projects = [
	{
		href: "/nomba",
		name: "Nomba",
		description: "Bulk Airtime Transfer",
		image: "/nomba-thumbnail.png",
	},
	{
		href: "/medibridge",
		name: "Medibridge",
		description: "AI-Powered healthcare management system",
		image: "/medibridge-thumbnail.png",
	},
] as const;

export function Projects() {
	return (
		<div className="py-22">
			<h1 className="tight font-medium text-[1rem] text-foreground">Projects</h1>
			<div className="group/projects flex flex-col gap-4 pt-10 md:flex-row md:items-center">
				{projects.map((project) => (
					<Link
						key={project.href}
						href={project.href}
						className="relative w-full overflow-hidden rounded-[24px] border border-border bg-surface-muted p-[6px] transition-opacity duration-150 ease-out group-hover/projects:opacity-35 hover:!opacity-100 focus-visible:!opacity-100 md:max-w-[367px]"
					>
						<div className="relative w-full overflow-hidden rounded-[18px] aspect-[367/350]">
							<Image
								src={project.image}
								alt={`${project.name} project preview`}
								fill
								sizes="(max-width: 767px) 100vw, 367px"
								className="w-full"
							/>
							<div className="relative z-10 flex h-full w-full flex-col bg-gradient-to-t from-white/90 from-0% via-white/35 via-18% to-transparent to-58% p-4">
								<p className="mt-auto text-[1rem] font-medium text-foreground">{project.name}</p>
								<p className="font-medium text-muted-foreground">{project.description}</p>
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}
