/**
 * Theme configuration for the application
 * Centralizes all design tokens including colors, spacing, typography, and breakpoints
 */

export const theme = {
  colors: {
    // Background colors
    background: {
      primary: "#1a1a1a",
      secondary: "#2a2a2a",
      white: "#ffffff",
      light: "#f5f5f5",
    },
    // Text colors
    text: {
      primary: "#ffffff",
      secondary: "#2a2a2a",
      muted: "#9e9e9e",
    },
    // Status colors
    status: {
      live: "#ffd700", // Yellow for live matches
      cancelled: "#ff4444", // Red for cancelled matches
      finished: "#4caf50", // Green for finished/half-time matches
      default: "#9e9e9e", // Gray for default/pre-match
    },
    // Border colors
    border: {
      light: "#e0e0e0",
      dark: "#4a4a4a",
    },
    // Progress indicator
    progress: {
      fill: "#4caf50",
    },
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    xxl: "48px",
  },
  borderRadius: {
    sm: "4px",
    md: "8px",
  },
  typography: {
    fontFamily: "var(--font-barlow), sans-serif",
    fontSize: {
      xs: "12px",
      sm: "14px",
      base: "16px",
      lg: "18px",
      xl: "32px",
      "2xl": "36px",
      "3xl": "48px",
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    letterSpacing: {
      tight: "0.5px",
      normal: "2px",
    },
  },
  breakpoints: {
    mobile: "768px",
    tablet: "968px",
  },
} as const;

export type Theme = typeof theme;
