/**
 * @type {import('jest').Config}
 */
const config = {
  testEnvironment: "jsdom",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": "babel-jest"
  },
};

module.exports = config;
