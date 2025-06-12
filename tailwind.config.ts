// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        neonPink: '#ff00ff',
        neonBlue: '#00ffff',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      fontFamily: {
        retro: ['"Orbitron"', 'sans-serif'],
      },
      keyframes: {
        neonPulse: {
          '0%, 100%': {
            color: '#ffffff',
            textShadow:
              '0 0 5px #ff00ff, 0 0 10px #ff00ff, 0 0 20px #ff00ff',
          },
          '50%': {
            color: '#ffbbff',
            textShadow:
              '0 0 2px #ff00ff, 0 0 5px #ff00ff, 0 0 10px #ff00ff',
          },
        },
      },
      animation: {
        'neon-pulse': 'neonPulse 2.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
export default config
