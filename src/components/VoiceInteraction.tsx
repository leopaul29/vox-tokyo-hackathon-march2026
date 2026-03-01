"use client";

interface VoiceInteractionProps {
    mode: "none" | "earbud" | "speaker";
    activeText: string | null;
    onClose: () => void;
}

export default function VoiceInteraction({ mode, activeText, onClose }: VoiceInteractionProps) {
    if (mode === "none") return null;

    const isEarbud = mode === "earbud";

    // Earbud: Blue/Purple, Speaker: Green/Orange
    const containerStyle = isEarbud
        ? "bg-gradient-to-br from-blue-900/90 to-indigo-900/90 border-blue-500/50 shadow-[0_0_40px_rgba(59,130,246,0.3)]"
        : "bg-gradient-to-br from-emerald-900/90 to-orange-900/90 border-emerald-500/50 shadow-[0_0_40px_rgba(16,185,129,0.3)]";

    const textColor = isEarbud ? "text-blue-100" : "text-emerald-100";
    const labelText = isEarbud ? "Earbud Mode (Private)" : "Speaker Mode (Public)";

    return (
        <div className="fixed bottom-0 left-0 right-0 p-6 z-50 animate-in slide-in-from-bottom-full duration-300">
            <div className={`relative backdrop-blur-xl border rounded-3xl p-6 ${containerStyle} overflow-hidden max-w-md mx-auto`}>
                {/* Animated Glow Rings behind */}
                <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
                    <div className={`w-32 h-32 rounded-full blur-3xl ${isEarbud ? 'bg-blue-400' : 'bg-emerald-400'} animate-pulse`}></div>
                    <div className={`w-32 h-32 rounded-full blur-3xl ${isEarbud ? 'bg-purple-400' : 'bg-orange-400'} animate-pulse delay-75`}></div>
                </div>

                <div className="relative z-10 flex flex-col gap-4">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <span className="relative flex h-3 w-3">
                                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isEarbud ? 'bg-blue-400' : 'bg-emerald-400'}`}></span>
                                <span className={`relative inline-flex rounded-full h-3 w-3 ${isEarbud ? 'bg-blue-500' : 'bg-emerald-500'}`}></span>
                            </span>
                            <span className={`font-bold uppercase tracking-wider text-xs ${textColor}`}>
                                {labelText}
                            </span>
                        </div>
                        <button onClick={onClose} className="p-2 rounded-full hover:bg-white/10 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-white/70">
                                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                            </svg>
                        </button>
                    </div>

                    <div className="flex items-center gap-4">
                        {/* Audio waves animation */}
                        <div className="flex items-center justify-center gap-1 h-12 w-12 bg-black/20 rounded-full shrink-0">
                            <div className="w-1 bg-white/80 h-3 animate-[bounce_1s_infinite_100ms] rounded-full"></div>
                            <div className="w-1 bg-white/80 h-5 animate-[bounce_1s_infinite_300ms] rounded-full"></div>
                            <div className="w-1 bg-white/80 h-4 animate-[bounce_1s_infinite_150ms] rounded-full"></div>
                        </div>

                        <p className="text-white font-medium text-lg leading-snug">
                            {activeText || (isEarbud ? "Listening and whispering insights..." : "Speaking to the waiter...")}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
