import tailwind_animate from 'tailwindcss-animate'
import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "animation": {
        "flip-x": "flip-x 1s ease-out",
        "zoom-in": "zoom-in 0.6s ease-out"
      },
      keyframes: {
        "flip-x": {
          "0%": {
            "transform": "scaleX(1)"
          },
          "50%": {
            "transform": "scaleX(-1)"
          },
          "100%": {
            "transform": "scaleX(1)"
          }
        },
        "zoom-in": {
          "0%": {
            "opacity": "0",
            "transform": "scale(.5)"
          },
          "100%": {
            "opacity": "1",
            "transform": "scale(1)"
          }
        }
      },
      transitionTimingFunction: {
        'in-out-expo': 'cubic-bezier(0.94, 0.14, 0, 0.74)'
      },
      transitionDuration: {
        '2000': '2000ms', 
        '3000': '3000ms', 
        '4000': '4000ms', 
        '5000': '5000ms', 
      },
    },
  },
  plugins: [
    daisyui, 
    tailwind_animate
  ],
}
