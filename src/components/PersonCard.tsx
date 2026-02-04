import Link from "next/link";
import { Person } from "@/lib/loadPeople";

export function PersonCard({ person }: { person: Person }) {
    return (
        <a
            href={person.portfolio}
            target="_blank"
            rel="noopener noreferrer"
            className="block group h-full"
        >
            <div className="h-full border border-gray-200 rounded-xl p-6 transition-all duration-200 hover:shadow-lg hover:border-gray-300 bg-white flex flex-col items-center text-center">
                <div className="w-24 h-24 mb-4 relative rounded-full overflow-hidden border border-gray-100 bg-gray-50">
                    <img
                        src={person.avatar}
                        alt={person.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                </div>

                <h2 className="text-xl font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                    {person.name}
                </h2>

                <p className="text-sm text-gray-500 font-medium mb-4">
                    {person.role}
                </p>

                <div className="w-full mt-auto space-y-3 pt-4 border-t border-gray-100">
                    {person.location && (
                        <div className="text-xs text-gray-400 flex items-center justify-center gap-1">
                            <span>📍</span> {person.location}
                        </div>
                    )}

                    <div className="flex flex-wrap justify-center gap-2 text-xs text-gray-500">
                        {person.hardware?.laptop && (
                            <span className="bg-gray-50 px-2 py-1 rounded-md border border-gray-100">
                                💻 {person.hardware.laptop}
                            </span>
                        )}
                        {person.software?.editor && (
                            <span className="bg-gray-50 px-2 py-1 rounded-md border border-gray-100">
                                📝 {person.software.editor}
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </a>
    );
}
