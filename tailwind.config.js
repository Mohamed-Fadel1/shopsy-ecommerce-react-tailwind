/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode :"class",
  theme: {
    extend: {
      colors :{
        primary :"#fea92866",
        secondary :"#ed8900",
        colorDark:"#705227"
      }
    },
    container :{
      center : true,
      padding : {
        DEFAULT : "1rem",
        md:"3rem",
        sm :"2rem",
        lg :"4rem",
        xl :"5rem",
        "2xl":"6rem"

      }
    }
  },
  plugins: [],
}

