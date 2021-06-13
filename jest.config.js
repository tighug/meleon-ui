module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  moduleNameMapper: {
    "@components/(.*)": "<rootDir>/src/components/$1",
    "@themes/(.*)": "<rootDir>/src/themes/$1",
    "@systems/(.*)": "<rootDir>/src/systems/$1",
    "@utils/(.*)": "<rootDir>/src/utils/$1",
  },
};
