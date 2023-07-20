// import type {Config} from 'jest';

// const config: Config = {
//   roots: ['<rootDir>/src'],
//   collectCoverageFrom: [
//     '<rootDir>/src/**/*.{ts,tsx}'
//   ],
//   coverageDirectory: 'coverage',
//   testEnvironment: 'node',
//   transform: {
//     '.+\\.ts$': 'ts-jest'
//   }
// };

// export default config;

import type { Config } from 'jest';

const config: Config = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}'
  ],
  moduleNameMapper: {
    '^(.*)\\.js$': '$1',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jest-environment-node',
  transformIgnorePatterns: [
    'node_modules/(?!aggregate-error|clean-stack|escape-string-regexp|indent-string|p-map)',
  ],
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
};

export default config;