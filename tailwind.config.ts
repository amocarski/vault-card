import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "dp-4": "0px 3px 12px 0px rgba(0, 0, 0, 0.09)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "rgba(var(--border), 0.15)",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        "text-interactive": {
          disabled: "rgba(var(--text-interactive-disabled), 0.4)",
          error: "rgba(var(--text-interactive-error), 0.95)",
        },
        "border-interactive": {
          error: "rgba(var(--border-interactive-error), 0.65)",
          active: "rgba(var(--border-interactive-active), 0.65)",
        },
        text: {
          primary: "hsl(var(--text-primary))",
          secondary: "rgba(var(--text-secondary), 0.7)",
          body: "rgba(var(--text-body), 0.95)",
        },
        icon: {
          primary: "rgba(var(--icon-primary), 0.9)",
          secondary: "rgba(var(--icon-secondary), 0.6)",
        },
        "text-button": {
          primary: "hsl(var(--text-button-primary))",
          disabled: "rgba(var(--text-button-disabled), 0.5)",
        },
        bg: {
          primary: "rgba(var(--background-primary), 0.06)",
          interactive: {
            DEFAULT: "rgba(var(--background-interactive),0.03)",
            hover: "rgba(var(--background-interactive-hover), 0.08)",
            pressed: "rgba(var(--background-interactive-pressed), 0.1)",
          },
          button: {
            DEFAULT: "rgba(var(--background-button), 0.85)",
            hover: "rgba(var(--background-button-hover), 0.92)",
            disabled: "rgba(var(--background-button-disabled), 0.4)",
            progress: "rgba(var(--background-button-progress), 0.75)",
          },
        },
        constant: {
          dark: "hsl(var(--constant-dark))",
          gray: "hsl(var(--constant-gray))",
          valid: "hsl(var(--constant-color-valid))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        // morpho
        "corner-radius": "20px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
