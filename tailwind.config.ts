import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // neutral text scale — off-white at the light end, near-black at the dark end
        ink: {
          50: "#F6F5F3",
          100: "#EAE8E4",
          200: "#D3D0CA",
          300: "#B3AFA8",
          400: "#918D86",
          500: "#726E68",
          600: "#57534E",
          700: "#403D3A",
          800: "#2B2926",
          900: "#1C1A18",
          950: "#121110",
        },
        // medium-dark charcoal/slate surfaces — the site's base, not near-black
        surface: {
          950: "#16171A",
          900: "#1C1E22",
          800: "#212429",
          700: "#282B31",
          600: "#32363D",
          500: "#3E4249",
          border: "#34383F",
          borderStrong: "#454951",
        },
        // brand red, sampled from the logo mark (#DA2E2A)
        brand: {
          50: "#FDECEB",
          100: "#FBD5D2",
          300: "#E8756C",
          400: "#E14B41",
          500: "#DA2E2A",
          600: "#B92420",
          700: "#8F1B18",
          glow: "rgba(218,46,42,0.35)",
        },
      },
      fontFamily: {
        sans: ["var(--font-vazirmatn)", "Tahoma", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1280px",
      },
      backgroundImage: {
        "grid-fade":
          "radial-gradient(65% 55% at 100% 0%, rgba(218,46,42,0.16), transparent 70%)",
        "grid-fade-soft":
          "radial-gradient(50% 60% at 0% 0%, rgba(218,46,42,0.08), transparent 70%)",
        "dot-grid":
          "radial-gradient(rgba(246,245,243,0.09) 1px, transparent 1px)",
        "line-grid":
          "linear-gradient(rgba(246,245,243,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(246,245,243,0.05) 1px, transparent 1px)",
      },
      backgroundSize: {
        "dot-grid": "22px 22px",
        "line-grid": "48px 48px",
      },
      boxShadow: {
        panel: "0 12px 40px -12px rgba(0,0,0,0.5)",
        card: "0 8px 28px -10px rgba(0,0,0,0.45)",
        "glow-red": "0 0 0 1px rgba(218,46,42,0.18), 0 12px 32px -8px rgba(218,46,42,0.28)",
        "glow-red-lg": "0 0 0 1px rgba(218,46,42,0.28), 0 20px 48px -10px rgba(218,46,42,0.4)",
      },
    },
  },
  plugins: [],
};

export default config;
