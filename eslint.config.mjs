import playwright from 'eslint-plugin-playwright';
import globals from 'globals';

export default [
  // Ignored files
  {
    ignores: [
      'node_modules',
      'dist',
      'playwright-report',
      'test-results'
    ]
  },
  // Base JS rules
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.browser
      }
    },
    plugins: {
      playwright
    },
    rules: {
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-console': 'off',
      'eqeqeq': 'error',
      'curly': 'error',
      'semi': ['warn', 'always'],
      'quotes': 'off'   // 🚫 ignore quote style
    }
  },
  // JSON override (also ignore quotes here)
  {
    files: ['**/*.json'],
    rules: {
      'quotes': 'off'
    }
  },
  // Playwright test rules
  {
    files: ['tests/**/*.js', '**/*.spec.js', '**/*.test.js'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.jest,
        test: 'readonly',
        expect: 'readonly'
      }
    },
    plugins: {
      playwright
    },
    rules: {
      ...playwright.configs.recommended.rules
    }
  }
];
