"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import FaultyTerminal from "@/components/FaultyTerminal";
import GridScanOverlay from "@/components/GridScanOverlay";
import FuzzyText from "@/components/FuzzyText";
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
const ICON_CLASS = "text-white/70 group-hover/logo:text-white transition-colors duration-300";

const createIconItem = (
  Icon: React.ComponentType<{ size?: number; className?: string }>,
  title: string
): LogoItem => ({
  node: (
    <div className="flex flex-col items-center justify-center gap-2 group/logo" title={title}>
      <Icon size={ICON_SIZE} className={ICON_CLASS} />
      <span className="text-[11px] font-mono tracking-wider text-slate-400 group-hover/logo:text-purple-300 transition-colors duration-300 select-none">
        {title}
      </span>
    </div>
  ),
  title,
});

const createPillItem = (title: string): LogoItem => ({
  node: (
    <span className="px-4 py-2 rounded-full bg-[#0e0f1d]/90 border border-purple-900/40 hover:border-purple-400/60 hover:bg-purple-900/40 text-purple-200 hover:text-white font-mono text-xs font-semibold tracking-wider transition-all duration-300 shadow-md hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] whitespace-nowrap select-none">
      {title}
    </span>
  ),
  title,
});

const languagesLogos: LogoItem[] = [
  createIconItem(SiPython, "Python"),
  createIconItem(SiC, "C"),
  createIconItem(SiJavascript, "JavaScript"),
  createIconItem(SiTypescript, "TypeScript"),
  createIconItem(SiCplusplus, "C++"),
];

const frontendLogos: LogoItem[] = [
  createIconItem(SiHtml5, "HTML5"),
  createIconItem(SiCss, "CSS3"),
  createIconItem(SiReact, "React"),
  createIconItem(SiNextdotjs, "Next.js"),
  createIconItem(SiVite, "Vite"),
  createIconItem(SiTailwindcss, "Tailwind CSS"),
];

const backendLogos: LogoItem[] = [
  createIconItem(SiFlask, "Flask"),
  createIconItem(SiFastapi, "FastAPI"),
  createIconItem(SiNodedotjs, "Node.js"),
  createIconItem(SiExpress, "Express"),
  createIconItem(SiSqlite, "SQLite"),
  createIconItem(SiPostgresql, "PostgreSQL"),
  createIconItem(SiSupabase, "Supabase"),
  createIconItem(SiPrisma, "Prisma"),
];

const aimlToolsLogos: LogoItem[] = [
  createIconItem(SiPytorch, "PyTorch"),
  createIconItem(SiHuggingface, "Hugging Face"),
  createIconItem(SiGit, "Git"),
  createIconItem(SiGithub, "GitHub"),
  createIconItem(SiVercel, "Vercel"),
  createIconItem(SiDocker, "Docker"),
  createPillItem("Stable Diffusion"),
  createPillItem("Ollama"),
  createPillItem("Gemini API"),
  createPillItem("FAISS"),
  createPillItem("Render"),
  createPillItem("GSAP"),
  createPillItem("Framer Motion"),
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
      {/* Full-page Ambient Background Layer (FaultyTerminal) */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden opacity-50">
        <FaultyTerminal
          tint="#8b5cf6"
          scale={1.2}
          digitSize={1.4}
          scanlineIntensity={0.25}
          glitchAmount={0.8}
          flickerAmount={0.5}
          noiseAmp={0.8}
          curvature={0.15}
          mouseReact={true}
          mouseStrength={0.25}
          brightness={0.7}
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
        
        {/* TECH STACKS Heading using FuzzyText */}
        <div className="relative w-full max-w-5xl mx-auto flex items-center justify-center mb-12 sm:mb-16 text-center select-none">
          <FuzzyText
            baseIntensity={0.18}
            hoverIntensity={0.55}
            enableHover={true}
            color="#ffffff"
            fontSize="clamp(2.5rem, 7vw, 5.5rem)"
            fontWeight={900}
            fuzzRange={25}
          >
            TECH STACKS
          </FuzzyText>
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
