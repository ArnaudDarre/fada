module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true
  },
  'parser': '@babel/eslint-parser',
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:storybook/recommended'
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 12,
    'sourceType': 'module'
  },
  'plugins': [
    'react'
  ],
  'rules': {
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'never'
    ],
    'eol-last': [
      'error',
      'always'
    ],
    'no-multiple-empty-lines': [
      'error',
      {
        'max': 2
      }
    ],
    'comma-dangle': [
      'error',
      'never'
    ],
    'no-trailing-spaces': [
      'error',
      {
        'skipBlankLines': false
      }
    ]
  }
}
