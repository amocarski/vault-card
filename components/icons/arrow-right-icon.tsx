import { IconProps } from "@/types/icons";
import * as React from "react";

const ArrowRightIcon = ({ size = 20, className, ...props }: IconProps) => (
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
      d="M14.334 10.5H5.667M10 6.166l4.334 4.334L10 14.833"
    />
  </svg>
);
export default ArrowRightIcon;
