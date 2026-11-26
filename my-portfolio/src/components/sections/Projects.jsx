
import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  const projectsData = [
    {
      number: "01",
      title: "AI SaaS Application",
      description:
        "An AI-powered application designed to simplify everyday tasks through intelligent tools, content generation, and a modern user experience.",
      techs: ["Next.js", "TypeScript", "Clerk", "AI", "Tailwind CSS"],
      github: "#",
      demo: "#",
    },
    {
      number: "02",
      title: "Grocery Management System",
      description:
        "A full-stack grocery management platform that helps manage products, inventory, users, and orders through an intuitive dashboard.",
      techs: ["React", "Node.js", "Express", "PostgreSQL", "Prisma"],
      github: "#",
      demo: "#",
    },
    {
      number: "03",
      title: "Social Media Platform",
      description:
        "A modern social platform where users can connect, share posts, interact with others, and build meaningful online communities.",
      techs: ["React", "TypeScript", "MongoDB", "Node.js", "Tailwind CSS"],
      github: "#",
      demo: "https://ping-8c1ujua08-liwix24-4281s-projects.vercel.app/",
    },
    {
      number: "04",
      title: "E-Commerce Web Application",
      description:
        "A responsive online shopping experience featuring product management, shopping carts, authentication, and secure checkout functionality.",
      techs: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Stripe"],
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen py-24 px-4 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-40 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>

      <RevealOnScroll>
        <div className="max-w-6xl mx-auto relative z-10">

          {/* Section heading */}
          <div className="text-center mb-16">
            <p className="text-blue-400 font-medium tracking-widest uppercase text-sm mb-3">
              What I've been working on
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-5 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              My Projects
            </h2>

            <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
              Here are some of the projects I've worked on while
              exploring new technologies, improving my skills,
              and turning ideas into real-world applications.
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">

            {projectsData.map((project) => (
              <div
                key={project.number}
                className="group relative p-7 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-blue-500/40 hover:bg-white/[0.05] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/5 flex flex-col justify-between"
              >
                <div>
                  {/* Project number */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl font-bold text-blue-500/30 group-hover:text-blue-400/70 transition-colors">
                      {project.number}
                    </span>

                    <span className="text-gray-500 text-xl group-hover:text-blue-400 transition-colors">
                      ↗
                    </span>
                  </div>

                  {/* Project title */}
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.techs.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs sm:text-sm px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/10 hover:bg-blue-500/20 hover:border-blue-500/30 transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project links */}
                <div className="flex items-center gap-6 border-t border-white/10 pt-5">

                  <a
                    href={project.github !== "#" ? project.github : undefined}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      if (project.github === "#") e.preventDefault();
                    }}
                    className={`font-medium text-sm transition-colors inline-flex items-center gap-2 ${
                      project.github === "#"
                        ? "text-gray-500 cursor-not-allowed"
                        : "text-gray-300 hover:text-blue-400"
                    }`}
                  >
                    <span>GitHub</span>
                    <span>↗</span>
                  </a>

                  <a
                    href={project.demo !== "#" ? project.demo : undefined}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      if (project.demo === "#") e.preventDefault();
                    }}
                    className={`font-medium text-sm transition-colors inline-flex items-center gap-2 ${
                      project.demo === "#"
                        ? "text-gray-500 cursor-not-allowed"
                        : "text-blue-400 hover:text-purple-400"
                    }`}
                  >
                    <span>Live Demo</span>
                    <span>→</span>
                  </a>

                </div>
              </div>
            ))}

          </div>

          {/* Bottom message */}
          <div className="text-center mt-16">
            <p className="text-gray-400 mb-4">
              Interested in seeing more of my work?
            </p>

            <a
              href="https://github.com/luwamasmelash"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors"
            >
              Explore My GitHub
              <span>↗</span>
            </a>
          </div>

        </div>
      </RevealOnScroll>
    </section>
  );
};
