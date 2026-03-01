"use client";

interface PostMealGuideProps {
    onClose: () => void;
    onPlayVoice: () => void;
}

export default function PostMealGuide({ onClose, onPlayVoice }: PostMealGuideProps) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 w-full max-w-sm shadow-2xl relative">
                <button onClick={onClose} className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-white rounded-full bg-zinc-800/50 hover:bg-zinc-800 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                    </svg>
                </button>

                <h2 className="text-2xl font-bold text-white mb-2">Time to Pay 💴</h2>
                <p className="text-zinc-400 mb-6 text-sm">You&apos;ve finished your meal! Here are some quick tips on Japanese dining etiquette.</p>

                <div className="space-y-4">
                    <div className="bg-emerald-900/20 border border-emerald-900/50 p-5 rounded-2xl relative overflow-hidden">
                        <div className="absolute -right-4 -top-4 text-emerald-500/10 text-8xl font-black select-none pointer-events-none">礼</div>
                        <h3 className="text-emerald-400 font-bold mb-1 flex justify-between relative z-10">
                            <span>Say Thanks</span>
                        </h3>
                        <p className="text-2xl font-black text-white mb-1 tracking-tight relative z-10">Gochisousama-deshita!</p>
                        <p className="text-zinc-300 text-sm italic relative z-10">&quot;Thank you for the delicious meal!&quot;</p>

                        <button
                            onClick={() => {
                                onPlayVoice();
                                onClose();
                            }}
                            className="mt-4 w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white shadow-lg shadow-emerald-500/20 font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-transform active:scale-95 relative z-10"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 11-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z" />
                                <path d="M15.932 7.757a.75.75 0 011.061 0 5.25 5.25 0 010 7.424.75.75 0 11-1.06-1.06 3.75 3.75 0 000-5.304.75.75 0 010-1.06z" />
                            </svg>
                            Let AI say it
                        </button>
                    </div>

                    <div className="bg-red-900/20 border border-red-900/50 p-4 rounded-2xl flex items-start gap-3">
                        <span className="text-2xl pt-1 drop-shadow-md">🚫</span>
                        <div>
                            <h3 className="text-red-400 font-bold mb-1">No Tipping</h3>
                            <p className="text-red-100/90 text-sm">
                                Tipping is completely unnecessary in Japan. Just pay the exact bill at the front register, not at your table!
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
