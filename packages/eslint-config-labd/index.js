const path = require('path')

module.exports = {
  root: true,
  // We default to the typescript parser
  parser: '@typescript-eslint/parser',
  extends: ['plugin:prettier/recommended', 'plugin:react/recommended', 'plugins: '],
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  parserOptions: {
    project: path.resolve('tsconfig.json'),
    ecmaVersion: 11,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    warnOnUnsupportedTypeScriptVersion: true,
  },
  settings: {
    react: {
        version: 'detect'
    },
    'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx']
    }
  }
  rules: {
    'import/named': 1,
    'import/order': [
        'error',
        [
            'newlines-between': 'always'
            groups: [['builtin', 'external'], 'internal', ['parent', 'sibling', 'index']]
        ]
    ]
  }
}
