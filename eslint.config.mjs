import nextPlugin from "@next/eslint-plugin-next";

const config = [
  {
    name: "next/core-web-vitals",
    plugins: {
      "@next/next": nextPlugin,
    },
    rules: {
      ...nextPlugin.configs["core-web-vitals"].rules,
    },
  },
  {
    ignores: [".next/**", "out/**"],
  },
];

export default config;
