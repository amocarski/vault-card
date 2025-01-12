import * as React from "react";

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

export default function ArrowUpRightIcon({
  size = 20,
  color = "rgba(25, 29, 32, 0.6)",
  className,
  ...props
}: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Arrow icon"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.17574 13.8243C6.41005 14.0586 6.78995 14.0586 7.02426 13.8243L12.8 8.04853V12.6C12.8 12.9314 13.0686 13.2 13.4 13.2C13.7314 13.2 14 12.9314 14 12.6V6.6C14 6.26863 13.7314 6 13.4 6H7.4C7.06863 6 6.8 6.26863 6.8 6.6C6.8 6.93137 7.06863 7.2 7.4 7.2H11.9515L6.17574 12.9757C5.94142 13.2101 5.94142 13.5899 6.17574 13.8243Z"
        fill={color}
      />
    </svg>
  );
}
