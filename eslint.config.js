// eslint.config.js
import { FlatCompat } from '@eslint/eslintrc';
import parser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import drizzle from 'eslint-plugin-drizzle';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

export default [


  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      drizzle,
    },
    rules: {
      // TypeScript-specific rules
      '@typescript-eslint/array-type': 'off',
      '@typescript-eslint/consistent-type-definitions': 'off',
      '@typescript-eslint/consistent-type-imports': [
        'warn',
        { prefer: 'type-imports', fixStyle: 'inline-type-imports' },
      ],
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/require-await': 'off',
      '@typescript-eslint/no-misused-promises': [
        'error',
        { checksVoidReturn: { attributes: false } },
      ],

      // Drizzle ORM specific rules
      'drizzle/enforce-delete-with-where': [
        'error',
        { drizzleObjectName: ['db', 'ctx.db'] },
      ],
      'drizzle/enforce-update-with-where': [
        'error',
        { drizzleObjectName: ['db', 'ctx.db'] },
      ],
    },
  },

  // Global options
  {
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
  },
];
