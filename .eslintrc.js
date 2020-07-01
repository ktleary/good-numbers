module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2020: true,
    mocha: true,
  },
  extends: ['airbnb-base', 'plugin:mocha/recommended'],
  plugins: ['mocha'],
  parserOptions: {
    ecmaVersion: 11,
  },
  rules: {
    semi: ['error', 'never'],
    'mocha/no-mocha-arrows': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'no-plusplus': 'off',
    'implicit-arrow-linebreak': 'off',
    'no-unused-vars': [
      'error',
      {
        varsIgnorePattern: 'describe|should|expect',
      },
    ],
  },
}
