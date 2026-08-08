"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import TextPressure from "@/components/TextPressure";
import DotField from "@/components/DotField";
import GridScanOverlay from "@/components/GridScanOverlay";
import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";

export default function ExperiencePage() {
  const [isEntering, setIsEntering] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsEntering(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main
      className="relative w-full min-h-screen text-white selection:bg-purple-500/30 selection:text-white overflow-x-hidden"
      style={{ backgroundColor: "#09090f" }}
    >
      {/* Full-page Ambient Background Layer (DotField) */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <DotField
          dotRadius={2.5}
          dotSpacing={20}
          cursorRadius={450}
          bulgeStrength={60}
          glowRadius={0}
          gradientFrom="rgba(139, 92, 246, 0.55)"
          gradientTo="rgba(139, 92, 246, 0.28)"
          glowColor="#8b5cf6"
          sparkle={true}
        />
      </div>

      <GridScanOverlay active={isEntering} destinationName="EXPERIENCE" />

      {/* Top Header / Back Navigation */}
      <header className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 flex items-center justify-between z-30 relative">
        <Link
          href="/intro"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-purple-900/20 text-xs sm:text-sm font-mono text-slate-300 hover:text-white transition-all duration-300 group shadow-lg backdrop-blur-md"
        >
          <svg
            className="w-4 h-4 text-purple-400 group-hover:-translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>Back to Intro</span>
        </Link>

        <div className="text-xs font-mono text-purple-400/70 tracking-widest uppercase">
          MOHITVERSE // EXPERIENCE
        </div>
      </header>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-24">
        {/* 1. "EXPERIENCE" Heading with TextPressure */}
        <div className="relative w-full h-24 sm:h-32 flex items-center justify-center overflow-hidden mb-6 sm:mb-10">
          <TextPressure
            text="EXPERIENCE"
            textColor="#ffffff"
            strokeColor="#8b5cf6"
            stroke={true}
            strokeWidth={3}
            minFontSize={48}
            scale={false}
            fontFamily="Roboto Flex"
          />
        </div>

        {/* 2. Interactive ScrollStack Cards */}
        <ScrollStack
          useWindowScroll={true}
          itemDistance={100}
          itemScale={0.03}
          itemStackDistance={30}
          stackPosition="20%"
          scaleEndPosition="10%"
          baseScale={0.85}
          rotationAmount={0}
          blurAmount={0.5}
        >
          {/* Card 1 */}
          <ScrollStackItem itemClassName="bg-[#0e0f1d]/95 border border-purple-500/20 backdrop-blur-xl shadow-[0_0_35px_rgba(139,92,246,0.15)] hover:border-purple-500/50 transition-colors">
            <div className="h-full flex flex-col justify-between p-2 sm:p-4">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-mono text-purple-300">
                  <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                  <span>01 // INTERNSHIP</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Cognifyz Technologies
                </h3>
                <p className="text-sm sm:text-base font-mono text-purple-300/90 font-medium">
                  Web Development Intern · July 17 – August 17, 2026
                </p>
              </div>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                Completed 6 structured tasks across 3 levels — responsive landing pages, image galleries, interactive calculators, color changers, Bootstrap grid layouts. Hands-on with DOM manipulation, responsive design, and ES6 JavaScript.
              </p>
            </div>
          </ScrollStackItem>

          {/* Card 2 */}
          <ScrollStackItem itemClassName="bg-[#0e0f1d]/95 border border-purple-500/20 backdrop-blur-xl shadow-[0_0_35px_rgba(139,92,246,0.15)] hover:border-purple-500/50 transition-colors">
            <div className="h-full flex flex-col justify-between p-2 sm:p-4">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-mono text-purple-300">
                  <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                  <span>02 // OPEN SOURCE</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Open Source Contributor
                </h3>
                <p className="text-sm sm:text-base font-mono text-purple-300/90 font-medium">
                  pyfenn/fenn (Python ML Framework) · PR #161 Merged · May 2026
                </p>
              </div>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                Added mobile-responsive CSS to the Flask-based dashboard — fixed toolbar stacking, search bar, filter buttons, and stats grid layout across screen sizes.
              </p>
            </div>
          </ScrollStackItem>

          {/* Card 3 */}
          <ScrollStackItem itemClassName="bg-[#0e0f1d]/95 border border-purple-500/20 backdrop-blur-xl shadow-[0_0_35px_rgba(139,92,246,0.15)] hover:border-purple-500/50 transition-colors">
            <div className="h-full flex flex-col justify-between p-2 sm:p-4">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-mono text-purple-300">
                  <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                  <span>03 // SIMULATIONS</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Job Simulations (Forage)
                </h3>
                <p className="text-sm sm:text-base font-mono text-purple-300/90 font-medium">
                  Deloitte · JPMorgan Chase · Skyscanner · Tata (x2) · April – May 2026
                </p>
              </div>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                Completed 5 industry job simulations spanning software engineering, data visualization, and AI-driven analytics.
              </p>
            </div>
          </ScrollStackItem>
        </ScrollStack>
      </div>
    </main>
  );
}
