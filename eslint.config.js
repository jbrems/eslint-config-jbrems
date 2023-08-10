import js from '@eslint/js';
import typescriptEslintParser from '@typescript-eslint/parser';
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
      quotes: ['error', 'single'],
      'array-bracket-spacing': ['error', 'never'],
      'object-curly-spacing': ['error', 'always'],
    },
  },
  // Typescript config
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: typescriptEslintParser,
      parserOptions: { project: ['./tsconfig.json'] },
    },
    plugins: { '@typescript-eslint': typescriptEslintPlugin },
    rules: {
      'no-dupe-class-members': 'off', // Needed for function overloading
      '@typescript-eslint/adjacent-overload-signatures': 'error',
      '@typescript-eslint/array-type': ['error', 'array'],
      '@typescript-eslint/await-thenable': 'error',
      '@typescript-eslint/ban-types': 'error',

      'no-unused-vars': 'off', // Needed for function overloading
      '@typescript-eslint/no-unused-vars': 'error',
    },
  },
];