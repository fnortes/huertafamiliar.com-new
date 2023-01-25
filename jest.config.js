module.exports = {
  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,
  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: 'v8',
  // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/$1',
  },
  // A preset that is used as a base for Jest's configuration
  preset: 'ts-jest',
  // A list of paths to directories that Jest should use to search for files in
  roots: ['<rootDir>'],
  // A list of paths to modules that run some code to configure or set up the testing framework before each test
  setupFilesAfterEnv: ['<rootDir>/jest/jest-setup.ts'],
  // The test environment that will be used for testing
  testEnvironment: 'jsdom',
  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  testPathIgnorePatterns: ['<rootDir>/cypress/', '<rootDir>/.next/', '<rootDir>/node_modules/'],
  // A map from regular expressions to paths to transformers
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      // required due to custom location of tsconfig.json configuration file
      // https://kulshekhar.github.io/ts-jest/docs/getting-started/options/tsconfig
      { tsconfig: './jest/tsconfig.json' },
    ],
  },
}
