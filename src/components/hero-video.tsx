"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface HeroVideoProps {
  videoUrl: string;
  className?: string;
  children?: React.ReactNode;
}

export function HeroVideo({ videoUrl, className, children }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsRevealed(true);
    }, 2500); // 2.5 seconds before UI reveals

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={cn("relative w-full h-screen overflow-hidden", className)}>
      {/* Video Background Layer */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className={cn(
          "absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-out",
          isRevealed ? "scale-105 opacity-60" : "scale-100 opacity-100"
        )}
      >
        <source src={videoUrl} type="video/mp4" />
      </video>

      {/* Clean Overlay - No heavy gradients */}
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-white/90 transition-all duration-1000 ease-out",
          isRevealed ? "opacity-100" : "opacity-0"
        )}
      />

      {/* UI Layer - Foreground */}
      <div
        className={cn(
          "relative z-10 flex items-center justify-center h-full w-full transition-all duration-700 ease-out",
          isRevealed ? "opacity-100" : "opacity-0"
        )}
      >
        {children}
      </div>
    </div>
  );
}
