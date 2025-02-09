// To configure eslint rules

// In this case, we want to ignore console logs

module.exports = [
  {
    ignores: ['node_modules', 'dist'],
  },
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      vue: require('eslint-plugin-vue'),
    },
    rules: {
      'no-console': 'warn',
      'vue/multi-word-component-names': 'off',
    },
  },
];