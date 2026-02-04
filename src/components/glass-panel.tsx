import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassPanelProps {
  children: ReactNode;
  variant?: "default" | "strong" | "subtle";
  className?: string;
  shadow?: "none" | "default" | "lg";
}

export function GlassPanel({
  children,
  variant = "default",
  className,
  shadow = "default",
}: GlassPanelProps) {
  const baseClasses = "rounded-xl transition-all duration-300 ease-out";

  const variantClasses = {
    default: "glass-panel shadow-glass",
    strong: "glass-panel-strong shadow-glass-lg",
    subtle: "glass-panel-subtle",
  };

  const shadowClasses = {
    none: "",
    default: "shadow-glass",
    lg: "shadow-glass-lg",
  };

  return (
    <div
      className={cn(
        baseClasses,
        variantClasses[variant],
        shadowClasses[shadow],
        className
      )}
    >
      {children}
    </div>
  );
}

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className, hover = false }: GlassCardProps) {
  return (
    <GlassPanel
      className={cn(
        "p-6 hover:bg-white/80",
        hover && "hover:shadow-glass-lg hover:scale-[1.02] cursor-pointer",
        className
      )}
    >
      {children}
    </GlassPanel>
  );
}
