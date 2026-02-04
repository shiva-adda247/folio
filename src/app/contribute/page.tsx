import fs from 'fs';
import path from 'path';
import Markdown from 'markdown-to-jsx';
import Link from 'next/link';

export const metadata = {
    title: "Contribute - People Portfolio",
    description: "Learn how to add yourself to the People Portfolio.",
};

export default async function ContributePage() {
    const contributingPath = path.join(process.cwd(), 'CONTRIBUTING.md');
    const content = fs.existsSync(contributingPath)
        ? fs.readFileSync(contributingPath, 'utf8')
        : '# Contributing\n\nFile not found.';

    return (
        <div className="min-h-screen bg-gray-50/50">
            <header className="bg-white border-b border-gray-100 sticky top-0 z-10 backdrop-blur-md bg-white/80 supports-[backdrop-filter]:bg-white/60">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 group">
                        <span className="text-xl group-hover:-translate-x-1 transition-transform">←</span>
                        <span className="font-medium text-gray-900">Back to List</span>
                    </Link>
                </div>
            </header>

            <main className="max-w-3xl mx-auto px-4 py-12">
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 md:p-12 overflow-hidden prose prose-blue prose-lg max-w-none">
                    <Markdown>{content}</Markdown>
                </div>
            </main>
        </div>
    );
}
