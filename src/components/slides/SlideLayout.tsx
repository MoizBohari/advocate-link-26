import type { ReactNode } from "react";

interface SlideLayoutProps {
  children: ReactNode;
  className?: string;
  dark?: boolean;
}

export function SlideLayout({ children, className = "", dark = false }: SlideLayoutProps) {
  return (
    <div
      className={`slide-content ${dark ? "bg-[var(--slide-primary)] text-[var(--slide-primary-foreground)]" : "bg-[var(--slide-surface)] text-[var(--slide-text)]"} ${className}`}
    >
      {children}
    </div>
  );
}
