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
        {/* 1. Particle text — optimized particle count (density=5, particleSize=2.8) for smooth 60 FPS */}
        <ParticleText
          text={"WELCOME TO\nMOHIT VERSE"}
          color="#ffffff"
          highlightColor="#38bdf8"
          trigger="mount"
          fontSize="clamp(2.5rem, 6.5vw, 5.2rem)"
          fontWeight={800}
          particleSize={2.8}
          density={5}
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
            <div className="relative rounded-xl border border-white/10 bg-black/60 px-6 py-3.5 backdrop-blur-md">
              <p className="text-sm font-semibold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-white to-pink-200 sm:text-base md:text-lg">
                Crafting Intelligent Systems & Digital Experiences
              </p>
            </div>
          </div>

          {/* CTA Button — Specular glow effect button */}
          <SpecularButton
            onClick={handleEnterClick}
            size="lg"
            className="shadow-[0_0_40px_rgba(139,92,246,0.35)] hover:shadow-[0_0_60px_rgba(139,92,246,0.6)]"
          >
            Let&apos;s Get Started
          </SpecularButton>
        </div>
      </div>
    </section>
  );
}
