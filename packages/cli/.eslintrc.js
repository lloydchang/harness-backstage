module.exports = require('@harness/backstage-cli/config/eslint-factory')(
  __dirname,
  {
    ignorePatterns: ['templates/**'],
    rules: {
      'no-console': 0,
    },
  },
);
