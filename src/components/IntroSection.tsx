"use client";

import React, { useCallback } from "react";
import TextPressure from "@/components/TextPressure";
import ScrollExpand from "@/components/ScrollExpand";
import Folder from "@/components/Folder";

interface IntroSectionProps {
  /** Optional handler when folder is opened */
  onFolderOpen?: () => void;
}

export default function IntroSection({ onFolderOpen }: IntroSectionProps) {
  const handleFolderOpen = useCallback(() => {
    console.log(
      "[MOHITVERSE] IntroSection: Folder opened — triggering flashcards placeholder."
    );
    onFolderOpen?.();
  }, [onFolderOpen]);

  return (
    <section
      id="intro"
      className="relative w-full h-screen overflow-hidden"
      style={{ backgroundColor: "#09090f" }}
    >
      {/* ── 1. TextPressure Heading ("INTRO") floating on top (z-30) ───── */}
      <div className="absolute top-4 sm:top-6 inset-x-0 z-30 pointer-events-none flex justify-center px-4">
        <div
          className="w-full max-w-5xl relative flex items-center justify-center"
          style={{ height: "130px" }}
        >
          <TextPressure
            text="INTRO"
            textColor="#ffffff"
            strokeColor="#8b5cf6"
            stroke={true}
            strokeWidth={3}
            minFontSize={72}
            scale={false}
            fontFamily="Roboto Flex"
          />
        </div>
      </div>

      {/* ── 2. Full 100vh ScrollExpand Component (Photo extends behind INTRO heading) ── */}
      <div className="absolute inset-0 w-full h-full z-10">
        <ScrollExpand
          src="/images/mohit-hero.jpg"
          alt="Mohit Sharma"
          title="Mohit Sharma"
          scrollHint="Scroll to explore"
          useWindowScroll={false}
          startWidth={38}
          startHeight={50}
          startRadius={24}
          endRadius={0}
          mediaZoom={1.3}
          scrollDistance={1.8}
          holdDistance={0.4}
          smoothing={0.12}
          overlayScrim={0.5}
        >
          <div className="flex flex-col items-center gap-5 mt-10">
            {/* Job Title */}
            <p className="text-white/85 tracking-[0.15em] uppercase text-sm md:text-base font-mono font-bold drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
              AI Engineer &amp; Full-Stack Builder
            </p>

            {/* Increased spacing between caption and Folder icon (gap-16 sm:gap-20 / +70px spacing) */}
            <div className="flex flex-col items-center gap-16 sm:gap-20">
              <p className="text-white text-xs font-mono font-bold tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                Tap to explore more
              </p>
              <Folder
                onFolderOpen={handleFolderOpen}
                hintLabel="Explore"
                size={2.0}
              />
            </div>
          </div>
        </ScrollExpand>
      </div>
    </section>
  );
}
