import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type ButtonHTMLAttributes } from "react";

import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex min-h-11 items-center justify-center rounded-[8px] px-5 text-sm font-medium transition-transform duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-cta hover:-translate-y-0.5",
        primary: "bg-primary text-primary-foreground shadow-cta hover:-translate-y-0.5",
        destructive: "bg-destructive text-destructive-foreground",
        outline: "border border-border bg-background text-foreground hover:bg-muted",
        secondary: "bg-secondary text-secondary-foreground",
        ghost: "bg-transparent text-foreground hover:bg-muted",
        link: "bg-transparent px-0 text-foreground underline-offset-4 hover:underline",
        text: "bg-transparent px-0 text-foreground shadow-none hover:text-accent",
      },
      size: {
        default: "h-11 px-5",
        sm: "h-9 px-3",
        lg: "h-12 px-7",
        icon: "size-11 p-0",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, ...props }, ref) => (
  <button ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />
));
Button.displayName = "Button";

export { buttonVariants };