"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const GridScan = dynamic(() => import("@/components/GridScan"), {
  ssr: false,
});

interface GridScanOverlayProps {
  /** True when transition is active */
  active: boolean;
  /** Destination section name, formatted as "INTRO_SECTION", "PROJECTS_SECTION", etc. */
  destinationName?: string;
  /** Callback fired after fade-out transition finishes */
  onTransitionEnd?: () => void;
}

/**
 * GridScanOverlay — Cyberpunk WebGL page transition overlay for MOHITVERSE.
 *
 * Displays full-screen WebGL scanning grid with cyberpunk monospace text:
 *   "LOADING..."
 *   "ENTERING <DESTINATION_NAME>"
 */
export default function GridScanOverlay({
  active,
  destinationName = "INTRO_SECTION",
  onTransitionEnd,
}: GridScanOverlayProps) {
  const [visible, setVisible] = useState(active);

  useEffect(() => {
    if (active) {
      setVisible(true);
    } else {
      const timer = setTimeout(() => {
        setVisible(false);
        onTransitionEnd?.();
      }, 400); // 400ms fade out duration
      return () => clearTimeout(timer);
    }
  }, [active, onTransitionEnd]);

  if (!visible) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-50 pointer-events-none transition-opacity duration-400 ease-out flex items-center justify-center ${
        active ? "opacity-100" : "opacity-0"
      }`}
      style={{ backgroundColor: "#09090f" }}
    >
      {/* ── WebGL Shader Background Canvas ──────────────────────── */}
      <div className="absolute inset-0 w-full h-full">
        <GridScan
          linesColor="#3b0764"
          scanColor="#c084fc"
          scanOpacity={0.85}
          gridScale={0.07}
          lineThickness={1.2}
          lineStyle="solid"
          lineJitter={0.05}
          scanDirection="pingpong"
          scanDuration={1.2}
          scanDelay={0.1}
          scanGlow={0.9}
          scanSoftness={1.5}
          enablePost={true}
          bloomIntensity={0.6}
          bloomThreshold={0.1}
          chromaticAberration={0.003}
          noiseIntensity={0.015}
        />
      </div>

      {/* ── Centered Cyberpunk Loading Text Overlay ───────────── */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 pointer-events-none">
        <div className="flex flex-col items-center gap-2 px-8 py-5 rounded-2xl bg-[#09090f]/85 border border-violet-500/40 backdrop-blur-md shadow-[0_0_35px_rgba(139,92,246,0.35)]">
          <span className="text-xs sm:text-sm font-mono font-semibold tracking-[0.25em] uppercase text-purple-300 animate-pulse drop-shadow-[0_0_12px_rgba(192,132,252,0.8)]">
            LOADING...
          </span>
          <h3 className="text-sm sm:text-base md:text-lg font-mono font-extrabold tracking-[0.2em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-white to-cyan-300 drop-shadow-[0_0_20px_rgba(168,85,247,0.8)]">
            ENTERING {destinationName}
          </h3>
        </div>
      </div>
    </div>
  );
}
