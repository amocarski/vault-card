import * as React from "react";
import { cn } from "@/lib/utils";

type DividerProps = React.HTMLAttributes<HTMLDivElement> & {
  orientation?: "horizontal" | "vertical";
};

const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  ({ className, orientation = "horizontal", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "shrink-0 bg-border my-2",
          orientation === "horizontal"
            ? "h-[0.5px] w-full"
            : "h-full w-[0.5px]",
          className
        )}
        {...props}
      />
    );
  }
);

Divider.displayName = "Divider";

export { Divider };
