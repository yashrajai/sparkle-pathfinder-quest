"use client";

import { cn } from "@/lib/utils";

interface VideoTextProps {
  src: string;
  children: React.ReactNode;
  className?: string;
}

export function VideoText({ src, children, className }: VideoTextProps) {
  return (
    <div className={cn("relative", className)}>
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={src} type="video/mp4" />
      </video>
      <svg className="relative w-full h-full">
        <defs>
          <mask id="textMask">
            <rect width="100%" height="100%" fill="black" />
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="middle"
              fill="white"
              className="font-bold"
              style={{ fontSize: "clamp(4rem, 15vw, 12rem)" }}
            >
              {children}
            </text>
          </mask>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill="white"
          mask="url(#textMask)"
        />
      </svg>
    </div>
  );
}
