module.exports = {
  preset: "@shelf/jest-mongodb",
  testEnvironment: "node",
  transform: {
    "^.+\\.ts$": "ts-jest",
    "^.+\\.(js|jsx)$": "<rootDir>/node_modules/babel-jest",
  },
  verbose: true,
  setupFilesAfterEnv: ["./setupTests.js"],
};
