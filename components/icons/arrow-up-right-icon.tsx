import { IconProps } from "@/types/icons";
import * as React from "react";

const ArrowUpRightIcon = ({ size = 20, className, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    className={className ?? "text-icon-primary"}
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M6.176 13.824a.6.6 0 0 0 .848 0L12.8 8.05V12.6a.6.6 0 1 0 1.2 0v-6a.6.6 0 0 0-.6-.6h-6a.6.6 0 0 0 0 1.2h4.551l-5.775 5.776a.6.6 0 0 0 0 .848Z"
      clipRule="evenodd"
    />
  </svg>
);
export default ArrowUpRightIcon;
