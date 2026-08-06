"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

const WelcomeScreen = dynamic(() => import("@/components/WelcomeScreen"), {
  ssr: false,
});
const GridScanOverlay = dynamic(() => import("@/components/GridScanOverlay"), {
  ssr: false,
});

export default function Home() {
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);

  /**
   * Called when the visitor clicks "Let's Get Started" on the Welcome screen.
   * Triggers full-screen GridScan transition overlay for ~1500ms then navigates to /intro.
   */
  const handleEnterClick = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      router.push("/intro");
    }, 1500);
  };

  return (
    <main className="relative w-full min-h-screen" style={{ backgroundColor: "#09090f" }}>
      <WelcomeScreen onEnterClick={handleEnterClick} />
      <GridScanOverlay active={isTransitioning} destinationName="INTRO_SECTION" />
    </main>
  );
}
