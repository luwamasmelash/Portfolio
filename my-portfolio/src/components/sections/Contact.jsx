
import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

  const SERVICE_ID = "service_a6kb1y9";
  const TEMPLATE_ID = "template_51crpfj";
  const PUBLIC_KEY = "LLPXZ4cNSn3qVSoNL";

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSending) return;

    setIsSending(true);
    setStatus("");

    try {
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        e.target,
        PUBLIC_KEY
      );

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.log(error)
      console.error("EmailJS Error:", error);
      setStatus("error");
    } finally {
      setIsSending(false);
    }
  };

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

          <form
            onSubmit={handleSubmit}
            className="space-y-8"
          >
            {/* Name */}
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              minLength={2}
              maxLength={100}
              autoComplete="name"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-6 py-5 text-white text-lg transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              placeholder="Name..."
            />

            {/* Email */}
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              maxLength={254}
              autoComplete="email"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-6 py-5 text-white text-lg transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              placeholder="example@gmail.com"
            />

            {/* Message */}
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              minLength={5}
              maxLength={5000}
              rows={7}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-6 py-5 text-white text-lg transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 resize-y"
              placeholder="Your Message..."
            />

            {/* Status Message */}
            {status === "success" && (
              <p className="text-green-400 text-center">
                Your message has been sent successfully!
              </p>
            )}

            {status === "error" && (
              <p className="text-red-400 text-center">
                Oops! Something went wrong. Please try again.
              </p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSending}
              className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-blue-400 disabled:cursor-not-allowed text-white py-5 px-6 rounded-lg font-semibold text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>

          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
