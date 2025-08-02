import TerminalHeader from '../components/TerminalHeader';
import TerminalBlock from '../components/TerminalBlock';

import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaPython,
  FaGitAlt,
  FaBootstrap,
} from 'react-icons/fa';
import {
  SiTailwindcss, SiMongodb, SiMysql, SiPostman, SiFigma,
  SiRedux, SiExpress, SiNodedotjs, SiOpenai
} from 'react-icons/si';

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0d1117] to-[#161b22] text-white px-6 py-12">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-10">
        <div className="bg-[#161b22] rounded-xl shadow-md p-6 md:p-10 w-full">
          <TerminalHeader cmd="cat about-me.txt" />

          <TerminalBlock>
            <h2 className="text-accent text-2xl font-bold mb-4">{'// About Me'}</h2>

            <p className="text-terminaltext text-base leading-relaxed mb-8">
              👋 Hello! I'm <span className="text-yellow-300 font-semibold">Paridhi Jain</span>, a{' '}
              <span className="text-green-400">Full Stack Developer</span>,{' '}
              <span className="text-cyan-300">ML enthusiast</span>, and passionate problem-solver.
              <br /><br />
              I'm currently a 3rd-year B.Tech student in <span className="text-blue-400">Information Technology</span> at{' '}
              <span className="text-purple-400">IIITM Gwalior</span>. I love building user-centric solutions with the{' '}
              <span className="text-cyan-300">MERN stack</span> and have deep interest in LLMs and intelligent agents.
              <br /><br />
              💡 I've solved <span className="text-green-400 font-semibold">500+ DSA questions</span> across platforms like LeetCode and GFG.
              My foundation in <span className="text-pink-400 font-semibold">Object Oriented Programming, Operating Systems, DBMS and Computer Networks</span> helps me build efficient and scalable systems.
              <br /><br />
              📄{' '}
              <a
                href="/Paridhi%20Latest%20Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline hover:text-blue-300"
              >
                View My Resume
              </a>
            </p>

            {/* TECH STACK GRID */}
            <h3 className="text-accent text-xl font-semibold mb-4">{'// Tech Stack & Tools'}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-10">
              <TechCard icon={<FaReact />} label="React.js" color="text-cyan-400" />
              <TechCard icon={<SiTailwindcss />} label="Tailwind CSS" color="text-sky-400" />
              <TechCard icon={<FaBootstrap />} label="Bootstrap" color="text-purple-400" />
              <TechCard icon={<FaJs />} label="JavaScript" color="text-yellow-300" />
              <TechCard icon={<SiNodedotjs />} label="Node.js" color="text-green-400" />
              <TechCard icon={<SiExpress />} label="Express.js" color="text-gray-300" />
              <TechCard icon={<SiMongodb />} label="MongoDB" color="text-green-300" />
              <TechCard icon={<SiMysql />} label="MySQL" color="text-blue-300" />
              <TechCard icon={<SiRedux />} label="Redux Toolkit" color="text-purple-500" />
              <TechCard icon={<FaGitAlt />} label="Git" color="text-orange-400" />
              <TechCard icon={<SiPostman />} label="Postman" color="text-orange-300" />
              <TechCard icon={<SiFigma />} label="Figma" color="text-pink-400" />
              <TechCard icon={<SiOpenai />} label="OpenAI API" color="text-green-300" />
              <TechCard icon={<FaPython />} label="LangChain Agents" color="text-yellow-400" />
            </div>

            {/* EXPERIENCE CARDS */}
            <h3 className="text-accent text-xl font-semibold mb-5">{'// What I’ve Built & Explored'}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <ExpCard
                title="Global State Management"
                icon={<SiRedux className="text-purple-500 text-xl" />}
                desc="Used Redux Toolkit (slices + thunks) for large-scale apps with structured state flow."
              />
              <ExpCard
                title="API Development"
                icon={<SiExpress className="text-gray-300 text-xl" />}
                desc="Built RESTful APIs for auth, course management, and trip planning using Express.js & MongoDB."
              />
              <ExpCard
                title="JWT + Role-Based Access"
                icon={<FaNodeJs className="text-green-400 text-xl" />}
                desc="Created secure login flows with JWT and dashboards based on user roles like admin, doctor, student."
              />
              <ExpCard
                title="AI Agents & LLMs"
                icon={<SiOpenai className="text-green-300 text-xl" />}
                desc="Built smart AI workflows using OpenAI and LangChain — auto-replies, summarization, mock-interviews."
              />
              <ExpCard
                title="Media Handling"
                icon={<SiFigma className="text-pink-400 text-xl" />}
                desc="Integrated Cloudinary for optimized media uploads in healthcare and EdTech apps."
              />
            </div>
          </TerminalBlock>
        </div>
      </div>
    </main>
  );
}

// Tech Card
function TechCard({ icon, label, color }) {
  return (
    <div className="bg-[#21262d] rounded-lg p-3 flex flex-col items-center justify-center text-center hover:bg-[#2c313a] transition">
      <div className={`text-2xl mb-2 ${color}`}>{icon}</div>
      <div className="text-terminaltext text-sm">{label}</div>
    </div>
  );
}

// Experience Card
function ExpCard({ icon, title, desc }) {
  return (
    <div className="bg-[#21262d] p-4 rounded-lg shadow-sm hover:bg-[#2c313a] transition">
      <div className="flex items-center gap-3 mb-2">
        {icon}
        <h4 className="text-white font-semibold text-base">{title}</h4>
      </div>
      <p className="text-sm text-terminaltext leading-relaxed">{desc}</p>
    </div>
  );
}
