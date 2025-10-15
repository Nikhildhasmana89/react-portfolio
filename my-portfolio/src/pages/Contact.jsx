function Contact() {
  return (
    <section
      id="contact"
      className="min-h-[calc(100vh-120px)] bg-gray-900 text-white px-4 sm:px-6 lg:px-12 py-10 flex flex-col items-center justify-center"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 border-b-4 border-indigo-500 inline-block">
        Contact Me
      </h2>

      <p className="text-base sm:text-lg text-gray-300 mb-8 sm:mb-12 text-center max-w-xl sm:max-w-2xl">
        I’d love to connect with you! Whether you have a question, want to
        collaborate, or just say hi, feel free to reach out.
      </p>

      <div className="flex gap-4 sm:gap-6 mb-8 sm:mb-12 flex-wrap justify-center">
        <a
          href="mailto:nikhildhasmana5@gmail.com"
          className="px-4 sm:px-6 py-2 sm:py-3 bg-indigo-500 rounded-full hover:bg-indigo-600 hover:shadow-lg transition"
        >
          📧 Email Me
        </a>

        <a
          href="https://github.com/Nikhildhasmana89"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 sm:px-6 py-2 sm:py-3 bg-gray-800 rounded-full hover:bg-gray-700 hover:shadow-lg transition"
        >
          💻 GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/nikhil-dhasmana-122728305/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 rounded-full hover:bg-blue-700 hover:shadow-lg transition"
        >
          🔗 LinkedIn
        </a>
      </div>

      <form className="w-full max-w-md sm:max-w-lg bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-lg overflow-y-auto max-h-[calc(100vh-300px)]">
        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Name</label>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Email</label>
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-300 mb-2">Message</label>
          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-indigo-500 hover:bg-indigo-600 rounded-lg font-semibold transition-all hover:shadow-lg"
        >
          Send Message 🚀
        </button>
      </form>
    </section>
  );
}

export default Contact;
