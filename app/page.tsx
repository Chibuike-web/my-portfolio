import { ProgressBar } from "@/components/progress-bar";

export default function Home() {
  return (
    <>
      <ProgressBar />
      <main>
        <section className="h-screen flex items-center justify-center bg-gray-50">
          <h1 className="text-4xl font-bold">Hero Section</h1>
        </section>

        <section id="section-1" className="h-screen flex items-center justify-center bg-white">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-gray-600">
              I&apos;m a design engineer passionate about building thoughtful digital products.
            </p>
          </div>
        </section>

        <section id="section-2" className="h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold mb-4">Experience</h2>
            <p className="text-gray-600">
              Selected work across design engineering, product design, and frontend development.
            </p>
          </div>
        </section>

        <section id="section-3" className="h-screen flex items-center justify-center bg-white">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold mb-4">Work</h2>
            <p className="text-gray-600">
              A collection of projects I&apos;ve worked on over the years.
            </p>
          </div>
        </section>

        <section id="section-4" className="h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold mb-4">Contact</h2>
            <p className="text-gray-600">
              Get in touch for collaborations or just to say hello.
            </p>
          </div>
        </section>

        <section id="section-5" className="h-screen flex items-center justify-center bg-white">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold mb-4">Blog</h2>
            <p className="text-gray-600">
              Thoughts on engineering, design, and technology.
            </p>
          </div>
        </section>

        <section id="section-6" className="h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold mb-4">FAQ</h2>
            <p className="text-gray-600">
              Common questions people ask me.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}