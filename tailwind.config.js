module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8', // Blue
        secondary: '#9333EA', // Purple
        accent: '#F59E0B', // Amber
        background: '#F3F4F6', // Light Gray
        surface: '#FFFFFF', // White
        error: '#EF4444', // Red
        onPrimary: '#FFFFFF',
        onSecondary: '#FFFFFF',
        onBackground: '#111827', // Dark Gray
        onSurface: '#111827',
        onError: '#FFFFFF',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
};