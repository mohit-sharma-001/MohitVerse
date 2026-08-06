"use client";

import React, { useEffect, useRef } from "react";

export interface ElectricBorderProps {
  children?: React.ReactNode;
  color?: string;
  speed?: number;
  chaos?: number;
  borderRadius?: number;
  className?: string;
  style?: React.CSSProperties;
}

function getSecondaryColor(baseHex: string): string {
  if (baseHex === "#7df9ff") return "#a5f3fc";
  if (baseHex === "#a78bfa") return "#e9d5ff";
  if (baseHex === "#34d399") return "#a7f3d0";
  if (baseHex === "#f472b6") return "#fbcfe8";
  if (baseHex === "#fbbf24") return "#fef08a";
  if (baseHex === "#60a5fa") return "#bae6fd";
  return "#ffffff";
}

export default function ElectricBorder({
  children,
  color = "#7df9ff",
  speed = 1,
  chaos = 0.16,
  borderRadius = 16,
  className = "",
  style = {},
}: ElectricBorderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const sparks: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
      size: number;
      color: string;
    }[] = [];

    const padding = 20;

    const updateSize = () => {
      const rect = container.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = (rect.width + padding * 2) * dpr;
      canvas.height = (rect.height + padding * 2) * dpr;
      ctx.scale(dpr, dpr);
    };

    updateSize();

    const resizeObserver = new ResizeObserver(() => {
      updateSize();
    });
    resizeObserver.observe(container);

    const secColor = getSecondaryColor(color);

    const render = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      const fullW = w + padding * 2;
      const fullH = h + padding * 2;

      ctx.clearRect(0, 0, fullW, fullH);

      if (w <= 0 || h <= 0) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      time += 0.06 * speed;

      const r = Math.min(borderRadius, Math.min(w, h) / 2);
      const points: { x: number; y: number; nx: number; ny: number }[] = [];

      const stepsPerSide = 32;

      // Top edge
      for (let i = 0; i <= stepsPerSide; i++) {
        const x = padding + r + ((w - 2 * r) * i) / stepsPerSide;
        const y = padding;
        points.push({ x, y, nx: 0, ny: -1 });
      }
      // Top-right corner
      for (let i = 1; i <= stepsPerSide / 2; i++) {
        const angle = -Math.PI / 2 + (Math.PI / 2) * (i / (stepsPerSide / 2));
        const x = padding + w - r + r * Math.cos(angle);
        const y = padding + r + r * Math.sin(angle);
        points.push({ x, y, nx: Math.cos(angle), ny: Math.sin(angle) });
      }
      // Right edge
      for (let i = 1; i <= stepsPerSide; i++) {
        const x = padding + w;
        const y = padding + r + ((h - 2 * r) * i) / stepsPerSide;
        points.push({ x, y, nx: 1, ny: 0 });
      }
      // Bottom-right corner
      for (let i = 1; i <= stepsPerSide / 2; i++) {
        const angle = (Math.PI / 2) * (i / (stepsPerSide / 2));
        const x = padding + w - r + r * Math.cos(angle);
        const y = padding + h - r + r * Math.sin(angle);
        points.push({ x, y, nx: Math.cos(angle), ny: Math.sin(angle) });
      }
      // Bottom edge
      for (let i = 1; i <= stepsPerSide; i++) {
        const x = padding + w - r - ((w - 2 * r) * i) / stepsPerSide;
        const y = padding + h;
        points.push({ x, y, nx: 0, ny: 1 });
      }
      // Bottom-left corner
      for (let i = 1; i <= stepsPerSide / 2; i++) {
        const angle = Math.PI / 2 + (Math.PI / 2) * (i / (stepsPerSide / 2));
        const x = padding + r + r * Math.cos(angle);
        const y = padding + h - r + r * Math.sin(angle);
        points.push({ x, y, nx: Math.cos(angle), ny: Math.sin(angle) });
      }
      // Left edge
      for (let i = 1; i <= stepsPerSide; i++) {
        const x = padding;
        const y = padding + h - r - ((h - 2 * r) * i) / stepsPerSide;
        points.push({ x, y, nx: -1, ny: 0 });
      }
      // Top-left corner
      for (let i = 1; i < stepsPerSide / 2; i++) {
        const angle = Math.PI + (Math.PI / 2) * (i / (stepsPerSide / 2));
        const x = padding + r + r * Math.cos(angle);
        const y = padding + r + r * Math.sin(angle);
        points.push({ x, y, nx: Math.cos(angle), ny: Math.sin(angle) });
      }

      const maxDisplace = Math.min(w, h) * chaos * 0.18;

      const drawElectricPath = (
        pathColor: string,
        offsetFactor: number,
        alpha: number,
        lineWidth: number,
        blurRadius: number,
        freqMult = 1.0
      ) => {
        ctx.save();
        ctx.beginPath();
        ctx.strokeStyle = pathColor;
        ctx.globalAlpha = alpha;
        ctx.lineWidth = lineWidth;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";

        if (blurRadius > 0) {
          ctx.shadowColor = pathColor;
          ctx.shadowBlur = blurRadius;
        }

        for (let i = 0; i < points.length; i++) {
          const pt = points[i];
          const seed = i * 0.4 * freqMult + time * 6 * freqMult;
          const noise =
            (Math.sin(seed) * Math.cos(seed * 1.9) +
              Math.sin(seed * 3.7) * 0.6) *
            maxDisplace *
            offsetFactor;

          const px = pt.x + pt.nx * noise;
          const py = pt.y + pt.ny * noise;

          if (i === 0) {
            ctx.moveTo(px, py);
          } else {
            ctx.lineTo(px, py);
          }
        }

        ctx.closePath();
        ctx.stroke();
        ctx.restore();
      };

      // Layer 1: Massive Ambient Outer Electric Glow (Front overlay)
      drawElectricPath(color, 1.5, 0.35, 7.0, 22);

      // Layer 2: Secondary Tone Plasma Beam (Front overlay)
      drawElectricPath(secColor, 1.1, 0.65, 3.5, 14, 1.4);

      // Layer 3: High-Frequency Violent Electricity (Front overlay)
      drawElectricPath(color, 0.6, 0.9, 2.2, 8, 2.5);

      // Layer 4: Sharp Super-White Core Beam (Front overlay)
      drawElectricPath("#ffffff", 0.2, 1.0, 1.4, 4, 3.8);

      // Travelling Orbital Energy Pulse (Front overlay)
      const pulsePos = (time * 1.5) % points.length;
      const baseIdx = Math.floor(pulsePos);
      const frac = pulsePos - baseIdx;
      const p1 = points[baseIdx % points.length];
      const p2 = points[(baseIdx + 1) % points.length];

      if (p1 && p2) {
        const pulseX = p1.x + (p2.x - p1.x) * frac;
        const pulseY = p1.y + (p2.y - p1.y) * frac;

        ctx.save();
        ctx.fillStyle = "#ffffff";
        ctx.shadowColor = color;
        ctx.shadowBlur = 18;
        ctx.globalAlpha = 0.95;
        ctx.beginPath();
        ctx.arc(pulseX, pulseY, 4.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // Branching Lightning Arcs in FRONT of Card
      const numBranches = 4;
      for (let b = 0; b < numBranches; b++) {
        const nodeIdx = Math.floor(
          ((Math.sin(time * 3 + b * 2.1) + 1) * 0.5 * points.length) %
            points.length
        );
        const origin = points[nodeIdx];
        if (origin) {
          ctx.save();
          ctx.beginPath();
          ctx.strokeStyle = Math.random() > 0.4 ? color : secColor;
          ctx.globalAlpha = 0.9;
          ctx.lineWidth = 1.6;
          ctx.shadowColor = color;
          ctx.shadowBlur = 10;

          let bx = origin.x;
          let by = origin.y;
          ctx.moveTo(bx, by);

          const branchLength = 3 + Math.floor(Math.random() * 4);
          for (let step = 0; step < branchLength; step++) {
            const spread = (Math.random() - 0.5) * 14;
            bx += origin.nx * 5 + spread;
            by += origin.ny * 5 + spread;
            ctx.lineTo(bx, by);
          }

          ctx.stroke();
          ctx.restore();

          if (Math.random() < 0.35) {
            sparks.push({
              x: bx,
              y: by,
              vx: origin.nx * (1.5 + Math.random() * 2.5) + (Math.random() - 0.5) * 2,
              vy: origin.ny * (1.5 + Math.random() * 2.5) + (Math.random() - 0.5) * 2,
              life: 0,
              maxLife: 18 + Math.random() * 14,
              size: 2.0 + Math.random() * 2.5,
              color: Math.random() > 0.3 ? color : "#ffffff",
            });
          }
        }
      }

      // Sparks Update & Rendering IN FRONT
      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];
        s.x += s.vx;
        s.y += s.vy;
        s.life++;

        const alpha = 1 - s.life / s.maxLife;
        if (alpha <= 0) {
          sparks.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.fillStyle = s.color;
        ctx.globalAlpha = alpha;
        ctx.shadowColor = s.color;
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size * alpha, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
    };
  }, [color, speed, chaos, borderRadius]);

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      style={{
        borderRadius: `${borderRadius}px`,
        ...style,
      }}
    >
      {/* 1. Flashcard Content at z-10 */}
      <div className="relative z-10 w-full h-full">{children}</div>

      {/* 2. ELECTRIC CANVAS OVERLAY RENDERED IN FRONT AT z-30 */}
      <canvas
        ref={canvasRef}
        className="absolute -inset-[20px] pointer-events-none z-30"
        style={{
          width: "calc(100% + 40px)",
          height: "calc(100% + 40px)",
          borderRadius: `${borderRadius + 10}px`,
        }}
      />
    </div>
  );
}
