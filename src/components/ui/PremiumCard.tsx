"use client";

import { ReactNode } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface PremiumCardProps {
  children: ReactNode;
  className?: string;
  glow?: boolean;
}

export function PremiumCard({ children, className, glow = true }: PremiumCardProps) {
  return (
    <div
      className={cn(
        "glass-card p-8 group relative overflow-hidden",
        className
      )}
    >
      {/* Background Glow Effect */}
      {glow && (
        <div className="absolute inset-0 bg-gradient-to-br from-accent-lime/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
