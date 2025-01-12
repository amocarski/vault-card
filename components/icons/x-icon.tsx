import * as React from "react";

interface XIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

export default function XIcon({
  size = 20,
  color = "#C73E59",
  className,
  ...props
}: XIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Close"
      {...props}
    >
      <path
        d="M7.5 7L13.5 13M13.5 7L7.5 13"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
