/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        white: '#ffffff',
        black: '#000000',
        primary: '#1b1b1b',
        secondary: ' #242424',
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#E5E7EB',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#475569',
          700: '#334155',
          800: '#1f2937',
          900: '#0f172a'
        },
        blue: {
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a'
        },
        red: {
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b'
        },
        green: {
          100: '#DEF7EC',
          200: '#99f6e4',
          300: '#5eead4',
          500: '#10b981',
          600: '#16a34a',
          700: '#046C4E'
        },
      }
    },
  },
  plugins: [],
}
