module.exports = {
  root: true,
  extends: ['@antfu'],
  ignorePatterns: ['dist', 'node_modules', '.next', '.cache'],
  settings: {
    next: {
      rootDir: ['apps/*/'],
    },
  },
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
    'no-console': 'off',
  },
}
