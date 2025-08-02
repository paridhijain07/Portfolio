import TerminalHeader from '../components/TerminalHeader';
import TerminalBlock from '../components/TerminalBlock';
import { FaGithub, FaLinkedin, FaEnvelope, FaProjectDiagram, FaInfoCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-white px-6 py-12">
      <div className="w-full max-w-5xl mx-auto">
        <TerminalHeader cmd="npx portfolio --init" />

        <TerminalBlock>
          {/* Intro Section */}
          <div className="text-base md:text-lg font-mono mb-10">
            <div className="mb-6">
              <span className="text-green-400">const</span>{' '}
              <span className="text-blue-400">name</span>{' '}
              <span className="text-white">=</span>{' '}
              <span className="text-yellow-300 text-2xl md:text-4xl font-bold typing block max-w-full drop-shadow-[0_0_6px_#facc15]">
                "Paridhi Jain"
              </span>;
            </div>

            <p className="text-terminaltext text-sm md:text-base mb-2">
              {'// Full Stack Developer (MERN) | ML Enthusiast | DSA'}
            </p>
            <p className="text-terminaltext text-sm md:text-base mb-6">
              {'// 3rd Year B.Tech IT Student @ IIITM Gwalior'}
            </p>

            <div className="mb-6">
  <span className="text-green-400">function</span>{' '}
  <span className="text-blue-400">contact</span>() {'{'}
  <div className="ml-4">
    <span className="text-white">return</span> {'{'}
    <div className="ml-4">
      <div>
        <span className="text-purple-400">email</span>: <span className="text-yellow-300">"technologywithparidhi@gmail.com"</span>,
      </div>
      <div>
        <span className="text-purple-400">phone</span>: <span className="text-yellow-300">"+91-8085805313"</span>
      </div>
    </div>
    {'};'}
  </div>
  {'}'}
</div>


            <div>
              <span className="text-green-400">const</span>{' '}
              <span className="text-blue-400">socials</span>{' '}
              <span className="text-white">=</span> {'{'}
              <div className="ml-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-purple-400">github</span>:{' '}
                  <a
                    href="https://github.com/paridhijain07"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-gray-200 hover:text-gray-400 transition-colors"
                  >
                    <FaGithub />
                    <span>"github.com/paridhijain07"</span>
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-purple-400">linkedin</span>:{' '}
                  <a
                    href="www.linkedin.com/in/paridhi-jain-969178297"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-gray-200 hover:text-gray-400 transition-colors"
                  >
                    <FaLinkedin className="text-blue-400" />
                    <span>"www.linkedin.com/in/paridhi-jain-969178297"</span>
                  </a>
                </div>
              </div>
              {'}'};
            </div>
          </div>

          {/* Cards Section */}
          <h3 className="text-accent text-xl font-semibold mb-4">{'// Explore Sections'}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <NavCard to="/about" icon={<FaInfoCircle />} label="About Me" />
            <NavCard to="/projects" icon={<FaProjectDiagram />} label="My Projects" />
            <NavCard to="/contact" icon={<FaEnvelope />} label="Contact Me" />
          </div>
        </TerminalBlock>
      </div>
    </main>
  );
}

// Reusable NavCard Component
function NavCard({ to, icon, label }) {
  return (
    <Link to={to}>
      <div className="cursor-pointer bg-[#21262d] hover:bg-[#2c313a] transition rounded-lg p-4 flex items-center gap-3 text-terminaltext text-sm shadow-md hover:shadow-lg">
        <div className="text-xl text-green-400">{icon}</div>
        <span>{label}</span>
      </div>
    </Link>
  );
}
