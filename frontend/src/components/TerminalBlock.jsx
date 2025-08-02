export default function TerminalBlock({ children }) {
  return (
    <div className="bg-gray-900 text-gray-100 font-mono px-6 py-4 rounded-b-xl mb-8">
      {children}
    </div>
  );
}
