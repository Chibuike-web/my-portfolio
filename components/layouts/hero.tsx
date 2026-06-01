import { EmailIcon } from "@/icons/email-icon";
import { GithubIcon } from "@/icons/github-icon";
import { LinkedinIcon } from "@/icons/linkedin-icon";
import Link from "next/link";
import { ReactNode } from "react";

export function Hero() {
	return (
		<div>
			<div className="pt-8 pb-10 text-gray-70 tight font-medium flex flex-col gap-2">
				<p>
					I’m a <span className="text-gray">design engineer</span> based in Nigeria. I design and
					build digital products with a strong focus on structure, usability, and craft.
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
						className="link focus-visible:outline-0 border border-transparent focus-visible:border-gray-70 rounded-[4px]"
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
			<div className="flex gap-3">
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
			className="px-4 py-2 bg-gray-05 rounded-full text-gray flex items-center gap-2 border border-transparent hover:bg-gray-10 focus-visible:outline-none focus-visible:border-gray-70 focus-visible:ring-3 focus-visible:ring-gray-15"
		>
			{children}
		</a>
	);
}
