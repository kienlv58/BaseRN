module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  extends: [
    '@react-native-community',
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:react-native/all',
    'plugin:jsx-a11y/strict',
    'plugin:lodash/recommended',
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from @typescript-eslint/eslint-plugin
  ],
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    '@typescript-eslint/indent': ['off', 2],
    '@typescript-eslint/explicit-member-accessibility': ['off'],
    '@typescript-eslint/no-var-requires': 'off',
    'import/named': 'warn', // This rule should be removed after @typescript-eslint/parser fix
    'import/newline-after-import': 'error',
    'import/no-unresolved': 'off', // Let typescript decide whether a module path is resolved
    'import/order': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-use-before-define': 'off',
    indent: 'off',
    'no-console': 'warn',
    'lodash/import-scope': 'off',
    'lodash/prefer-noop': 'off',
    'react/display-name': 'off',
    'react/jsx-max-depth': ['error', { max: 6 }],
    'max-lines': ['error', { max: 300, skipBlankLines: true, skipComments: true }],
    'max-lines-per-function': ['error', { max: 50 }],
    'react/jsx-no-bind': 'error',
    'react-native/no-raw-text': 'off',
    'react/jsx-no-bind': 'off',
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
};
