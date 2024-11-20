const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  // projects: [
  //   {
  //     displayName: 'client',
  //     testEnvironment: 'jsdom',
  //     testMatch: ['**/__tests__/client/**/*.[jt]s?(x)'],
  //     setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  //     moduleNameMapper: {
  //       '^@/(.*)$': '<rootDir>/src/$1',
  //     },
  //   },
  //   {
  //     displayName: 'server',
  //     testEnvironment: 'node',
  //     testMatch: ['**/__tests__/server/**/*.[jt]s?(x)'],
  //     setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  //     moduleNameMapper: {
  //       '^@/(.*)$': '<rootDir>/src/$1',
  //     },
  //   },
  // ],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom',
};

module.exports = createJestConfig(customJestConfig);
