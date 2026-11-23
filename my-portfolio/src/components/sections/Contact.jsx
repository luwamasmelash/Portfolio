
import { RevealOnScroll } from "../RevealOnScroll";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-8"
    >
      <RevealOnScroll>
        <div className="w-full max-w-4xl mx-auto">

          <h2 className="text-4xl sm:text-5xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>

          <form className="space-y-8">

            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full bg-white/5 border border-white/10 rounded-lg px-6 py-5 text-white text-lg transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              placeholder="Name..."
            />

            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full bg-white/5 border border-white/10 rounded-lg px-6 py-5 text-white text-lg transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              placeholder="example@gmail.com"
            />

            <textarea
              id="message"
              name="message"
              required
              rows={7}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-6 py-5 text-white text-lg transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 resize-y"
              placeholder="Your Message..."
            />

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-5 px-6 rounded-lg font-semibold text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
            >
              Send Message
            </button>

          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
