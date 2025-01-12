import * as React from "react";

interface SpinnerProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  spinning?: boolean;
}

export default function Spinner({
  size = 20,
  color = "#FFB13D",
  spinning = true,
  className,
  ...props
}: SpinnerProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${spinning ? "animate-spin" : ""} ${className || ""}`}
      aria-label="Loading spinner"
      {...props}
    >
      <circle cx="5" cy="10.3334" r="1.5" fill={color} fillOpacity="0.5" />
      <circle
        cx="6.16675"
        cy="5.66661"
        r="1.5"
        fill={color}
        fillOpacity="0.5"
      />
      <circle cx="10.8333" cy="4.5" r="1.5" fill={color} fillOpacity="0.5" />
      <circle cx="15.5" cy="5.66661" r="1.5" fill={color} fillOpacity="0.5" />
      <circle cx="15.5" cy="15" r="1.5" fill={color} fillOpacity="0.5" />
      <circle
        cx="10.8333"
        cy="16.1666"
        r="1.5"
        fill={color}
        fillOpacity="0.5"
      />
      <circle cx="6.16675" cy="15" r="1.5" fill={color} fillOpacity="0.5" />
      <circle
        cx="16.6667"
        cy="10.3334"
        r="1.5"
        fill={color}
        fillOpacity="0.5"
      />
    </svg>
  );
}
