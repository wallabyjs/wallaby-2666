module.exports = {
  collectCoverage: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFiles: ['<rootDir>/node_modules/dotenv/config.js'],
  testPathIgnorePatterns: ['<rootDir>/build/', '<rootDir>/node_modules/', '<rootDir>/src/api/v1/util.test.ts'],
  testTimeout: 120000,
};
