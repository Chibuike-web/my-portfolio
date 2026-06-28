import { EmailIcon } from "@/icons/email-icon";
import { GithubIcon } from "@/icons/github-icon";
import { LinkedinIcon } from "@/icons/linkedin-icon";
import Link from "next/link";
import { ReactNode } from "react";

export function Hero() {
	return (
		<div>
			<div className="mount-2 tight flex flex-col gap-2 pt-8 pb-10 font-medium text-muted-foreground text-pretty">
				<p>
					I’m a <span className="text-foreground">design engineer</span>. I design and build digital
					products with a strong focus on structure, usability, and craft.
				</p>
				<p>
					For the past year and a half, I’ve been building products independently, working across
					product thinking, interface design, and frontend engineering. I care about systems that
					feel clear, fast, and intuitive to use.
				</p>
				<p>
					Recently, I’ve been building{" "}
					<Link
						href="/medibridge"
						prefetch={true}
						className="link rounded border border-transparent focus-visible:border-muted-foreground focus-visible:outline-none"
					>
						MediBridge
					</Link>
					, a platform for managing and transferring patient records between hospitals. I designed
					the workflows, structured the system, and built the frontend from the ground up.
				</p>
				<p>
					I’m currently looking for opportunities to work with thoughtful teams building ambitious
					products.
				</p>
			</div>
			<div className="mount-3 flex flex-wrap gap-x-3 gap-y-2">
				<HeroButton link="mailto:chibuikemaduabuchi2023@gmail.com">
					<EmailIcon /> <span className="font-semibold">Mail</span>
				</HeroButton>
				<HeroButton link="https://github.com/Chibuike-web">
					<GithubIcon /> <span className="font-semibold">Github</span>
				</HeroButton>
				<HeroButton link="https://www.linkedin.com/in/chibuike-maduabuchi/">
					<LinkedinIcon /> <span className="font-semibold">Linkedin</span>
				</HeroButton>
			</div>
		</div>
	);
}

function HeroButton({ link, children }: { link: string; children: ReactNode }) {
	return (
		<a
			href={link}
			target="_blank"
			rel="noopener noreferrer"
			className="flex min-h-10 items-center gap-2 rounded-full border border-transparent bg-surface-muted px-4 py-1.5 text-foreground transition-[background-color,scale] duration-150 ease-out hover:bg-surface-hover active:scale-96 focus-visible:border-muted-foreground focus-visible:ring-3 focus-visible:ring-ring focus-visible:outline-none"
		>
			{children}
		</a>
	);
}
