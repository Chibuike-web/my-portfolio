import Image from "next/image";
import Link from "next/link";
import medibridgeThumbnail from "../../assets/thumbnails/light/medibridge-thumbnail.webp";
import nombaThumbnail from "../../assets/thumbnails/light/nomba-thumbnail.webp";

const projects = [
	{
		href: "/nomba",
		name: "Nomba",
		description: "Bulk Airtime Transfer",
		image: nombaThumbnail,
	},
	{
		href: "/medibridge",
		name: "Medibridge",
		description: "AI-Powered healthcare management system",
		image: medibridgeThumbnail,
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
						className="relative w-full overflow-hidden rounded-[24px] border border-border bg-surface-muted p-[6px] transition-all duration-200 ease-out group-hover/projects:opacity-35 hover:!opacity-100 focus-visible:!opacity-100 md:max-w-[367px] hover:scale-[1.02]"
					>
						<div className="relative aspect-[367/350] w-full overflow-hidden rounded-[18px] bg-background">
							<Image
								src={project.image}
								alt={`${project.name} project preview`}
								fill
								sizes="(max-width: 767px) 100vw, 367px"
								className="w-full"
								loading="eager"
							/>
							<div className="project-thumbnail-overlay relative z-10 flex h-full w-full flex-col p-4">
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
