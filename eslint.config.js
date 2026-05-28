import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    files: ["public/**/*.js"],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "script",
      globals: {
        document: "readonly",
        window: "readonly"
      }
    }
  }
];
