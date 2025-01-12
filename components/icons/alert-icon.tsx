import * as React from "react";

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

export default function AlertIcon({
  size = 20,
  color = "rgba(67, 76, 83, 0.9)",
  className,
  ...props
}: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Alert"
      {...props}
    >
      <path
        d="M10 11.056L10 6.7782"
        stroke={color}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 13.806V13.7505"
        stroke={color}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.0001 17.7226C13.9888 17.7226 17.2223 14.4891 17.2223 10.5004C17.2223 6.5117 13.9888 3.2782 10.0001 3.2782C6.01133 3.2782 2.77783 6.5117 2.77783 10.5004C2.77783 14.4891 6.01133 17.7226 10.0001 17.7226Z"
        stroke={color}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
