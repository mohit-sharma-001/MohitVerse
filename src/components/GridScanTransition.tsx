"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import GridScan with SSR disabled to ensure WebGL/Three.js initializes safely on client
const GridScan = dynamic(() => import("@/components/GridScan"), {
  ssr: false,
});

interface GridScanTransitionProps {
  /** Optional custom text label displayed on the transition badge */
  label?: string;
  /** Active duration pulse indicator in seconds */
  duration?: number;
}

/**
 * GridScanTransition — Interactive WebGL scanning transition header for MOHITVERSE.
 *
 * Renders the Three.js GridScan shader canvas with a glowing purple scan line sweep,
 * marking location shifts and section entries with smooth visual feedback.
 */
export default function GridScanTransition({
  label = "LOCATION_TRANSFER :: INTRO_SECTION",
  duration = 2.0,
}: GridScanTransitionProps) {
  const [isScanning, setIsScanning] = useState(true);

  useEffect(() => {
    // Pulse transition state for duration interval
    const timer = setTimeout(() => {
      setIsScanning(false);
    }, duration * 1000);

    return () => clearTimeout(timer);
  }, [duration]);

  return (
    <div
      aria-hidden="true"
      className="relative w-full h-32 sm:h-44 overflow-hidden flex items-center justify-center border-t border-b border-violet-500/25 my-2"
      style={{ backgroundColor: "#09090f" }}
    >
      {/* ── WebGL GridScan Background Canvas ────────────────────── */}
      <div className="absolute inset-0 pointer-events-none opacity-85">
        <GridScan
          linesColor="#3b0764"
          scanColor="#c084fc"
          scanOpacity={0.75}
          gridScale={0.08}
          lineThickness={1.2}
          lineStyle="solid"
          lineJitter={0.05}
          scanDirection="pingpong"
          scanDuration={duration}
          scanDelay={0.4}
          scanGlow={0.8}
          scanSoftness={1.5}
          enablePost={true}
          bloomIntensity={0.5}
          bloomThreshold={0.1}
          chromaticAberration={0.002}
          noiseIntensity={0.01}
        />
      </div>

      {/* ── Center Glowing Transition Badge ────────────────────── */}
      <div className="relative z-10 flex items-center gap-3 px-5 py-2 rounded-full border border-violet-500/40 bg-[#0c0c16]/90 backdrop-blur-md shadow-[0_0_25px_rgba(139,92,246,0.3)] transition-all duration-500">
        <span
          className={`h-2.5 w-2.5 rounded-full ${
            isScanning ? "bg-purple-400 animate-ping" : "bg-emerald-400"
          }`}
        />
        <span className="text-xs sm:text-sm font-mono tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-white to-violet-300 drop-shadow-[0_0_12px_rgba(168,85,247,0.5)]">
          {label}
        </span>
      </div>

      {/* ── Bottom Ambient Gradient Glow ──────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 80% at 50% 50%, rgba(139,92,246,0.15) 0%, transparent 80%)",
        }}
      />
    </div>
  );
}
