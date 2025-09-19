function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-gray-900 text-white px-6 py-20 flex flex-col items-center"
    >
      {/* Section Title */}
      <h2 className="text-4xl font-bold mb-8 border-b-4 border-indigo-500 inline-block">
        Contact Me
      </h2>

      <p className="text-lg text-gray-300 mb-12 text-center max-w-2xl">
        I’d love to connect with you! Whether you have a question, want to
        collaborate, or just say hi, feel free to reach out.
      </p>

      {/* Contact Links */}
      <div className="flex gap-6 mb-12 flex-wrap justify-center">
        <a
          href="nikhildhasmana5@gmail.com"
          className="px-6 py-3 bg-indigo-500 rounded-full hover:bg-indigo-600 transition"
        >
          📧 Email Me
        </a>
        <a
          href="https://github.com/Nikhildhasmana89"
          target="_blank"
          className="px-6 py-3 bg-gray-800 rounded-full hover:bg-gray-700 transition"
        >
          💻 GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/nikhil-dhasmana-122728305/"
          target="_blank"
          className="px-6 py-3 bg-blue-600 rounded-full hover:bg-blue-700 transition"
        >
          🔗 LinkedIn
        </a>
      </div>

      {/* Optional Contact Form */}
      <form className="w-full max-w-lg bg-gray-800 p-8 rounded-2xl shadow-lg">
        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Name</label>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg text-gray-900"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Email</label>
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg text-gray-900"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-300 mb-2">Message</label>
          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full p-3 rounded-lg text-gray-900"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-indigo-500 hover:bg-indigo-600 rounded-lg font-semibold"
        >
          Send Message 🚀
        </button>
      </form>
    </section>
  );
}

export default Contact;
