module.exports = {
  preset: 'jest-preset-angular',
  verbose: true,
  setupTestFrameworkScriptFile: '<rootDir>/setup-jest.ts',
  'moduleDirectories': [
    'node_modules',
    'src'
  ],
  globals: {
    'ts-jest': {
      'tsConfigFile': '<rootDir>/src/tsconfig.spec.json'
    },
    '__TRANSFORM_HTML__': true
  },
  testMatch: ['<rootDir>/src/**/*.spec.ts'],
  moduleFileExtensions: ['ts', 'js', 'html', 'json'],
  coverageDirectory: '<rootDir>/coverage',
  coverageThreshold: {
    'global': {
      'branches': 67,
      'functions': 65,
      'lines': 80,
      'statements': 80
    }
  },
  moduleNameMapper: {
    '@llecoop/(.*)$': '<rootDir>/src/@llecoop/$1',
    'config/(.*)$': '<rootDir>/src/config/$1',
    'app/(.*)$': '<rootDir>/src/app/$1'
  }
}
