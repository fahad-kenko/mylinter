module.exports = {
  extends: ['airbnb-base', 'prettier'],
  parser: 'babel-eslint',
  plugins: ['prettier'],
  rules: {
    'linebreak-style': [
      'error',
      process.platform === 'win32' ? 'windows' : 'unix',
    ],
    'prettier/prettier': 'error',
    'no-underscore-dangle': 0,
    'max-len': ['error', { code: 120 }],
    'radix': ['error', 'as-needed'],
    // camelcase: 'off',
  },
};
