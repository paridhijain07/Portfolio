import TerminalHeader from '../components/TerminalHeader';
import TerminalBlock from '../components/TerminalBlock';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function Projects() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-white px-6 py-12 flex items-center justify-center">
      <div className="w-full max-w-6xl">
        <TerminalHeader cmd="ls projects/" />
        <TerminalBlock>
          <h2 className="text-accent text-2xl font-semibold mb-6">{'// Projects'}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard
              title="StudyPlus"
              tech="MERN Stack, Cloudinary, JWT, Redux Toolkit"
              desc="A scalable EdTech platform for students and instructors with secure auth, course creation, and video learning."
              features={[
                "OTP-based registration & JWT auth",
                "Video-based learning with progress tracking",
                "Course builder with markdown & media",
                "Instructor dashboards & revenue insights",
                "Secure Cloudinary integration & OTP recovery"
              ]}
              github="https://github.com/paridhijain07/Ed_Tech"
              live="https://ed-tech-dusky-delta.vercel.app/"
            />

            <ProjectCard
              title="Dirghayu Medicare"
              tech="MERN Stack, Vite, Cloudinary, Context API"
              desc="A healthcare platform to book appointments, donate resources, and manage health data for users, doctors & admins."
              features={[
                "JWT login & multi-role access (User, Doctor, Admin)",
                "Book appointments & donation tracking",
                "Doctor dashboard with status updates",
                "Admin panel to manage system users",
                "Analytics for appointments and donations"
              ]}
              github="https://github.com/paridhijain07/Dirghayu_medicare"
              live="https://dirghayu-medicare.vercel.app"
            />
            <ProjectCard
  title="Sortify"
  tech="React, Node.js, MongoDB, Hugging Face API"
  desc="Sortify is an intelligent note classification app that uses Hugging Face's Zero-Shot Learning to sort messages like notes, URLs, poems, and more — automatically."
  features={[
    "Auto-categorization using Hugging Face NLP",
    "Classifies messages as Notes, URLs, Poems, etc.",
    "Responsive UI with categorized content cards",
    "Real-time rendering of added content",
    "Node + Express backend with MongoDB"
  ]}
  github="https://github.com/paridhijain07/Sortify"
  live="https://github.com/paridhijain07/Sortify"
/>

          </div>
        </TerminalBlock>
      </div>
    </main>
  );
}

// ✅ Reusable Project Card Component
function ProjectCard({ title, tech, desc, github, live, features }) {
  return (
    <div className="bg-[#21262d] rounded-lg shadow-md p-5 hover:bg-[#2c313a] transition">
      <h3 className="text-yellow-300 text-xl font-semibold mb-1">{title}</h3>
      <p className="text-terminaltext text-sm mb-2">{tech}</p>
      <p className="text-white text-sm mb-4">{desc}</p>

      <ul className="list-disc list-inside text-terminaltext text-sm mb-4 space-y-1">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>

      <div className="flex items-center gap-4 mt-2">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-blue-400 hover:text-blue-300 text-sm"
          >
            <FaGithub /> GitHub
          </a>
        )}
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-green-400 hover:text-green-300 text-sm"
          >
            <FaExternalLinkAlt /> Live
          </a>
        )}
      </div>
    </div>
  );
}
