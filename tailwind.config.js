module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  // These paths are just examples, customize them to match your project structure
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0 4px 4px hsl(0deg 0% 4% / 30%)",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": {
            transform: "rotate(-3deg)",
          },
          "50%": {
            transform: "rotate(3deg)",
          },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out ",
        bounceOneTime: "bounce 0.9s  ",
      },
    },
  },
  plugins: [],
};
