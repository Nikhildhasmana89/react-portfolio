function About() {
  return (
    <section id="about" className="min-h-screen bg-gray-50 px-6 py-20 flex flex-col items-center">
      {/* Section Title */}
      <h2 className="text-4xl font-bold mb-12 border-b-4 border-indigo-500 inline-block">
        About Me
      </h2>

      {/* Content */}
      <div className="max-w-6xl grid md:grid-cols-2 gap-12 items-center">
        {/* Profile Image */}
        <div className="flex justify-center">
          <img
            src="https://avatars.githubusercontent.com/u/204548137?v=4" // replace with your photo
            alt="Nikhil"
            className="rounded-2xl shadow-lg w-64 h-64 object-cover border-4 border-indigo-500"
          />
        </div>

        {/* Text Content */}
        <div className="space-y-6 text-center md:text-left">
          <p className="text-lg text-gray-700 leading-relaxed">
            Hi 👋, I'm <span className="font-semibold text-indigo-600">Nikhil</span>, 
            a <span className="font-medium">B.Tech AIML student</span> passionate about 
            building scalable web applications and exploring Artificial Intelligence.  
          </p>

          <p className="text-gray-600">
            I specialize in <span className="font-semibold">React, Node.js, Python, and Machine Learning</span>.  
            My focus is on creating impactful projects that combine modern web technologies with AI solutions.  
          </p>

          <p className="text-gray-600">
            When I’m not coding, I love watching anime 🎬, reading 📚, exploring web series 📺 and exploring 
            new ideas that inspire creativity.  
          </p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
            {["React", "Node.js", "Python", "AI/ML", "Tailwind CSS", "Git"].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-indigo-100 text-indigo-600 rounded-full shadow-sm text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
