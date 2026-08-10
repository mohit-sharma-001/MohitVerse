"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import DotField from "@/components/DotField";
import GridScanOverlay from "@/components/GridScanOverlay";
import TextPressure from "@/components/TextPressure";
import LogoLoop, { LogoItem } from "@/components/LogoLoop";
import {
  SiPython,
  SiC,
  SiJavascript,
  SiTypescript,
  SiCplusplus,
  SiHtml5,
  SiCss,
  SiReact,
  SiNextdotjs,
  SiVite,
  SiTailwindcss,
  SiFlask,
  SiFastapi,
  SiNodedotjs,
  SiExpress,
  SiSqlite,
  SiPostgresql,
  SiSupabase,
  SiPrisma,
  SiPytorch,
  SiHuggingface,
  SiGit,
  SiGithub,
  SiVercel,
  SiDocker,
} from "react-icons/si";

const ICON_SIZE = 40;
const ICON_CLASS = "text-white/70 transition-colors duration-300";

const languagesLogos: LogoItem[] = [
  { node: <SiPython size={ICON_SIZE} className={ICON_CLASS} />, title: "Python" },
  { node: <SiC size={ICON_SIZE} className={ICON_CLASS} />, title: "C" },
  { node: <SiJavascript size={ICON_SIZE} className={ICON_CLASS} />, title: "JavaScript" },
  { node: <SiTypescript size={ICON_SIZE} className={ICON_CLASS} />, title: "TypeScript" },
  { node: <SiCplusplus size={ICON_SIZE} className={ICON_CLASS} />, title: "C++" },
];

const frontendLogos: LogoItem[] = [
  { node: <SiHtml5 size={ICON_SIZE} className={ICON_CLASS} />, title: "HTML5" },
  { node: <SiCss size={ICON_SIZE} className={ICON_CLASS} />, title: "CSS3" },
  { node: <SiReact size={ICON_SIZE} className={ICON_CLASS} />, title: "React" },
  { node: <SiNextdotjs size={ICON_SIZE} className={ICON_CLASS} />, title: "Next.js" },
  { node: <SiVite size={ICON_SIZE} className={ICON_CLASS} />, title: "Vite" },
  { node: <SiTailwindcss size={ICON_SIZE} className={ICON_CLASS} />, title: "Tailwind CSS" },
];

const backendLogos: LogoItem[] = [
  { node: <SiFlask size={ICON_SIZE} className={ICON_CLASS} />, title: "Flask" },
  { node: <SiFastapi size={ICON_SIZE} className={ICON_CLASS} />, title: "FastAPI" },
  { node: <SiNodedotjs size={ICON_SIZE} className={ICON_CLASS} />, title: "Node.js" },
  { node: <SiExpress size={ICON_SIZE} className={ICON_CLASS} />, title: "Express" },
  { node: <SiSqlite size={ICON_SIZE} className={ICON_CLASS} />, title: "SQLite" },
  { node: <SiPostgresql size={ICON_SIZE} className={ICON_CLASS} />, title: "PostgreSQL" },
  { node: <SiSupabase size={ICON_SIZE} className={ICON_CLASS} />, title: "Supabase" },
  { node: <SiPrisma size={ICON_SIZE} className={ICON_CLASS} />, title: "Prisma" },
];

const aimlToolsLogos: LogoItem[] = [
  { node: <SiPytorch size={ICON_SIZE} className={ICON_CLASS} />, title: "PyTorch" },
  { node: <SiHuggingface size={ICON_SIZE} className={ICON_CLASS} />, title: "Hugging Face" },
  { node: <SiGit size={ICON_SIZE} className={ICON_CLASS} />, title: "Git" },
  { node: <SiGithub size={ICON_SIZE} className={ICON_CLASS} />, title: "GitHub" },
  { node: <SiVercel size={ICON_SIZE} className={ICON_CLASS} />, title: "Vercel" },
  { node: <SiDocker size={ICON_SIZE} className={ICON_CLASS} />, title: "Docker" },
  { title: "Stable Diffusion" },
  { title: "Ollama" },
  { title: "Gemini API" },
  { title: "FAISS" },
  { title: "Render" },
  { title: "GSAP" },
  { title: "Framer Motion" },
];

export default function TechStacksPage() {
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

      <GridScanOverlay active={isEntering} destinationName="TECH_STACKS" />

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
          MOHITVERSE // TECH STACKS
        </div>
      </header>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        
        {/* TECH STACKS Heading using TextPressure */}
        <div className="relative w-full max-w-5xl mx-auto h-24 sm:h-32 flex items-center justify-center overflow-visible mb-12 sm:mb-16 text-center">
          <TextPressure
            text="TECH STACKS"
            textColor="#ffffff"
            strokeColor="#8b5cf6"
            stroke={true}
            strokeWidth={3}
            minFontSize={64}
            scale={false}
            fontFamily="Roboto Flex"
          />
        </div>

        {/* 4 Category Sections */}
        <div className="space-y-12 sm:space-y-16">

          {/* Section 1: LANGUAGES */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-2 h-7 bg-purple-500 rounded-full shadow-[0_0_12px_#8b5cf6]" />
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide uppercase font-mono">
                LANGUAGES
              </h3>
            </div>
            <div className="p-4 sm:p-6 rounded-2xl bg-[#0e0f1d]/70 backdrop-blur-md border border-purple-900/30 hover:border-purple-500/40 transition-all duration-300 shadow-xl">
              <LogoLoop
                logos={languagesLogos}
                speed={80}
                direction="left"
                logoHeight={40}
                gap={48}
                pauseOnHover={true}
                fadeOut={true}
                fadeOutColor="#09090f"
                scaleOnHover={true}
                ariaLabel="Languages"
              />
            </div>
          </section>

          {/* Section 2: FRONTEND */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-2 h-7 bg-purple-500 rounded-full shadow-[0_0_12px_#8b5cf6]" />
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide uppercase font-mono">
                FRONTEND
              </h3>
            </div>
            <div className="p-4 sm:p-6 rounded-2xl bg-[#0e0f1d]/70 backdrop-blur-md border border-purple-900/30 hover:border-purple-500/40 transition-all duration-300 shadow-xl">
              <LogoLoop
                logos={frontendLogos}
                speed={80}
                direction="right"
                logoHeight={40}
                gap={48}
                pauseOnHover={true}
                fadeOut={true}
                fadeOutColor="#09090f"
                scaleOnHover={true}
                ariaLabel="Frontend"
              />
            </div>
          </section>

          {/* Section 3: BACKEND */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-2 h-7 bg-purple-500 rounded-full shadow-[0_0_12px_#8b5cf6]" />
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide uppercase font-mono">
                BACKEND
              </h3>
            </div>
            <div className="p-4 sm:p-6 rounded-2xl bg-[#0e0f1d]/70 backdrop-blur-md border border-purple-900/30 hover:border-purple-500/40 transition-all duration-300 shadow-xl">
              <LogoLoop
                logos={backendLogos}
                speed={80}
                direction="left"
                logoHeight={40}
                gap={48}
                pauseOnHover={true}
                fadeOut={true}
                fadeOutColor="#09090f"
                scaleOnHover={true}
                ariaLabel="Backend"
              />
            </div>
          </section>

          {/* Section 4: AI/ML & TOOLS */}
          <section className="space-y-6 pb-12">
            <div className="flex items-center gap-3">
              <div className="w-2 h-7 bg-purple-500 rounded-full shadow-[0_0_12px_#8b5cf6]" />
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide uppercase font-mono">
                AI/ML &amp; TOOLS
              </h3>
            </div>
            <div className="p-4 sm:p-6 rounded-2xl bg-[#0e0f1d]/70 backdrop-blur-md border border-purple-900/30 hover:border-purple-500/40 transition-all duration-300 shadow-xl">
              <LogoLoop
                logos={aimlToolsLogos}
                speed={80}
                direction="right"
                logoHeight={40}
                gap={48}
                pauseOnHover={true}
                fadeOut={true}
                fadeOutColor="#09090f"
                scaleOnHover={true}
                ariaLabel="AI/ML & Tools"
              />
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
