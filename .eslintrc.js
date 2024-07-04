module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: ['expo', 'eslint:recommended', 'plugin:prettier'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['react', 'prettier'],
  rules: {
    'no-unused-vars': 'off',
    'prettier/prettier': [
      'error',
      {
        semi: false,
        tabWidth: 2,
        printWidth: 80,
        singleQuote: true,
        trailingComma: 'none',
        jsxBracketSameLine: true
      }
    ]
  }
}
