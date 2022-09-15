module.exports = require('@harness/backstage-cli/config/eslint-factory')(
  __dirname,
  {
    rules: {
      quotes: ['error', 'single'],
    },
  },
);
