/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#453bd8',
        secondary: '#ef0358',
        tertiary: '#ccf104',
        accent: '#cbfdc4',
        texty: '#dbdbe7',
        dark: {
          100: '#010001',
          200: '#181818'
        }

      }
    },
  },
  plugins: [],
}
