"use client";

import React, { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import TextPressure from "@/components/TextPressure";
import ScrollExpand from "@/components/ScrollExpand";
import Folder from "@/components/Folder";

interface IntroSectionProps {
  /** Optional handler when folder is opened */
  onFolderOpen?: () => void;
}

const FLASHCARDS = [
  {
    key: "about",
    label: "About Me",
    color: "#7df9ff",
    icon: (
      <svg className="w-6 h-6 text-[#7df9ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    key: "experience",
    label: "Experience",
    color: "#a78bfa",
    icon: (
      <svg className="w-6 h-6 text-[#a78bfa]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    key: "projects",
    label: "Projects",
    color: "#34d399",
    icon: (
      <svg className="w-6 h-6 text-[#34d399]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    key: "techstacks",
    label: "Tech Stacks",
    color: "#f472b6",
    icon: (
      <svg className="w-6 h-6 text-[#f472b6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
  },
  {
    key: "certifications",
    label: "Certifications",
    color: "#fbbf24",
    icon: (
      <svg className="w-6 h-6 text-[#fbbf24]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    key: "contact",
    label: "Contact Me",
    color: "#60a5fa",
    icon: (
      <svg className="w-6 h-6 text-[#60a5fa]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function IntroSection({ onFolderOpen }: IntroSectionProps) {
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(false);
  const router = useRouter();

  const handleFolderToggle = useCallback(() => {
    setIsExploreOpen((prev) => {
      const nextState = !prev;
      if (nextState) {
        setTimeout(() => setCardsVisible(true), 50);
      } else {
        setCardsVisible(false);
      }
      return nextState;
    });
    onFolderOpen?.();
  }, [onFolderOpen]);

  const handleNavigate = useCallback(
    (key: string) => {
      console.log(`[MOHITVERSE] Flashcard clicked: ${key}`);
      if (key === "about") {
        router.push("/about");
      } else {
        router.push(`/#${key}`);
      }
    },
    [router]
  );

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

            {/* Increased spacing between caption and Folder icon */}
            <div className="flex flex-col items-center gap-16 sm:gap-20">
              <p className="text-white text-xs font-mono font-bold tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                {isExploreOpen ? "Tap folder again to close" : "Tap to explore more"}
              </p>
              <Folder
                isOpen={isExploreOpen}
                onFolderOpen={handleFolderToggle}
                hintLabel={isExploreOpen ? "CLOSE" : "EXPLORE"}
                showPapers={false}
                size={2.0}
              />
            </div>
          </div>
        </ScrollExpand>
      </div>

      {/* ── 3. Flashcards Grid Overlay when Folder is open ─────────────────── */}
      {isExploreOpen && (
        <div
          onClick={handleFolderToggle}
          className={`fixed inset-0 z-50 flex flex-col items-center justify-center p-4 sm:p-8 transition-all duration-500 cursor-pointer ${
            cardsVisible ? "bg-black/80 backdrop-blur-md opacity-100" : "bg-transparent opacity-0 pointer-events-none"
          }`}
        >
          <div
            className="w-full max-w-4xl flex flex-col items-center gap-6 sm:gap-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 6 Flashcards Grid */}
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-5 sm:gap-8 justify-items-center">
              {FLASHCARDS.map((card, index) => (
                <div
                  key={card.key}
                  onClick={() => handleNavigate(card.key)}
                  className={`w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 aspect-square relative group cursor-pointer transform transition-all duration-500 ease-out ${
                    cardsVisible
                      ? "scale-100 opacity-100 translate-y-0"
                      : "scale-50 opacity-0 translate-y-8 pointer-events-none"
                  }`}
                  style={{
                    transitionDelay: `${index * 80}ms`,
                  }}
                >
                  {/* Outer Ambient Backdrop Glow on Hover */}
                  <div
                    className="absolute -inset-0.5 rounded-[18px] opacity-20 group-hover:opacity-80 transition-opacity duration-500 blur-md pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at center, ${card.color} 0%, transparent 80%)`,
                    }}
                  />

                  {/* Cyber Tech Main Card Container */}
                  <div
                    className="relative w-full h-full flex flex-col items-center justify-center gap-2.5 sm:gap-3 p-4 sm:p-6 bg-[#070914]/90 backdrop-blur-xl rounded-[16px] border border-white/10 group-hover:border-white/20 transition-all duration-300 overflow-hidden shadow-2xl group-hover:-translate-y-1"
                    style={{
                      boxShadow: `0 8px 32px rgba(0, 0, 0, 0.6)`,
                    }}
                  >
                    {/* Glowing Tech Precision Border Line */}
                    <div
                      className="absolute inset-0 rounded-[16px] pointer-events-none border transition-opacity duration-300 opacity-40 group-hover:opacity-100"
                      style={{
                        borderColor: `${card.color}55`,
                        boxShadow: `inset 0 0 15px ${card.color}15, 0 0 15px ${card.color}25`,
                      }}
                    />

                    {/* Top Tech Laser Accent Strip */}
                    <div
                      className="absolute top-0 inset-x-4 h-[2px] opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: `linear-gradient(90deg, transparent 0%, ${card.color} 50%, transparent 100%)`,
                      }}
                    />

                    {/* Precision Cyber Corner Brackets */}
                    <div
                      className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                      style={{ borderColor: card.color }}
                    />
                    <div
                      className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                      style={{ borderColor: card.color }}
                    />
                    <div
                      className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                      style={{ borderColor: card.color }}
                    />
                    <div
                      className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                      style={{ borderColor: card.color }}
                    />

                    {/* Ambient Color Center Glow inside Card */}
                    <div
                      className="absolute inset-0 opacity-15 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none rounded-[16px]"
                      style={{
                        background: `radial-gradient(circle at center, ${card.color} 0%, transparent 75%)`,
                      }}
                    />

                    {/* Cyber Micro Grid Scanlines Pattern */}
                    <div
                      className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:12px_12px]"
                    />

                    {/* Icon Badge */}
                    <div
                      className="p-3 sm:p-3.5 rounded-xl bg-white/5 border border-white/10 group-hover:border-white/20 group-hover:scale-110 transition-all duration-300 relative z-10"
                      style={{
                        boxShadow: `0 0 20px ${card.color}25`,
                        background: `linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)`,
                      }}
                    >
                      {card.icon}
                    </div>

                    {/* Flashcard Label */}
                    <span className="text-white font-mono font-semibold text-xs sm:text-sm tracking-wider uppercase text-center relative z-10 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] group-hover:text-white group-hover:tracking-widest transition-all duration-300">
                      {card.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Folder toggle inside overlay */}
            <div className="flex flex-col items-center gap-2 mt-2">
              <Folder
                isOpen={isExploreOpen}
                onFolderOpen={handleFolderToggle}
                hintLabel="CLOSE"
                showPapers={false}
                size={1.6}
              />
              <span className="text-white/60 text-[11px] font-mono uppercase tracking-widest">
                Tap folder or background to close
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

