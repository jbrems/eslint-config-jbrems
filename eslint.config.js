import jsdoc from 'eslint-plugin-jsdoc'

export default {
  plugins: {
    jsdoc,
  },
  rules: {
    semi: ['error', 'never'],
    'comma-dangle': ['error', 'always-multiline'],
    'no-trailing-spaces': 'error',
    indent: ['error', 2],
    quotes: ['error', 'single'],
    'array-bracket-spacing': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'jsdoc/check-alignment': 'error',
    'jsdoc/check-indentation': 'error',
    'jsdoc/require-hyphen-before-param-description': 'error',
  },
}