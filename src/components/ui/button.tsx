import type { ButtonHTMLAttributes } from "react";

import { cn } from "../../lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline" | "text";
};

export function Button({ className, variant = "primary", ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex min-h-11 items-center justify-center rounded-[8px] px-5 text-sm font-medium transition-transform duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
        variant === "primary" && "bg-primary text-primary-foreground shadow-cta hover:-translate-y-0.5",
        variant === "outline" && "border border-border bg-background text-foreground hover:bg-muted",
        variant === "text" && "bg-transparent px-0 text-foreground shadow-none hover:text-accent",
        className,
      )}
      {...props}
    />
  );
}