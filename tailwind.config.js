/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'logo': "url(https://images.squarespace-cdn.com/content/v1/5228e894e4b00447185d2c56/1392067384490-G4FCCY1TOY45IPU8DH51/pepsi.jpg)",
        'botst': "url(https://github.com/Jadentr44/Battle-of-the-shadow-tomb/raw/main/public/assets/home-screen.jpg)",
      }
    },
  },
  plugins: [],
}
