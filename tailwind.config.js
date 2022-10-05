/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" }
        }
      },
      animation: {
        wiggle: "wiggle 200ms ease-in-out"
      },
      backgroundImage: {
        'logo': "url(https://images.squarespace-cdn.com/content/v1/5228e894e4b00447185d2c56/1392067384490-G4FCCY1TOY45IPU8DH51/pepsi.jpg)",
        'botst': "url(https://github.com/Jadentr44/Battle-of-the-shadow-tomb/raw/main/public/assets/create-screen.jpg)",
        "splash":"url(https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)"
      }
    },
  },
  plugins: [],
}
