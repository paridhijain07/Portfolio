import TerminalHeader from '../components/TerminalHeader';
import TerminalBlock from '../components/TerminalBlock';

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-white px-6 py-12 flex items-center justify-center">
      <div className="w-full max-w-3xl">
        <TerminalHeader cmd="cat contact.txt" />
        <TerminalBlock>
          <h2 className="text-accent text-2xl font-semibold mb-6">{'// Contact Me'}</h2>

          <p className="text-terminaltext mb-8">
            Feel free to reach out via email or submit the form below. I'm open to collaboration, internships, or just tech talks! 🚀
          </p>

          <form className="space-y-6">
            <div>
              <label className="block text-terminaltext text-sm mb-1" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 bg-[#161b22] text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-terminaltext text-sm mb-1" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 bg-[#161b22] text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-terminaltext text-sm mb-1" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Let's build something cool together..."
                className="w-full px-4 py-2 bg-[#161b22] text-white border border-gray-700 rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 transition rounded text-white font-semibold"
            >
              Send Message
            </button>
          </form>

          <div className="mt-10 text-terminaltext text-sm">
            <p>📧 Email: <span className="text-white">technologywithparidhi@gmail.com</span></p>
            <p>
              🔗 LinkedIn: <a href="https://linkedin.com/in/paridhi-jain-969178297" target="_blank" rel="noreferrer" className="text-blue-400 underline">linkedin.com/in/paridhijain</a>
            </p>
          </div>
        </TerminalBlock>
      </div>
    </main>
  );
}
