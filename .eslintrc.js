module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'react-native', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-native/all',
    'prettier',
    '@react-native',
  ],
  rules: {
    // Add any additional ESLint rules or overrides here
    'react-native/no-inline-styles': 0,
    'react-native/sort-styles': 0,
    'react-native/no-color-literals': 0,
    'no-useless-escape': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/no-empty-function': 0,
    'no-empty': 0,
    '@typescript-eslint/no-inferrable-types': 0,
    'react-native/split-platform-components': 0,
    'prettier/prettier': 0,
    '@typescript-eslint/no-var-requires': 0,
    'react-native/no-raw-text': 0,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
