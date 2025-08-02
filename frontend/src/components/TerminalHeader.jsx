export default function TerminalHeader({ cmd = "npx portfolio --start" }) {
  return (
    <div className="bg-terminalbg text-terminaltext font-mono p-4 rounded-t-xl flex items-center shadow">
      <span className="text-accent pr-4 text-lg md:text-xl">{'>'}</span>
      <span className="text-base md:text-lg lg:text-xl font-semibold">{cmd}</span>
    </div>
  );
}
