"use client";

import { useState } from "react";

interface MenuScannerProps {
  onScanComplete: () => void;
}

export default function MenuScanner({ onScanComplete }: MenuScannerProps) {
  const [isScanning, setIsScanning] = useState(false);

  const handleScan = () => {
    setIsScanning(true);
    // Simulate network/vision delay
    setTimeout(() => {
      setIsScanning(false);
      onScanComplete();
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-zinc-900 rounded-2xl shadow-lg border border-zinc-800 text-center">
      <div className="w-16 h-16 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
          />
        </svg>
      </div>
      <h2 className="text-xl font-bold text-white mb-2">Ready to order?</h2>
      <p className="text-zinc-400 mb-8 text-sm max-w-xs">
        Point your camera at the physical Izakaya wall menu to analyze the dishes.
      </p>

      <button
        onClick={handleScan}
        disabled={isScanning}
        className={`w-full py-4 px-6 rounded-xl font-medium text-lg transition-all ${
          isScanning
            ? "bg-zinc-800 text-zinc-500 cursor-not-allowed"
            : "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-blue-500/30"
        }`}
      >
        {isScanning ? (
          <span className="flex items-center justify-center gap-3">
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Scanning Menu...
          </span>
        ) : (
          "Scan Wall Menu"
        )}
      </button>
    </div>
  );
}
