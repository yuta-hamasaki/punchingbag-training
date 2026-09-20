import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export function Button({ className, variant = "primary", ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "min-h-14 rounded-full px-7 text-sm font-black uppercase tracking-[0.16em] transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime disabled:cursor-not-allowed disabled:opacity-50",
        variant === "primary"
          ? "bg-lime text-ink hover:bg-lime-bright"
          : "border border-line bg-panel text-warm-white hover:border-muted",
        className,
      )}
      {...props}
    />
  );
}
