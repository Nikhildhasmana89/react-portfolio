import React from "react";
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between">
        
        <p className="text-sm">
          © {new Date().getFullYear()} Nikhil Dhasmana. All Rights Reserved.
        </p>

        <div className="flex space-x-6 mt-4 md:mt-0">
          <a 
            href="https://github.com/Nikhildhasmana89" 
            target="_blank" 
            rel="noreferrer"
            className="hover:text-blue-400"
          >
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/YOUR_LINKEDIN" 
            target="_blank" 
            rel="noreferrer"
            className="hover:text-blue-400"
          >
            LinkedIn
          </a>
          <a 
            href="mailto: nikhildhasmana5@gmail.com" 
            className="hover:text-blue-400"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
