import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps extends React.ComponentProps<"input"> {
  error?: any;
  success?: boolean;
  label?: string;
  endIcon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, endIcon, label, success, ...props }, ref) => {
    return (
      <div className={cn("flex flex-col gap-2", className)} ref={ref}>
        {label && (
          <label
            className="text-xs font-medium text-text-secondary"
            htmlFor={props.id}
          >
            {label}
          </label>
        )}
        <div className="relative flex items-center">
          <input
            type={type}
            className={cn(
              "flex h-9 w-full font-normal rounded-md bg-bg-interactive hover:bg-bg-interactive-hover focus:bg-bg-interactive-pressed pr-3 pl-[10px] py-2 text-[13px] ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-text-interactive-disabled focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-border-active focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 text-text-body",
              endIcon && "pr-[34px]",
              error && [
                "border border-solid !border-border-interactive-error text-text-interactive-error",
              ],
              success && "border border-solid border-constant-valid"
            )}
            {...props}
          />
          {endIcon && (
            <div className="absolute right-3 flex items-center gap-[10px]">
              {endIcon}
            </div>
          )}
        </div>
        {error && (
          <p className="text-right text-xs font-medium text-text-interactive-error">
            {error}
          </p>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
