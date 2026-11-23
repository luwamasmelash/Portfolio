
import { RevealOnScroll } from "../RevealOnScroll";
import profilePicture from "../../assets/profile-picture.jpg";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-24"
    >
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>

      <RevealOnScroll>
        <div className="relative z-10 max-w-6xl mx-auto w-full">

          {/* Main content */}
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-16">

            {/* Left side - Text */}
            <div className="flex-1 text-center md:text-left">

              {/* Availability badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-green-500/30 bg-green-500/10">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-green-400 text-sm font-medium">
                  Software Engineering Student
                </span>
              </div>

              {/* Main heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Luwam Asmelash
                </span>
              </h1>

              {/* Subtitle */}
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-300 mb-6">
                Building Ideas Into{" "}
                <span className="text-blue-400">
                  Digital Experiences.
                </span>
              </h2>

              {/* Description */}
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl mx-auto md:mx-0">
                I'm a passionate Software Engineering student who enjoys
                creating modern, creative, and useful applications.
                I love exploring new technologies, solving real-world
                problems, and continuously growing as a developer.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4">

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
            </div>

            {/* Right side - Profile Picture */}
            <div className="flex-1 flex justify-center items-center">

              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">

                {/* Gradient background */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 blur-md opacity-60"></div>

                {/* Profile image */}
                <div className="relative w-full h-full rounded-full p-1 bg-gradient-to-tr from-blue-400 via-purple-500 to-pink-500">

                  <img
                    src={profilePicture}
                    alt="Luwam Asmelash"
                    className="w-full h-full object-cover rounded-full border-4 border-gray-950"
                  />

                </div>

              </div>

            </div>

          </div>

          {/* Technologies */}
          <div className="mt-20 text-center">

            <p className="text-gray-500 text-sm uppercase tracking-widest mb-4">
              Always learning and building with
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              {[
                "React",
                "TypeScript",
                "JavaScript",
                "Node.js",
                "Tailwind CSS",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 text-sm text-gray-300 bg-white/5 border border-white/10 rounded-full hover:border-blue-500/50 hover:text-blue-400 transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>

          </div>

        </div>
      </RevealOnScroll>
    </section>
  );
};
