import { Progress } from "@/components/progress";
import { ProgressBar } from "@/components/progress-bar";
import { VerticalTabs } from "@/components/vertical-tabs";

export default function Home() {
	return (
		<>
			<ProgressBar />
			<Progress />

			<div className="relative mx-auto flex max-w-7xl gap-16 px-6">
				<main className="flex-1">
					<section className="flex min-h-screen items-center justify-center">
						<div className="max-w-3xl">
							<h1 className="text-6xl font-bold tracking-tight text-black">Hero Section</h1>

							<p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-500">
								A thoughtful portfolio focused on product design, engineering, and interaction
								design.
							</p>
						</div>
					</section>

					<section
						id="section-1"
						className="flex min-h-screen items-center border-t border-black/5"
					>
						<div className="max-w-2xl py-24">
							<p className="mb-4 text-sm text-neutral-400">01</p>

							<h2 className="mb-6 text-5xl font-semibold tracking-tight">About Me</h2>

							<p className="text-lg leading-relaxed text-neutral-500">
								I&apos;m a design engineer passionate about building thoughtful digital products.
							</p>
						</div>
					</section>

					<section
						id="section-2"
						className="flex min-h-screen items-center border-t border-black/5"
					>
						<div className="max-w-2xl py-24">
							<p className="mb-4 text-sm text-neutral-400">02</p>

							<h2 className="mb-6 text-5xl font-semibold tracking-tight">Experience</h2>

							<p className="text-lg leading-relaxed text-neutral-500">
								Selected work across design engineering, product design, and frontend development.
							</p>
						</div>
					</section>

					<section
						id="section-3"
						className="flex min-h-screen items-center border-t border-black/5"
					>
						<div className="max-w-2xl py-24">
							<p className="mb-4 text-sm text-neutral-400">03</p>

							<h2 className="mb-6 text-5xl font-semibold tracking-tight">Work</h2>

							<p className="text-lg leading-relaxed text-neutral-500">
								A collection of projects I&apos;ve worked on over the years.
							</p>
						</div>
					</section>

					<section
						id="section-4"
						className="flex min-h-screen items-center border-t border-black/5"
					>
						<div className="max-w-2xl py-24">
							<p className="mb-4 text-sm text-neutral-400">04</p>

							<h2 className="mb-6 text-5xl font-semibold tracking-tight">Contact</h2>

							<p className="text-lg leading-relaxed text-neutral-500">
								Get in touch for collaborations or just to say hello.
							</p>
						</div>
					</section>

					<section
						id="section-5"
						className="flex min-h-screen items-center border-t border-black/5"
					>
						<div className="max-w-2xl py-24">
							<p className="mb-4 text-sm text-neutral-400">05</p>

							<h2 className="mb-6 text-5xl font-semibold tracking-tight">Blog</h2>

							<p className="text-lg leading-relaxed text-neutral-500">
								Thoughts on engineering, design, and technology.
							</p>
						</div>
					</section>

					<section
						id="section-6"
						className="flex min-h-screen items-center border-t border-black/5"
					>
						<div className="max-w-2xl py-24">
							<p className="mb-4 text-sm text-neutral-400">06</p>

							<h2 className="mb-6 text-5xl font-semibold tracking-tight">FAQ</h2>

							<p className="text-lg leading-relaxed text-neutral-500">
								Common questions people ask me.
							</p>
						</div>
					</section>
				</main>

				<aside className="hidden w-64 shrink-0 lg:block">
					<div className="sticky top-1/2 -translate-y-1/2">
						<VerticalTabs />
					</div>
				</aside>
			</div>
		</>
	);
}
