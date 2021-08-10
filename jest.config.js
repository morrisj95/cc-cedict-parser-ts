const config = {
  moduleFileExtensions: ["js", "jsx", "json", "ts", "tsx"],
  collectCoverage: true,
  collectCoverageFrom: [
    "**/*.(t|j)s",
    "!*/node_modules/**",
    "!**/build/**",
    "!**/dist/**",
    "!**/coverage/**",
    "!jest.config.js",
    "!testData.ts"
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  coverageReporters: ["text", "text-summary"],
  testMatch: ["**/test/**/*.test.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
  testPathIgnorePatterns: ["/node_modules/", "/dist/", "/build/", "/coverage/"],
  roots: ["<rootDir>"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
};

module.exports = config;
