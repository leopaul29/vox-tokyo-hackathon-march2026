"use client";

import { useState, useEffect } from "react";
import MenuScanner from "@/components/MenuScanner";
import MenuGallery from "@/components/MenuGallery";
import VoiceInteraction from "@/components/VoiceInteraction";
import PostMealGuide from "@/components/PostMealGuide";
import { MenuItem } from "@/types";
import menuContextData from "@/data/menu_context.json";

export default function Home() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [hasScanned, setHasScanned] = useState(false);
  const [voiceMode, setVoiceMode] = useState<"none" | "earbud" | "speaker">("none");
  const [activeSpeech, setActiveSpeech] = useState<string | null>(null);
  const [showGuide, setShowGuide] = useState(false);

  useEffect(() => {
    // Load data from existing JSON map
    setMenuItems(menuContextData);
  }, []);

  const handleScanComplete = () => {
    setHasScanned(true);
    // Auto-trigger Earbud mode after scanning as a greeting
    setTimeout(() => {
      setVoiceMode("earbud");
      setActiveSpeech("I've analyzed the menu! I see Tonkotsu Ramen and Ootoro... What are you in the mood for?");
    }, 500);
  };

  const handlePlayVoice = (text: string) => {
    setVoiceMode("speaker");
    setActiveSpeech(`Sumimasen, ${text} o kudasai. (Excuse me, I'll have the ${text} please.)`);
  };

  const handlePlayGochisousama = () => {
    setVoiceMode("speaker");
    setActiveSpeech("Gochisousama-deshita! (Thank you for the meal!)");
  };

  return (
    <main className="min-h-screen bg-black text-white font-[family-name:var(--font-geist-sans)] selection:bg-indigo-500/30">
      <div className="max-w-[480px] mx-auto min-h-screen bg-zinc-950 relative overflow-hidden flex flex-col shadow-2xl shadow-indigo-500/5">

        {/* App Header */}
        <header className="px-6 py-5 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md sticky top-0 z-40">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center font-bold text-sm">
              V
            </div>
            <div>
              <h1 className="text-lg font-bold tracking-tight">VOX-MESHI</h1>
              <p className="text-xs text-zinc-400 font-medium tracking-wide">AI CULINARY COMPANION</p>
            </div>
          </div>
        </header>

        {/* Dynamic Content */}
        <div className="flex-1 overflow-y-auto px-4 py-6 scroll-smooth">
          {!hasScanned ? (
            <div className="h-full min-h-[60vh] flex flex-col items-center justify-center">
              <MenuScanner onScanComplete={handleScanComplete} />
            </div>
          ) : (
            <>
              <MenuGallery items={menuItems} onPlayVoice={handlePlayVoice} />

              <button
                onClick={() => setShowGuide(true)}
                className="w-full mt-6 py-4 bg-zinc-900/50 hover:bg-zinc-800 border border-zinc-800/80 rounded-2xl text-zinc-300 font-medium tracking-wide transition-colors mb-28 flex items-center justify-center gap-2"
              >
                <span>Finished Eating?</span>
                <span className="text-xl">🍵</span>
              </button>
            </>
          )}
        </div>

        {/* Global Floating Actions (When Gallery is open) */}
        {hasScanned && (
          <div className="fixed bottom-6 right-[calc(50%-210px)] min-[480px]:right-[calc(50%-220px)] max-[480px]:right-6 z-40 flex flex-col gap-3">
            <button
              onClick={() => { setVoiceMode("earbud"); setActiveSpeech("Whispering mode activated. How can I help you navigate the menu?"); }}
              className="w-14 h-14 bg-indigo-600 hover:bg-indigo-500 rounded-full flex items-center justify-center shadow-lg shadow-indigo-600/30 text-white transition-transform active:scale-95 flex-shrink-0"
              aria-label="Talk to AI"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M8.25 4.5a3.75 3.75 0 117.5 0v8.25a3.75 3.75 0 11-7.5 0V4.5z" />
                <path d="M6 10.5a.75.75 0 01.75.75v1.5a5.25 5.25 0 1010.5 0v-1.5a.75.75 0 011.5 0v1.5a6.751 6.751 0 01-6 6.709v2.291h3a.75.75 0 010 1.5h-7.5a.75.75 0 010-1.5h3v-2.291a6.751 6.751 0 01-6-6.709v-1.5A.75.75 0 016 10.5z" />
              </svg>

            </button>
          </div>
        )}

        {/* Voice Interaction Overlay */}
        <VoiceInteraction
          mode={voiceMode}
          activeText={activeSpeech}
          onClose={() => setVoiceMode("none")}
        />

        {/* Post Meal Guide Overlay */}
        {showGuide && (
          <PostMealGuide
            onClose={() => setShowGuide(false)}
            onPlayVoice={handlePlayGochisousama}
          />
        )}

      </div>
    </main>
  );
}
