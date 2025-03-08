import js from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting';
import prettierConfig from 'eslint-config-prettier';
import pluginPrettier from 'eslint-plugin-prettier';

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{js,mjs,jsx,vue}'],
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },

  js.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  skipFormatting,
  prettierConfig,
  {
    // Add Prettier plugin rules
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      'prettier/prettier': [
        'error',
        {
          singleQuote: true, // Use single quotes
          semi: true, // No semicolons
          trailingComma: 'es5', // Add trailing commas where valid in ES5
          printWidth: 80, // Wrap code at 80 characters
          tabWidth: 2, // Use 2 spaces for indentation
          useTabs: false, // Use spaces instead of tabs
          endOfLine: 'auto', // Auto-detect line endings
        },
      ],
    },
  },
];
