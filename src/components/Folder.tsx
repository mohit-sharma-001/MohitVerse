'use client';

import React, { useState } from 'react';

export interface FolderProps {
  color?: string;
  size?: number;
  items?: React.ReactNode[];
  className?: string;
  onFolderOpen?: () => void;
  hintLabel?: string;
  isOpen?: boolean;
  showPapers?: boolean;
}

const darkenColor = (hex: string, percent: number): string => {
  let color = hex.startsWith('#') ? hex.slice(1) : hex;
  if (color.length === 3) {
    color = color
      .split('')
      .map(c => c + c)
      .join('');
  }
  const num = parseInt(color.slice(0, 6), 16);
  let r = (num >> 16) & 0xff;
  let g = (num >> 8) & 0xff;
  let b = num & 0xff;
  r = Math.max(0, Math.min(255, Math.floor(r * (1 - percent))));
  g = Math.max(0, Math.min(255, Math.floor(g * (1 - percent))));
  b = Math.max(0, Math.min(255, Math.floor(b * (1 - percent))));
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
};

const Folder: React.FC<FolderProps> = ({
  color = '#8b5cf6',
  size = 1.3,
  items = [],
  className = '',
  onFolderOpen,
  hintLabel = 'EXPLORE',
  isOpen,
  showPapers = true
}) => {
  const maxItems = 3;
  const papers = items.slice(0, maxItems);
  while (papers.length < maxItems) {
    papers.push(null);
  }

  const [internalOpen, setInternalOpen] = useState(false);
  const open = isOpen !== undefined ? isOpen : internalOpen;

  const [paperOffsets, setPaperOffsets] = useState<{ x: number; y: number }[]>(
    Array.from({ length: maxItems }, () => ({ x: 0, y: 0 }))
  );

  const folderBackColor = darkenColor(color, 0.2);
  const paper1 = darkenColor('#ffffff', 0.15);
  const paper2 = darkenColor('#ffffff', 0.08);
  const paper3 = '#ffffff';

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isOpen === undefined) {
      setInternalOpen(prev => !prev);
    }
    if (open) {
      setPaperOffsets(Array.from({ length: maxItems }, () => ({ x: 0, y: 0 })));
    }
    onFolderOpen?.();
  };

  const handlePaperMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => {
    if (!open) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const offsetX = (e.clientX - centerX) * 0.15;
    const offsetY = (e.clientY - centerY) * 0.15;
    setPaperOffsets(prev => {
      const newOffsets = [...prev];
      newOffsets[index] = { x: offsetX, y: offsetY };
      return newOffsets;
    });
  };

  const handlePaperMouseLeave = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => {
    setPaperOffsets(prev => {
      const newOffsets = [...prev];
      newOffsets[index] = { x: 0, y: 0 };
      return newOffsets;
    });
  };

  const folderStyle: React.CSSProperties = {
    '--folder-color': color,
    '--folder-back-color': folderBackColor,
    '--paper-1': paper1,
    '--paper-2': paper2,
    '--paper-3': paper3
  } as React.CSSProperties;

  const scaleStyle = {
    transform: `scale(${size})`,
    margin: `${Math.max(0, (size - 1) * 36)}px 0`
  };

  const getOpenTransform = (index: number) => {
    if (index === 0) return 'translate(-120%, -70%) rotate(-15deg)';
    if (index === 1) return 'translate(10%, -70%) rotate(15deg)';
    if (index === 2) return 'translate(-50%, -100%) rotate(5deg)';
    return '';
  };

  return (
    <div className="flex flex-col items-center">
      <div style={scaleStyle} className={className}>
        <div
          className={`group relative transition-all duration-200 ease-in cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 ${
            !open ? 'hover:-translate-y-2' : ''
          }`}
          style={{
            ...folderStyle,
            transform: open ? 'translateY(-8px)' : undefined
          }}
          onClick={handleClick}
          onKeyDown={e => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleClick(e as any);
            }
          }}
          tabIndex={0}
          role="button"
          aria-expanded={open}
          aria-label={open ? 'Close folder' : 'Open folder'}
        >
          <div
            className="relative w-[100px] h-[80px] rounded-tl-0 rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px]"
            style={{ backgroundColor: folderBackColor }}
          >
            <span
              className="absolute z-0 bottom-[98%] left-0 w-[30px] h-[10px] rounded-tl-[5px] rounded-tr-[5px] rounded-bl-0 rounded-br-0"
              style={{ backgroundColor: folderBackColor }}
            ></span>
            {showPapers && papers.map((item, i) => {
              let sizeClasses = '';
              if (i === 0) sizeClasses = open ? 'w-[70%] h-[80%]' : 'w-[70%] h-[80%]';
              if (i === 1) sizeClasses = open ? 'w-[80%] h-[80%]' : 'w-[80%] h-[70%]';
              if (i === 2) sizeClasses = open ? 'w-[90%] h-[80%]' : 'w-[90%] h-[60%]';

              const transformStyle = open
                ? `${getOpenTransform(i)} translate(${paperOffsets[i].x}px, ${paperOffsets[i].y}px)`
                : undefined;

              return (
                <div
                  key={i}
                  onMouseMove={e => handlePaperMouseMove(e, i)}
                  onMouseLeave={e => handlePaperMouseLeave(e, i)}
                  className={`absolute z-20 bottom-[10%] left-1/2 transition-all duration-300 ease-in-out ${
                    !open ? 'transform -translate-x-1/2 translate-y-[10%] group-hover:translate-y-0' : 'hover:scale-110'
                  } ${sizeClasses}`}
                  style={{
                    ...(!open ? {} : { transform: transformStyle }),
                    backgroundColor: i === 0 ? paper1 : i === 1 ? paper2 : paper3,
                    borderRadius: '10px'
                  }}
                >
                  {item}
                </div>
              );
            })}
            <div
              className={`absolute z-30 w-full h-full origin-bottom transition-all duration-300 ease-in-out ${
                !open ? 'group-hover:[transform:skew(15deg)_scaleY(0.6)]' : ''
              }`}
              style={{
                backgroundColor: color,
                borderRadius: '5px 10px 10px 10px',
                ...(open && { transform: 'skew(15deg) scaleY(0.6)' })
              }}
            ></div>
            <div
              className={`absolute z-30 w-full h-full origin-bottom transition-all duration-300 ease-in-out ${
                !open ? 'group-hover:[transform:skew(-15deg)_scaleY(0.6)]' : ''
              }`}
              style={{
                backgroundColor: color,
                borderRadius: '5px 10px 10px 10px',
                ...(open && { transform: 'skew(-15deg) scaleY(0.6)' })
              }}
            >
              {/* Embedded "EXPLORE" text directly on front folder cover */}
              {hintLabel && !open && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="font-mono font-black text-[11px] tracking-[0.18em] uppercase text-white/95 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] border border-white/20 px-2 py-0.5 rounded bg-black/25 backdrop-blur-[2px]">
                    {hintLabel}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Folder;
