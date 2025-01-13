import { IconProps } from "@/types/icons";
import * as React from "react";

const BorrowIcon = ({ size = 20, className, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    className={className ?? "text-icon-primary"}
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.18 10.228A.8.8 0 0 1 7.3 11.372L5.429 13.2h12.438a.8.8 0 1 1 0 1.6H5.429l1.87 1.828a.8.8 0 1 1-1.119 1.144l-3.273-3.2a.8.8 0 0 1 0-1.144l3.273-3.2Zm8.973-8a.8.8 0 0 0-1.118 1.144l1.87 1.828H3.466a.8.8 0 1 0 0 1.6h12.437l-1.87 1.828a.8.8 0 0 0 1.12 1.144l3.272-3.2a.8.8 0 0 0 0-1.144l-3.273-3.2Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="currentColor" d="M.667 0h20v20h-20z" />
      </clipPath>
    </defs>
  </svg>
);
export default BorrowIcon;
