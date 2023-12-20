import type { JestConfigWithTsJest } from 'ts-jest'

const jestConfig: JestConfigWithTsJest = {
  roots: ['<rootDir>/src'],
  preset: 'ts-jest',
  verbose: true,
  resetMocks: true,
  testEnvironment: 'jsdom',
  moduleDirectories: ['node_modules', 'src'],
  moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx'],
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  collectCoverage: true,
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.+\\.(svg|css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
  },
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.module.{ts,tsx}',
    '!src/hooks/**/index.ts',
    '!src/main.tsx',
    '!src/**/*.stories.tsx',
    '!src/vite-env.d.ts',
    '!src/mockers/**',
    '!src/assets/**',
    '!src/constants/**',
    '!src/mocks/**',
    '!src/themes/**',
    '!src/utils/testUtils.tsx',
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  moduleNameMapper: {
    '^@mocks(.*)$': '<rootDir>src/mocks/$1',
    '^@constants(.*)$': '<rootDir>src/constants/$1',
    '^@assets(.*)$': '<rootDir>src/assets/$1',
    '^@components(.*)$': '<rootDir>src/components/$1',
    '^@helpers(.*)$': '<rootDir>src/helpers/$1',
    '^@contexts(.*)$': '<rootDir>src/contexts/$1',
    '^@hooks(.*)$': '<rootDir>src/hooks/$1',
    '^@services(.*)$': '<rootDir>src/services/$1',
    '^@pages(.*)$': '<rootDir>src/pages/$1',
    '^@layouts(.*)$': '<rootDir>src/layouts/$1',
    '^@routes(.*)$': '<rootDir>src/routes/$1',
    '^@types(.*)$': '<rootDir>src/types/$1',
    '^@themes(.*)$': '<rootDir>src/themes/$1',
    '^@stores(.*)$': '<rootDir>src/stores/$1',
    '^@utils(.*)$': '<rootDir>src/utils/$1',
  },
}

export default jestConfig
