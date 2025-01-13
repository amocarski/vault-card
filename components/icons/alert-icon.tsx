import { IconProps } from "@/types/icons";
import * as React from "react";

const AlertIcon = ({ size = 20, className, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    className={className ?? "text-icon-primary"}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.25}
      d="M10 11.056V6.778M10 13.806v-.055M10 17.723a7.222 7.222 0 1 0 0-14.445 7.222 7.222 0 0 0 0 14.445Z"
    />
  </svg>
);
export default AlertIcon;
