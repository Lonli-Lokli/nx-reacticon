const nxPreset = require('@nrwl/jest/preset');

module.exports = {
  ...nxPreset,
  moduleNameMapper: {
    '\\.svg': '<rootDir>/../../testing/svgrMock.js',
  },
};
