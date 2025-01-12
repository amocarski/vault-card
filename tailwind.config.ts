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
        border: "hsl(var(--border))",
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
          disabled: "hsl(var(--text-interactive-disabled))",
          error: "hsl(var(--text-interactive-error))",
        },
        "border-interactive": {
          error: "hsl(var(--border-interactive-error))",
          active: "hsl(var(--border-interactive-active))",
        },
        text: {
          primary: "hsl(var(--text-primary))",
          secondary: "hsl(var(--text-secondary))",
          body: "hsl(var(--text-body))",
        },
        icon: {
          primary: "hsl(var(--icon-primary))",
          secondary: "hsl(var(--icon-secondary))",
        },
        "text-button": {
          primary: "hsl(var(--text-button-primary))",
          disabled: "hsl(var(--text-button-disabled))",
        },
        bg: {
          primary: "hsl(var(--background-primary))",
          interactive: {
            DEFAULT: "hsl(var(--background-interactive))",
            hover: "hsl(var(--background-interactive-hover))",
            pressed: "hsl(var(--background-interactive-pressed))",
          },
          button: {
            DEFAULT: "hsl(var(--background-button))",
            hover: "hsl(var(--background-button-hover))",
            disabled: "hsl(var(--background-button-disabled))",
            progress: "hsl(var(--background-button-progress))",
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
