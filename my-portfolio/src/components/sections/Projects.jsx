import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  const projectsData = [
    {
      title: "Cloud Platform",
      description:
        "Scalable cloud infrastructure management with real-time monitoring and automated scaling.",
      techs: ["React", "Node.js", "AWS", "Docker"],
      link: "#",
    },
    {
      title: "AI Analytics Dashboard",
      description:
        "ML-powered data visualization platform with predictive analytics and interactive reports.",
      techs: ["Python", "TensorFlow", "D3.js", "Flask"],
      link: "#",
    },
    {
      title: "E-Commerce Web App",
      description:
        "Full-stack e-commerce with modern UI, secure payment integration, and customizable product inventory.",
      techs: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      link: "#",
    },
    {
      title: "Real-Time Chat App",
      description:
        "Scalable chat platform supporting real-time messaging, presence, and group chat features.",
      techs: ["Socket.io", "Express", "React", "Redis"],
      link: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
        <RevealOnScroll>
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techs.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <a
                  href={project.link}
                  className="text-blue-400 hover:text-blue-300 transition-colors font-medium inline-flex items-center gap-1"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
        </RevealOnScroll>
    </section>
  );
};