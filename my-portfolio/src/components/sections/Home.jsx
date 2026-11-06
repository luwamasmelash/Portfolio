import {RevealOnScroll} from "../RevealOnScroll";
export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
      <div className="text-center z-10 px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Hi, I'm Luwam Asmelash
        </h1>

        <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
          I'm a Software Engineering student who loves building
          creative and useful applications. I enjoy learning
          new technologies and solving real-world problems.
        </p>

        <div className="flex justify-center space-x-4">
          <a
            href="#projects"
            className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition hover:-translate-y-0.5"
          >
            Contact Me
          </a>
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};
