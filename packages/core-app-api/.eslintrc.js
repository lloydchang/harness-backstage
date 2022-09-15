module.exports = require('@harness/backstage-cli/config/eslint-factory')(
  __dirname,
  {
    rules: {
      'jest/expect-expect': 0,
    },
  },
);
