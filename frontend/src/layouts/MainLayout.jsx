import Navbar from "../components/Navbar";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main className="w-full max-w-screen-xl mx-auto py-8 px-4 md:px-10">
        {children}
      </main>
    </div>
  );
}
