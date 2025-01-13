import { IconProps } from "@/types/icons";
import * as React from "react";

const XIcon = ({ size = 20, className, ...props }: IconProps) => (
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
      strokeWidth={1.5}
      d="m7.5 7 6 6m0-6-6 6"
    />
  </svg>
);
export default XIcon;
