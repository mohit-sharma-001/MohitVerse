"use client";

/**
 * WelcomeScreen — the very first screen a visitor sees on MOHITVERSE.
 *
 * Flow:
 *  1. Page loads → ParticleText renders "Enter" (trigger="mount").
 *  2. ParticleText calls onComplete after ~1.2 s → tagline + button fade in
 *     with a slight additional delay for drama.
 *  3. Clicking "Let's Get Started" fires `onEnterClick` (wired up externally
 *     once the Intro section is built).
 */

import React, { useState, useCallback } from "react";
import ParticleText from "@/components/ParticleText";
import SpecularButton from "@/components/SpecularButton";
import Lightfall from "@/components/Lightfall";

interface WelcomeScreenProps {
  /** Called when the visitor clicks "Let's Get Started". */
  onEnterClick?: () => void;
}

export default function WelcomeScreen({
  onEnterClick,
}: WelcomeScreenProps) {
  const [contentVisible, setContentVisible] = useState(false);

  /** ParticleText fires this once the assembly animation ends (~1.2 s). */
  const handleParticleComplete = useCallback(() => {
    /* Extra 300 ms pause before tagline/button slide in — feels dramatic */
    setTimeout(() => setContentVisible(true), 300);
  }, []);

  const handleEnterClick = useCallback(() => {
    onEnterClick?.();
  }, [onEnterClick]);

  return (
    <section
      id="welcome"
      className="relative flex min-h-dvh w-full flex-col items-center justify-center overflow-hidden px-4"
      style={{ backgroundColor: "#09090f" }}
    >
      {/* ── Lightfall background ───────────────────────────────── */}
      <div className="absolute inset-0 z-0">
        <Lightfall
          colors={["#a6c8ff", "#5fc6f2ff", "#ff9ffc"]}
          backgroundColor="#0a29ff"
          speed={0.5}
          streakCount={5}
          streakWidth={0.9}
          streakLength={1.4}
          density={0.7}
          twinkle={1}
          glow={0.6}
          backgroundGlow={0.25}
          zoom={3}
          opacity={1}
          mouseInteraction={true}
          mouseStrength={1.0}
          mouseRadius={0.2}
          mouseDampening={0}
        />
      </div>
      {/* ── Ambient background vignette for text legibility ────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 65% 50% at 50% 50%, rgba(9,9,15,0.65) 0%, rgba(9,9,15,0.3) 60%, transparent 100%)",
        }}
      />

      {/* ── Subtle grid overlay ──────────────────────────────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(139,92,246,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.8) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── Main content stack ───────────────────────────────────── */}
      <div className="relative z-10 flex w-full flex-col items-center gap-6 sm:gap-7 text-center">
        {/* 1. Particle text — high contrast glowing centered format */}
        <ParticleText
          text={"WELCOME TO\nMOHIT VERSE"}
          color="#ffffff"
          highlightColor="#38bdf8"
          trigger="mount"
          fontSize="clamp(2.5rem, 6.5vw, 5.2rem)"
          fontWeight={800}
          particleSize={2.4}
          density={3}
          scatter={120}
          glow
          onComplete={handleParticleComplete}
          className="w-full max-w-4xl h-[260px] sm:h-[320px] drop-shadow-[0_0_25px_rgba(56,189,248,0.35)]"
        />

        {/* 2. Tagline + CTA — fade in after particles finish with equal spacing */}
        <div
          className="flex flex-col items-center gap-6 sm:gap-7"
          style={{
            opacity: contentVisible ? 1 : 0,
            transform: contentVisible ? "translateY(0)" : "translateY(18px)",
            transition: "opacity 0.9s ease, transform 0.9s ease",
            pointerEvents: contentVisible ? "auto" : "none",
          }}
        >
          {/* Tagline — vibrant glowing gradient style */}
          <div className="relative group max-w-[90vw]">
            <div
              aria-hidden="true"
              className="absolute -inset-1 rounded-xl bg-gradient-to-r from-violet-600 via-fuchsia-500 to-indigo-600 opacity-50 blur-lg transition-all duration-700 group-hover:opacity-80"
            />
            <div className="relative rounded-xl border border-violet-500/30 bg-[#0c0c16]/80 px-6 py-3 shadow-[0_0_30px_rgba(139,92,246,0.25)] backdrop-blur-md">
              <p className="text-base font-extrabold tracking-wider sm:text-lg md:text-xl lg:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-white to-pink-300 drop-shadow-[0_0_20px_rgba(168,85,247,0.7)]">
                ⚡ Building things I wish existed. 🚀
              </p>
            </div>
          </div>

          <SpecularButton
            size="lg"
            radius={9999}
            lineColor="#a78bfa"
            baseColor="#5b21b6"
            tint="#8b5cf6"
            tintOpacity={0.2}
            blur={12}
            textColor="#ffffff"
            intensity={1.4}
            onClick={handleEnterClick}
          >
            <span className="flex items-center gap-2 font-semibold tracking-widest uppercase text-sm">
              Let&apos;s Get Started
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </SpecularButton>
        </div>
      </div>

      {/* ── Decorative corner accents ────────────────────────────── */}
      <CornerAccent position="top-left" />
      <CornerAccent position="top-right" />
      <CornerAccent position="bottom-left" />
      <CornerAccent position="bottom-right" />
    </section>
  );
}

/* ─── Corner decorative accent lines ──────────────────────────────── */
function CornerAccent({
  position,
}: {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}) {
  const posClasses: Record<string, string> = {
    "top-left": "top-6 left-6",
    "top-right": "top-6 right-6",
    "bottom-left": "bottom-6 left-6",
    "bottom-right": "bottom-6 right-6",
  };

  const rotateMap: Record<string, string> = {
    "top-left": "0deg",
    "top-right": "90deg",
    "bottom-left": "270deg",
    "bottom-right": "180deg",
  };

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute ${posClasses[position]}`}
      style={{ transform: `rotate(${rotateMap[position]})` }}
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 27V4C1 2.34315 2.34315 1 4 1H27"
          stroke="rgba(139,92,246,0.4)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
