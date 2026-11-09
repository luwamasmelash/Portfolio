
import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4"
    >
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>

      <RevealOnScroll>
        <div className="relative z-10 text-center max-w-4xl mx-auto">

          {/* Availability badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-green-500/30 bg-green-500/10">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-green-400 text-sm font-medium">
              Software Engineering Student
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Luwam Asmelash
            </span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-300 mb-6">
            Building Ideas Into{" "}
            <span className="text-blue-400">Digital Experiences.</span>
          </h2>

          {/* Description */}
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            I'm a passionate Software Engineering student who enjoys
            creating modern, creative, and useful applications.
            I love exploring new technologies, solving real-world
            problems, and continuously growing as a developer.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">

            <a
              href="#projects"
              className="group w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white px-8 py-3.5 rounded-lg font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2"
            >
              View My Projects
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto border border-gray-600 hover:border-purple-500 text-gray-300 hover:text-white px-8 py-3.5 rounded-lg font-semibold transition-all duration-300 hover:-translate-y-1 hover:bg-purple-500/10 flex items-center justify-center gap-2"
            >
              Contact Me
              <span>↗</span>
            </a>

          </div>

          {/* Technologies */}
          <div className="mt-16">
            <p className="text-gray-500 text-sm uppercase tracking-widest mb-4">
              Always learning and building with
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              {["React", "TypeScript", "JavaScript", "Node.js", "Tailwind CSS"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 text-sm text-gray-300 bg-white/5 border border-white/10 rounded-full hover:border-blue-500/50 hover:text-blue-400 transition-all duration-300"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>

        </div>
      </RevealOnScroll>
    </section>
  );
};
