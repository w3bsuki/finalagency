import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");
const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");
const colors = require("tailwindcss/colors");

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}

const config = {
    darkMode: ["class"],
    content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
  	container: {
  		center: true,
  		padding: "2rem",
  		screens: {
  			"2xl": "1400px",
  		},
  	},
  	extend: {
  		fontFamily: {
  			sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans],
  		},
  		colors: {
  			border: "hsl(var(--border))",
  			input: "hsl(var(--input))",
  			ring: "hsl(var(--ring))",
  			background: "hsl(var(--background))",
  			foreground: "hsl(var(--foreground))",
  			primary: {
  				DEFAULT: "hsl(var(--primary))",
  				foreground: "hsl(var(--primary-foreground))",
  			},
  			secondary: {
  				DEFAULT: "hsl(var(--secondary))",
  				foreground: "hsl(var(--secondary-foreground))",
  			},
  			destructive: {
  				DEFAULT: "hsl(var(--destructive))",
  				foreground: "hsl(var(--destructive-foreground))",
  			},
  			muted: {
  				DEFAULT: "hsl(var(--muted))",
  				foreground: "hsl(var(--muted-foreground))",
  			},
  			accent: {
  				DEFAULT: "hsl(var(--accent))",
  				foreground: "hsl(var(--accent-foreground))",
  			},
  			popover: {
  				DEFAULT: "hsl(var(--popover))",
  				foreground: "hsl(var(--popover-foreground))",
  			},
  			card: {
  				DEFAULT: "hsl(var(--card))",
  				foreground: "hsl(var(--card-foreground))",
  			},
        slate: colors.slate,
        gray: colors.gray,
        zinc: colors.zinc,
        neutral: colors.neutral,
        stone: colors.stone,
        red: colors.red,
        orange: colors.orange,
        amber: colors.amber,
        yellow: colors.yellow,
        lime: colors.lime,
        green: colors.green,
        emerald: colors.emerald,
        teal: colors.teal,
        cyan: colors.cyan,
        sky: colors.sky,
        blue: colors.blue,
        indigo: colors.indigo,
        violet: colors.violet,
        purple: colors.purple,
        fuchsia: colors.fuchsia,
        pink: colors.pink,
        rose: colors.rose,
  			"color-1": "hsl(var(--color-1))",
  			"color-2": "hsl(var(--color-2))",
  			"color-3": "hsl(var(--color-3))",
  			"color-4": "hsl(var(--color-4))",
  			"color-5": "hsl(var(--color-5))",
  		},
  		borderRadius: {
  			lg: "var(--radius)",
  			md: "calc(var(--radius) - 2px)",
  			sm: "calc(var(--radius) - 4px)",
  		},
  		keyframes: {
  			"accordion-down": {
  				from: { height: "0" },
  				to: { height: "var(--radix-accordion-content-height)" },
  			},
  			"accordion-up": {
  				from: { height: "var(--radix-accordion-content-height)" },
  				to: { height: "0" },
  			},
  			pulse: {
  				'0%, 100%': { opacity: '0.4' },
  				'50%': { opacity: '0.2' }
  			},
  			shimmer: {
  				'0%': { backgroundPosition: '100% 0' },
  				'100%': { backgroundPosition: '-100% 0' }
  			},
        shine: {
          "0%": { backgroundPosition: "150% 50%" },
          "100%": { backgroundPosition: "-50% 50%" }
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        rainbow: {
          "0%": { "background-position": "0%" },
          "100%": { "background-position": "200%" }
        },
  		},
  		animation: {
  			"accordion-down": "accordion-down 0.2s ease-out",
  			"accordion-up": "accordion-up 0.2s ease-out",
  			pulse: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  			shimmer: 'shimmer 2s linear infinite',
        shine: "shine var(--duration) linear infinite",
        fadeIn: "fadeIn 0.5s ease-out forwards",
        rainbow: "rainbow var(--speed, 2s) infinite linear",
  		},
      backgroundSize: {
        "shine-size": "200% 100%"
      },
      variables: {
        "--color-1": "217 91% 60%",  // Blue
        "--color-2": "271 91% 65%",  // Purple
        "--color-3": "156 72% 67%",  // Green
        "--color-4": "1 91% 71%",    // Red
        "--color-5": "41 91% 68%",   // Yellow
      },
  	}
  },
  plugins: [addVariablesForColors, require("tailwindcss-animate")],
} satisfies Config;

export default config;
