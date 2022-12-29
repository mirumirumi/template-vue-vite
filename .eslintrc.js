/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  globals: {
    defineProps: "readonly",
    defineEmits: "readonly",
    defineExpose: "readonly",
    withDefaults: "readonly",
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/eslint-config-typescript",
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "no-console": import.meta.env.DEV ? "warn" : "off",
    "no-debugger": import.meta.env.DEV ? "warn" : "off",
    "no-useless-escape": 0,
    "no-irregular-whitespace": 0,
    "@typescript-eslint/no-extra-semi": 0,
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/no-non-null-assertion": 0,
  }
}
