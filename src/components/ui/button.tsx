import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sand disabled:opacity-50",
  {
    variants: {
      variant: {
        solid: "bg-cream text-ink hover:bg-sand",
        outline: "border border-sand/40 text-cream hover:border-cream hover:bg-cream/5",
      },
      size: { default: "h-12 px-7", sm: "h-10 px-5" },
    },
    defaultVariants: { variant: "solid", size: "default" },
  },
);

export interface ButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export function Button({ className, variant, size, asChild, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}
