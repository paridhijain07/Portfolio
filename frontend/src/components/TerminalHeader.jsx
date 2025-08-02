export default function TerminalHeader({ cmd = "npx portfolio --start" }) {
  return (
    <div className="bg-terminalbg text-terminaltext font-mono p-4 rounded-t-xl flex items-center shadow">
      <span className="text-accent pr-4">{'>'}</span>
      <span>{cmd}</span>
    </div>
  );
}
