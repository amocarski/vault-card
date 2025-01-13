import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full font-medium ring-offset-background transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-interactive-active focus-visible:ring-offset-0 disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-bg-button text-text-button-primary gap-[10px] text-[15px] hover:bg-bg-button-hover disabled:bg-bg-button-disabled disabled:text-text-button-disabled",
        secondary:
          "bg-bg-primary text-text-body hover:bg-bg-interactive-hover gap-[2px] text-[11px] rounded-[3px]",
      },
      size: {
        default: "h-8 px-[10px] py-[6.5px]",
        small: "h-[26px] px-2 py-[3px] [&:has(svg)]:!pr-[2px]",
        big: "h-12 px-5 py-3",
        icon: "h-12 w-12 p-[14px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
