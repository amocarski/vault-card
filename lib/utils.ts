import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatAddress = (address: string | null | undefined): string => {
  if (!address) return "";

  return `${address.slice(0, 5)}...${address.slice(-5)}`;
};

export const formatUSD = (
  value: number | string | null | undefined
): string => {
  if (!value) return "$0";

  const num = Number(value);

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    notation: "compact",
    maximumFractionDigits: 2,
  });

  return formatter.format(num);
};

export const formatPercentage = (
  value: number | string | null | undefined
): string => {
  if (!value) return "0%";

  const num = Number(value) * 100;

  const formatter = new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  });

  return `${formatter.format(num)}%`;
};

export const getExplorerUrl = (chainId: string, address: string): string => {
  const explorers: Record<string, string> = {
    "1": "https://etherscan.io",
    "8453": "https://basescan.org",
  };

  const baseUrl = explorers[chainId] || explorers["1"];
  return `${baseUrl}/address/${address}`;
};
