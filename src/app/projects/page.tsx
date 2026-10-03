"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import GridScanOverlay from "@/components/GridScanOverlay";

const AccordionGallery = dynamic(() => import("@/components/AccordionGallery"), {
  ssr: false,
});
const DotField = dynamic(() => import("@/components/DotField"), {
  ssr: false,
});

export default function ProjectsPage() {
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
      {/* Full-page Ambient Background Layer */}
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

      <GridScanOverlay active={isEntering} destinationName="PROJECTS" />

      {/* Top Header / Navigation */}
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
          MOHITVERSE // PROJECTS
        </div>
      </header>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 space-y-8">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/40 text-xs font-mono text-purple-300">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            <span>FEATURED WORKS</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Projects Showcase
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl">
            Explore interactive highlights of AI study assistants, satellite image retrieval systems, voice companions, and offline image generators.
          </p>
        </div>

        {/* Accordion Gallery Component */}
        <div className="w-full pt-4">
          <AccordionGallery
            items={[
              {
                label: "AstroNova",
                gradient: "linear-gradient(135deg, #1e3a8a 0%, #7c3aed 100%)",
                description: "Cross-modal satellite image retrieval — 39x mAP improvement using custom contrastive learning on RemoteCLIP.",
                link: "#"
              },
              {
                label: "CheatMate",
                gradient: "linear-gradient(135deg, #0891b2 0%, #2563eb 100%)",
                description: "Full-stack AI study assistant — RAG-powered notes, flashcards, and quizzes from your own documents.",
                link: "#"
              },
              {
                label: "ImageX",
                gradient: "linear-gradient(135deg, #db2777 0%, #7c3aed 100%)",
                description: "Fully offline AI image generator — Stable Diffusion running locally, zero cloud dependency.",
                link: "#"
              },
              {
                label: "Ruby",
                gradient: "linear-gradient(135deg, #dc2626 0%, #f97316 100%)",
                description: "A personal AI voice companion — 4-tier LLM failover, real-time voice, and a Live2D avatar, running on a basic laptop.",
                link: "#"
              },
              {
                label: "TransitOps",
                gradient: "linear-gradient(135deg, #059669 0%, #0d9488 100%)",
                description: "Full-stack fleet management platform — role-based dashboards built in an 8-hour hackathon sprint.",
                link: "#"
              }
            ]}
            defaultIndex={2}
            expandRatio={0.52}
            trigger="hover"
            height={480}
            showLabels={true}
            grayscale={false}
          />
        </div>
      </div>
    </main>
  );
}
