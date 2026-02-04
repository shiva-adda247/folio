import { getPeople } from "@/lib/loadPeople";
import { PersonCard } from "@/components/PersonCard";
import Link from "next/link";

export const metadata = {
  title: "People Portfolio - Open Source Community List",
  description: "A community-curated list of developers, designers, and creators.",
};

export default async function Home() {
  const people = await getPeople();

  return (
    <div className="min-h-screen bg-gray-50/50">
      <header className="bg-white border-b border-gray-100 sticky top-0 z-10 backdrop-blur-md bg-white/80 supports-[backdrop-filter]:bg-white/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">✨</span>
            <h1 className="text-xl font-bold tracking-tight text-gray-900">
              People<span className="text-blue-600">Portfolio</span>
            </h1>
          </div>

          <Link
            href="/contribute"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors px-4 py-2 rounded-lg hover:bg-gray-100"
          >
            Add Yourself
          </Link>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Discover Community<br />Portfolios
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A minimalist directory of developers, designers, and tech enthusiasts.
            Click a card to visit their world.
          </p>
        </div>

        {people.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <p className="text-gray-500 mb-4">No entries found yet.</p>
            <Link
              href="/contribute"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-sm hover:shadow-md"
            >
              Be the first to join
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {people.map((person) => (
              <PersonCard key={person.portfolio} person={person} />
            ))}
          </div>
        )}
      </main>

      <footer className="border-t border-gray-100 bg-white mt-auto py-12">
        <div className="max-w-6xl mx-auto px-4 text-center text-sm text-gray-500">
          <p>
            Open source & PR-driven.
            <a href="https://github.com/your-username/folio" className="text-blue-600 hover:underline mx-1">
              View on GitHub
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
