/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: '#04070d',
          card: '#0a0f18',
          border: 'rgba(0, 255, 102, 0.15)',
          'border-bright': 'rgba(0, 255, 102, 0.4)',
          green: {
            DEFAULT: '#00ff66',
            glow: '#05df72',
            dim: '#00cc52',
            dark: '#033314',
          },
          cyan: {
            DEFAULT: '#00f0ff',
            glow: '#38bdf8',
            dim: '#0284c7',
            dark: '#042838',
          },
          purple: {
            DEFAULT: '#a855f7',
            glow: '#c084fc',
            dark: '#2e1065',
          },
          text: {
            primary: '#e6edf3',
            secondary: '#8b949e',
            muted: '#484f58',
          }
        }
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Fira Code"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
        sans: ['"Inter"', '"Space Grotesk"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'neon-green': '0 0 20px rgba(0, 255, 102, 0.35), 0 0 40px rgba(0, 255, 102, 0.15)',
        'neon-cyan': '0 0 20px rgba(0, 240, 255, 0.35), 0 0 40px rgba(0, 240, 255, 0.15)',
        'terminal': '0 10px 40px -10px rgba(0, 0, 0, 0.8), 0 0 25px rgba(0, 255, 102, 0.12)',
        'cyber-card': '0 8px 30px rgba(0, 0, 0, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scanline': 'scanline 8s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        },
        glow: {
          '0%': { filter: 'drop-shadow(0 0 4px rgba(0,255,102,0.4))' },
          '100%': { filter: 'drop-shadow(0 0 12px rgba(0,255,102,0.8))' },
        }
      }
    },
  },
  plugins: [],
};
