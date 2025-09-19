function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white text-center px-6">
      <h1 className="text-4xl sm:text-6xl font-extrabold">
        Hi, I'm <span className="text-indigo-400">Nikhil</span>
      </h1>
      <p className="mt-4 text-lg sm:text-2xl text-gray-300">
        Aspiring AI/ML Engineer | Full-Stack Developer | Tech Enthusiast
      </p>
      <div className="mt-6 flex gap-4">
        <a
          href="github"
          className="px-6 py-3 bg-indigo-500 rounded-full hover:bg-indigo-600 transition"
        >
          View My Work
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-indigo-500 rounded-full hover:bg-indigo-600 transition"
        >
          Contact Me
        </a>
      </div>

    </section>
    
  );
}

export default Home;
