import React from "react";

function Github() {
  return (
    <section
      id="github"
      className="min-h-screen bg-gray-50 px-6 py-20 flex flex-col items-center"
    >
      {/* Heading */}
      <h2 className="text-3xl font-bold mb-8">My GitHub Projects</h2>

      {/* Short Description */}
      <p className="text-gray-700 mb-12 text-center max-w-md">
        Here are some of the projects I’ve worked on. You can click to see the code on GitHub.
      </p>

      {/* Project Cards */}
      <div className="grid gap-8 sm:grid-cols-2 max-w-4xl w-full">
        {/* Project 1 */}
        <div className="p-4 bg-white rounded shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">E-Commerce Website</h3>
          <p className="text-gray-600 mb-4">
            A simple e-commerce website with product listing, cart functionality, and authentication.
          </p>
          <a
            href="https://github.com/yourusername/ecommerce"
            target="_blank"
            className="text-indigo-600 hover:underline"
          >
            View on GitHub →
          </a>
        </div>

        {/* Project 2 */}
        <div className="p-4 bg-white rounded shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">AI Chatbot</h3>
          <p className="text-gray-600 mb-4">
            A chatbot using Python and NLP techniques to answer questions and provide information.
          </p>
          <a
            href="https://github.com/yourusername/aichatbot"
            target="_blank"
            className="text-indigo-600 hover:underline"
          >
            View on GitHub →
          </a>
        </div>

        {/* Project 3 */}
        <div className="p-4 bg-white rounded shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Portfolio Website</h3>
          <p className="text-gray-600 mb-4">
            My personal portfolio website built with React and Tailwind CSS.
          </p>
          <a
            href="https://github.com/yourusername/portfolio"
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
