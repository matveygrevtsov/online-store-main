const eslintPluginReact = require('eslint-plugin-react');
const eslintConfigLove = require('eslint-config-love');
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');

module.exports = [
  eslintPluginReact.configs.flat.recommended,
  eslintConfigLove,
  {
    files: ['src/**/*.{js,ts,jsx,tsx}'],
    ignores: ['src/global.d.ts'],
    // https://eslint.org/docs/latest/use/configure/rules
    rules: {
      'no-alert': 'error',
      '@typescript-eslint/consistent-type-imports': 'off',
      '@typescript-eslint/consistent-type-assertions': 'off',
      '@typescript-eslint/no-invalid-void-type': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/strict-boolean-expressions': 'off',
      '@typescript-eslint/return-await': 'off',
      '@typescript-eslint/promise-function-async': 'off',
      '@typescript-eslint/array-type': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-floating-promises': 'off',
      'no-useless-return': 'off',
      '@typescript-eslint/no-confusing-void-expression': 'off',
      '@typescript-eslint/non-nullable-type-assertion-style': 'off',
      '@typescript-eslint/no-var-requires': 'off',
    },
  },
  eslintPluginPrettierRecommended,
];
