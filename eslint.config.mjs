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
  // Base JS rules (works for both import/export and require)
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        ...globals.node,     // Node.js globals
        ...globals.browser   // Browser globals (if needed)
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
      'quotes': ['warn', 'single']
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
        ...globals.jest, // for test globals if needed
        test: 'readonly',
        expect: 'readonly'
      }
    },
    plugins: {
      playwright
    },
    rules: {
      ...playwright.configs.recommended.rules // Only copy rules, not env
    }
  }
];
