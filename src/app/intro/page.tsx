"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const IntroSection = dynamic(() => import("@/components/IntroSection"), {
  ssr: false,
});
const GridScanOverlay = dynamic(() => import("@/components/GridScanOverlay"), {
  ssr: false,
});

export default function IntroPage() {
  const [isEntering, setIsEntering] = useState(true);

  useEffect(() => {
    // Fade out transition overlay ~300ms after component mounts
    const timer = setTimeout(() => {
      setIsEntering(false);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const handleFolderOpen = () => {
    console.log("[MOHITVERSE] IntroPage: Folder opened — ready for flashcards!");
  };

  return (
    <main className="relative w-full min-h-screen" style={{ backgroundColor: "#09090f" }}>
      <GridScanOverlay active={isEntering} />
      <IntroSection onFolderOpen={handleFolderOpen} />
    </main>
  );
}
