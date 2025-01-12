import * as React from "react";

interface ArrowRightProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

export default function ArrowRight({
  size = 20,
  color = "rgba(67, 76, 83, 0.9)",
  className,
  ...props
}: ArrowRightProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Arrow right"
      {...props}
    >
      <path
        d="M14.3335 10.4997L5.66683 10.4997"
        stroke={color}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.0002 6.16638L14.3335 10.4997L10.0002 14.833"
        stroke={color}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
