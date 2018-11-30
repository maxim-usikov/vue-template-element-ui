module.exports = {
  root: true,

  env: {
    node: true,
    // TODO: temp solution.
    jest: true,
  },

  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2018,
    sourceType: 'module',
  },

  extends: ['plugin:vue/recommended', '@vue/airbnb', '@vue/prettier'],

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/prop-name-casing': 'error',
    'vue/html-closing-bracket-spacing': 'error',
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'always',
      },
    ],
    quotes: ['error', 'single', { avoidEscape: true }],
  },
};
