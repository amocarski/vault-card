import { IconProps } from "@/types/icons";
import * as React from "react";

const SpinnerIcon = ({ size = 20, className, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    className={className ?? "text-icon-primary"}
    {...props}
  >
    <circle cx={5} cy={10.333} r={1.5} fill="currentColor" />
    <circle cx={6.167} cy={5.667} r={1.5} fill="currentColor" />
    <circle cx={10.833} cy={4.5} r={1.5} fill="currentColor" />
    <circle cx={15.5} cy={5.667} r={1.5} fill="currentColor" />
    <circle cx={15.5} cy={15} r={1.5} fill="currentColor" />
    <circle cx={10.833} cy={16.167} r={1.5} fill="currentColor" />
    <circle cx={6.167} cy={15} r={1.5} fill="currentColor" />
    <circle cx={16.667} cy={10.333} r={1.5} fill="currentColor" />
  </svg>
);
export default SpinnerIcon;
