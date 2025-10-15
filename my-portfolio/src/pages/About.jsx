function About() {
  return (
    <section
      id="about"
      className="h-[calc(100vh-120px)] bg-gray-900 text-white px-6 py-10 flex flex-col items-center justify-center overflow-hidden"
    >
      <h2 className="text-4xl font-bold mb-8 border-b-4 border-indigo-500 inline-block">
        About Me
      </h2>

      <div className="max-w-6xl grid md:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center">
          <img
            src="https://avatars.githubusercontent.com/u/204548137?v=4"
            alt="Nikhil"
            className="rounded-2xl shadow-lg w-64 h-64 object-cover border-4 border-indigo-500"
          />
        </div>

        <div className="space-y-4 text-center md:text-left">
          <p className="text-lg text-gray-300 leading-relaxed">
            Hi 👋, I'm{" "}
            <span className="font-semibold text-indigo-500">Nikhil</span>, a
            <span className="font-medium"> B.Tech AIML student</span> passionate
            about building scalable web applications and exploring Artificial
            Intelligence.
          </p>

          <p className="text-gray-300">
            I specialize in{" "}
            <span className="font-semibold">
              React, Node.js, Python, and Machine Learning
            </span>
            . My focus is on creating impactful projects that combine modern web
            technologies with AI solutions.
          </p>

          <p className="text-gray-300">
            When I'm not coding, I love watching anime 🎬, reading 📚, exploring
            web series 📺 and exploring new ideas that inspire creativity.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
            <span className="px-4 py-2 bg-indigo-100 text-indigo-600 rounded-full shadow-sm text-sm font-medium">
              React
            </span>
            <span className="px-4 py-2 bg-indigo-100 text-indigo-600 rounded-full shadow-sm text-sm font-medium">
              Node.js
            </span>
            <span className="px-4 py-2 bg-indigo-100 text-indigo-600 rounded-full shadow-sm text-sm font-medium">
              Python
            </span>
            <span className="px-4 py-2 bg-indigo-100 text-indigo-600 rounded-full shadow-sm text-sm font-medium">
              AI/ML
            </span>
            <span className="px-4 py-2 bg-indigo-100 text-indigo-600 rounded-full shadow-sm text-sm font-medium">
              Tailwind CSS
            </span>
            <span className="px-4 py-2 bg-indigo-100 text-indigo-600 rounded-full shadow-sm text-sm font-medium">
              Git
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
