import js from '@eslint/js';
import typescriptEslintParser from "@typescript-eslint/parser";
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';

export default [
  // Extend recommended rules
  js.configs.recommended,
  // General config
  {
    languageOptions: {
      ecmaVersion: 2023,
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    rules: {
      semi: 'error',
      'comma-dangle': ['error', 'always-multiline'],
      'no-trailing-spaces': 'error',
      indent: ['error', 2],
      'space-before-function-paren': 'error',
    },
  },
  // Typescript config
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: typescriptEslintParser,
      parserOptions: { project: ["./tsconfig.json"] },
    },
    plugins: { '@typescript-eslint': typescriptEslintPlugin },
    rules: {
      ...typescriptEslintPlugin.configs.recommended.rules,
    },
  },
];