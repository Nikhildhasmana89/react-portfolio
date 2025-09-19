import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-gray-900 text-white shadow-md">
      <nav className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <h1 className="text-xl font-bold">
          Nikhil
          <span className="text-blue-400">.Portfolio</span>
        </h1>
        <ul className="flex space-x-6">
          <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-400">About</Link></li>
          <li><Link to="/github" className="hover:text-blue-400">Github</Link></li>
          <li><Link to="/contact" className="hover:text-blue-400">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
