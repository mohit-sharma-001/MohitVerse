"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import ProfileCard from "@/components/ProfileCard";
import TextPressure from "@/components/TextPressure";
import DotField from "@/components/DotField";
import GridScanOverlay from "@/components/GridScanOverlay";

export default function AboutPage() {
  const [isEntering, setIsEntering] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsEntering(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const traits = [
    {
      emoji: "🧠",
      text: "Endlessly curious",
      detail: "— I break problems down before I solve them",
    },
    {
      emoji: "🏗️",
      text: "Builder at heart",
      detail: "— I'd rather ship something small than plan something perfect",
    },
    {
      emoji: "💪",
      text: "Off-screen, I push my limits in strength training",
      detail: "— same discipline, different muscle",
    },
    {
      emoji: "🌱",
      text: "Always learning, always adapting",
      detail: "— comfort zones aren't my thing",
    },
  ];

  const interests = [
    { emoji: "⚽", label: "Sports" },
    { emoji: "🎧", label: "Listening music" },
    { emoji: "🤖", label: "Robotics" },
    { emoji: "🚀", label: "Space" },
  ];

  const education = [
    {
      degree: "Class X & XII",
      institution: "Hargovind Suyal Saraswati Vidya Mandir Inter College",
      period: "",
      status: "",
    },
    {
      degree: "B.Tech, Computer Science & Engineering",
      institution: "VMSBUTU, Dehradun",
      period: "2025 – 2029",
      status: "currently in 2nd year",
    },
  ];

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

      <GridScanOverlay active={isEntering} destinationName="ABOUT_ME" />

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
          MOHITVERSE // ABOUT
        </div>
      </header>

      {/* Main Content Area: Responsive Two-Column Layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 lg:gap-16 items-start">
          
          {/* Left Column: ProfileCard (Sticky on Desktop, Stacked on Mobile) */}
          <div className="md:col-span-5 lg:col-span-4 md:sticky md:top-24 self-start h-fit z-20 w-full flex justify-center">
            <ProfileCard
              name="Mohit Sharma"
              title="Building things I wish existed."
              avatarUrl="/images/mohit-aboutme.jpg"
              enableTilt={true}
              behindGlowEnabled={true}
              innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
              showUserInfo={false}
            />
          </div>

          {/* Right Column: Narrative & Sections (Scrollable) */}
          <div className="md:col-span-7 lg:col-span-8 flex flex-col space-y-14 sm:space-y-16 lg:space-y-20">
            
            {/* 1. "About Me" Heading with TextPressure */}
            <div className="relative w-full h-24 sm:h-28 flex items-center justify-start overflow-hidden">
              <TextPressure
                text="ABOUT ME"
                textColor="#ffffff"
                strokeColor="#8b5cf6"
                stroke={true}
                strokeWidth={3}
                minFontSize={48}
                scale={false}
                fontFamily="Roboto Flex"
              />
            </div>

            {/* 2. Narrative Paragraphs */}
            <section className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-2 h-7 bg-purple-500 rounded-full shadow-[0_0_12px_#8b5cf6]" />
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide uppercase font-mono">
                  Philosophy &amp; Mindset
                </h3>
              </div>

              <div className="space-y-5 text-slate-300 text-base sm:text-lg leading-relaxed font-sans font-normal">
                <p className="p-5 sm:p-6 rounded-2xl bg-[#0e0f1d]/90 backdrop-blur-md border border-purple-900/30 hover:border-purple-500/50 hover:bg-purple-950/30 transition-all duration-300 shadow-lg">
                  I&apos;m a <strong className="text-white font-semibold">Computer Science Engineering student</strong> driven by curiosity — not just to use technology, but to <strong className="text-purple-300 font-semibold">understand how it works underneath</strong> and how to make it better. For me, engineering isn&apos;t just writing code; it&apos;s <strong className="text-white font-semibold">a way of looking at the world</strong>.
                </p>
                <p className="p-5 sm:p-6 rounded-2xl bg-[#0e0f1d]/90 backdrop-blur-md border border-purple-900/30 hover:border-purple-500/50 hover:bg-purple-950/30 transition-all duration-300 shadow-lg">
                  I thrive on <strong className="text-white font-semibold">steep learning curves</strong> — whether it&apos;s diving into <strong className="text-purple-300 font-semibold">AI/ML</strong>, architecting a system from scratch, or <strong className="text-white font-semibold">debugging something at 2 AM</strong> because I refuse to leave it broken. I believe the best solutions come from a mix of logic, creativity, and just not giving up.
                </p>
                <p className="p-5 sm:p-6 rounded-2xl bg-[#0e0f1d]/90 backdrop-blur-md border border-purple-900/30 hover:border-purple-500/50 hover:bg-purple-950/30 transition-all duration-300 shadow-lg">
                  Above all, I am <strong className="text-white font-semibold">deeply passionate about my work, my responsibilities, and staying true to myself</strong>. I take pride in taking <strong className="text-purple-300 font-semibold">full ownership</strong> of what I build, holding myself to high standards, and <strong className="text-white font-semibold">continuously evolving</strong> both as an engineer and as an individual.
                </p>
              </div>
            </section>

            {/* 3. Traits Subsection */}
            <section className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-2 h-7 bg-purple-500 rounded-full shadow-[0_0_12px_#8b5cf6]" />
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide uppercase font-mono">
                  Traits
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {traits.map((trait, index) => (
                  <div
                    key={index}
                    className="group flex items-start gap-4 p-4 sm:p-5 rounded-xl bg-[#0e0f1d]/90 backdrop-blur-md border border-purple-900/30 hover:border-purple-500/50 hover:bg-purple-950/30 transition-all duration-300 shadow-lg"
                  >
                    <span className="text-2xl sm:text-3xl shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {trait.emoji}
                    </span>
                    <div className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium">
                      <strong className="text-white font-semibold">{trait.text}</strong>{" "}
                      <span className="text-slate-400 font-normal">{trait.detail}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 4. Interests Subsection */}
            <section className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-2 h-7 bg-purple-500 rounded-full shadow-[0_0_12px_#8b5cf6]" />
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide uppercase font-mono">
                  Interests
                </h3>
              </div>

              <div className="flex flex-wrap gap-3 sm:gap-4">
                {interests.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 px-5 py-3 rounded-full bg-[#0e0f1d]/90 backdrop-blur-md border border-purple-900/40 hover:border-purple-400/60 hover:bg-purple-900/40 text-purple-100 font-medium text-sm sm:text-base transition-all duration-300 shadow-md hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:-translate-y-0.5 cursor-default"
                  >
                    <span className="text-xl">{item.emoji}</span>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* 5. Education Subsection */}
            <section className="space-y-6 pb-12">
              <div className="flex items-center gap-3">
                <div className="w-2 h-7 bg-purple-500 rounded-full shadow-[0_0_12px_#8b5cf6]" />
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide uppercase font-mono">
                  Education
                </h3>
              </div>

              <div className="relative border-l-2 border-purple-900/60 ml-3 pl-6 sm:pl-8 space-y-8">
                {education.map((edu, index) => (
                  <div key={index} className="relative group">
                    {/* Timeline Node Indicator */}
                    <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#09090f] border-2 border-purple-500 group-hover:bg-purple-500 group-hover:shadow-[0_0_12px_#8b5cf6] transition-all duration-300" />

                    <div className="p-5 sm:p-6 rounded-2xl bg-[#0e0f1d]/90 backdrop-blur-md border border-purple-900/30 group-hover:border-purple-500/40 transition-all duration-300 shadow-lg space-y-2">
                      <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                        {edu.degree}
                      </h4>
                      <p className="text-sm sm:text-base text-purple-300/90 font-medium">
                        {edu.institution}
                      </p>
                      {edu.period && (
                        <div className="inline-flex items-center gap-2 pt-1 text-xs sm:text-sm font-mono text-slate-400">
                          <span className="px-2.5 py-0.5 rounded-md bg-purple-950/60 border border-purple-800/40 text-purple-300">
                            {edu.period}
                          </span>
                          {edu.status && (
                            <span className="text-slate-400 italic">
                              ({edu.status})
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </div>

        </div>
      </div>
    </main>
  );
}
