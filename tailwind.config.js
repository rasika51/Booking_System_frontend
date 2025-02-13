module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure Tailwind scans all relevant files
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#A7F3D0',  // Light green
          DEFAULT: '#10B981', // Main green (default)
          dark: '#047857',    // Dark green
        },
        secondary: '#F0FDF4',   // Background green
        accent: '#34D399',      // Accent green (for buttons, highlights, etc.)
      },
      spacing: {
        'h1-small': '0.5rem',  // Custom margin for small screens
        'h1-medium': '2rem',   // Custom margin for medium screens
        'h1-large': '3rem',    // Custom margin for large screens
      },
    },
  },
  plugins: [],
};
