"use client";

import { MenuItem } from "../types";

interface MenuGalleryProps {
    items: MenuItem[];
    onPlayVoice: (text: string) => void;
}

export default function MenuGallery({ items, onPlayVoice }: MenuGalleryProps) {
    const getScoreColor = (score: number) => {
        if (score >= 90) return "text-green-400 bg-green-400/10 border-green-400/20";
        if (score >= 70) return "text-yellow-400 bg-yellow-400/10 border-yellow-400/20";
        return "text-red-400 bg-red-400/10 border-red-400/20";
    };

    const getTagColor = (tag: string) => {
        if (tag.includes("friendly") || tag.includes("free")) return "bg-green-500/20 text-green-300";
        if (tag.includes("contains")) return "bg-orange-500/20 text-orange-300";
        return "bg-zinc-700 text-zinc-300";
    };

    const formatTag = (tag: string) => {
        return tag.split("_").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
    };

    return (
        <div className="flex flex-col gap-6 pb-40">
            <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-bold text-white">Menu Matches</h2>
                <span className="text-sm text-zinc-400">{items.length} items found</span>
            </div>

            {items.map((item) => (
                <div
                    key={item.dish_id}
                    className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-lg flex flex-col"
                >
                    {/* Image Header */}
                    <div className="h-48 w-full relative">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={item.image}
                            alt={item.romaji_reading}
                            className="w-full h-full object-cover"
                        />
                        {/* Match Score Badge */}
                        <div className={`absolute top-4 right-4 px-3 py-1.5 rounded-full border font-bold text-sm backdrop-blur-md ${getScoreColor(item.match_score)}`}>
                            {item.match_score}% Match
                        </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-5 flex flex-col gap-4">

                        {/* Title Section */}
                        <div className="flex justify-between items-start gap-3">
                            <div>
                                <h3 className="text-2xl font-black text-white leading-tight">{item.kanji_name}</h3>
                                <p className="text-zinc-400 font-medium mt-1">{item.romaji_reading}</p>
                            </div>
                            <button
                                onClick={() => onPlayVoice(item.kanji_name)}
                                className="shrink-0 p-3 bg-indigo-500/10 hover:bg-indigo-500/20 rounded-full text-indigo-400 transition-colors"
                                aria-label="Play pronunciation"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 11-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z" />
                                    <path d="M15.932 7.757a.75.75 0 011.061 0 5.25 5.25 0 010 7.424.75.75 0 11-1.06-1.06 3.75 3.75 0 000-5.304.75.75 0 010-1.06z" />
                                </svg>
                            </button>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                            {item.nutritional_tags.map(tag => (
                                <span key={tag} className={`text-xs px-2.5 py-1 rounded-full font-medium ${getTagColor(tag)}`}>
                                    {formatTag(tag)}
                                </span>
                            ))}
                        </div>

                        {/* Divider */}
                        <div className="h-px w-full bg-zinc-800 my-1"></div>

                        {/* Cultural Note - "Earbud" private info style */}
                        <div className="bg-blue-900/10 border border-blue-900/30 rounded-xl p-4 flex gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-blue-400 shrink-0 mt-0.5">
                                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                            </svg>
                            <p className="text-blue-100/80 text-sm leading-snug">
                                {item.cultural_note}
                            </p>
                        </div>

                    </div>
                </div>
            ))}
        </div>
    );
}
