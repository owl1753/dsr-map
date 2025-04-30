import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";
import solid from "eslint-plugin-solid/configs/typescript";
import eslintConfigPrettier from "eslint-config-prettier/flat";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    ...solid,
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  },
  tseslint.configs.recommended,
  eslintConfigPrettier
]);
