const path = require('path')

module.exports = {
  root: true,
  // We default to the typescript parser
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: path.resolve('tsconfig.json'),
    ecmaVersion: 11,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    warnOnUnsupportedTypeScriptVersion: true,
  },
  extends: [
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },

  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        directory: './tsconfig.json',
      },
    },
  },
  rules: {
    'import/default': 0,
    'import/named': 'warn',
    'react/require-render-return': 'error',
    'react-hooks/rules-of-hooks': 'error',
  },
}
