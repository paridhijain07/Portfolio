import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gray-950 text-accent font-mono rounded-b-xl shadow">
      {/* Your name */}
      <div className="text-yellow-400 text-lg font-bold">
        Paridhi Jain
      </div>

      {/* Nav links */}
      <div className="flex gap-6 text-sm sm:text-base">
        <Link to="/" className="hover:text-white transition">Home</Link>
        <Link to="/about" className="hover:text-white transition">About</Link>
        <Link to="/projects" className="hover:text-white transition">Projects</Link>
        <Link to="/contact" className="hover:text-white transition">Contact</Link>
      </div>
    </nav>
  );
}
