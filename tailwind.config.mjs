/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,ts}", "./public/scripts/**/*.js"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        "bg-deep": "var(--bg-deep)",
        paper: "var(--paper)",
        "paper-strong": "var(--paper-strong)",
        ink: "var(--ink)",
        "ink-soft": "var(--ink-soft)",
        muted: "var(--muted)",
        line: "var(--line)",
        "line-strong": "var(--line-strong)",
        accent: "var(--accent)",
        "accent-strong": "var(--accent-strong)",
        "accent-soft": "var(--accent-soft)",
      },
      boxShadow: {
        site: "var(--shadow)",
      },
      fontFamily: {
        body: [
          "Avenir Next",
          "Segoe UI",
          "PingFang SC",
          "Hiragino Sans GB",
          "Microsoft YaHei",
          "sans-serif",
        ],
        display: ["Iowan Old Style", "Palatino Linotype", "Book Antiqua", "Georgia", "serif"],
      },
      transitionTimingFunction: {
        site: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      transitionDuration: {
        theme: "4800ms",
      },
    },
  },
  plugins: [],
};
