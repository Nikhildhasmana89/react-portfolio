import React from "react";

function Github() {
  return (
    <section
      id="github"
      className="h-[calc(100vh-120px)] bg-gray-900 px-6 py-10 flex flex-col items-center justify-center overflow-hidden"
    >
      <h2 className="text-3xl font-bold mb-6 text-white">My GitHub Projects</h2>

      <p className="text-white mb-8 text-center max-w-md">
        Here are some of the projects I’ve worked on. You can click to see the
        code on GitHub.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 max-w-4xl w-full overflow-y-auto px-2 max-h-[calc(100vh-250px)]">
        <div className="p-4 bg-white rounded shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Metro Sarthi</h3>
          <p className="text-gray-600 mb-4">
            A simple metro travel assistant application built with HTML, CSS,
            and JavaScript.
          </p>
          <a
            href="https://github.com/Nikhildhasmana89/Metro-sarthi"
            target="_blank"
            className="text-indigo-600 hover:underline"
          >
            View on GitHub →
          </a>
        </div>

        <div className="p-4 bg-white rounded shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Small-React-Projects</h3>
          <p className="text-gray-600 mb-4">
            Beginner-friendly React projects to improve my frontend development
            skills.
          </p>
          <a
            href="https://github.com/Nikhildhasmana89/Small-React-Projects"
            target="_blank"
            className="text-indigo-600 hover:underline"
          >
            View on GitHub →
          </a>
        </div>

        <div className="p-4 bg-white rounded shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">
            react-currency-converter
          </h3>
          <p className="text-gray-600 mb-4">
            A simple currency converter built with React that fetches real-time
            exchange rates and allows users to convert between multiple
            currencies easily.
          </p>
          <a
            href="https://github.com/Nikhildhasmana89/react-currency-converter"
            target="_blank"
            className="text-indigo-600 hover:underline"
          >
            View on GitHub →
          </a>
        </div>

        <div className="p-4 bg-white rounded shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Portfolio Website</h3>
          <p className="text-gray-600 mb-4">
            Personal portfolio website built with React and React Router.
            Features Home, About, Projects, and Contact pages, along with a
            GitHub integration to fetch and display my profile and repositories.
          </p>
          <a
            href="https://github.com/Nikhildhasmana89/react-portfolio"
            target="_blank"
            className="text-indigo-600 hover:underline"
          >
            View on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}

export default Github;
