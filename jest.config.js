module.exports = {
    roots: [
        "<rootDir>/src"
    ],
    collectCoverageFrom: [
        "src/**/*.{js,jsx,ts,tsx}",
        "!src/**/*.d.ts"
    ],
    setupFiles: [
        "react-app-polyfill/jsdom"
    ],
    setupFilesAfterEnv: [
        "<rootDir>/src/setupTests.ts"
    ],
    testMatch: [
        "<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}",
        "<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}"
    ],
    testEnvironment: "jest-environment-jsdom-fourteen",
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
        "^.+\\.css$": "<rootDir>/config/jest/cssTransform.js",
        "^(?!.*\\.(js|jsx|ts|tsx|css|json)$)": "<rootDir>/config/jest/fileTransform.js"
    },
    transformIgnorePatterns: [
        "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$",
        "^.+\\.module\\.(css|sass|scss)$"
    ],
    modulePaths: [],
    moduleFileExtensions: [
        // "web.js",
        "js",
        // "web.ts",
        "ts",
        // "web.tsx",
        "tsx",
        // "json",
        // "web.jsx",
        // "jsx",
        // "node",
        // "src/**/*.js",
        // "src/**/*.jsx",
        // "src/**/*.ts",
        // "src/**/*.tsx"
    ],
    watchPlugins: [
        "jest-watch-typeahead/filename",
        "jest-watch-typeahead/testname"
    ],
    moduleDirectories: ['src', 'node_modules'],
    coverageDirectory: './coverage/',
};
