module.exports = {
  testEnvironment: 'node',
  preset: 'react-native',
  // moduleNameMapper: {
  //   '^[./a-zA-Z0-9$_-]+\\.(bmp|gif|jpg|jpeg|png|psd|svg|webp|ttf|otf)$': 'RelativeImageStub',
  //   '^React$': '<rootDir>/node_modules/react',
  // },
  setupFiles: ['<rootDir>/node_modules/react-native/jest/setup.js', './__tests__/jestSetup.js'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    // '^.+\\.(js)$': 'babel-jest',
    // '\\.(ts|tsx)$': 'ts-jest',
    // '^.+\\.tsx?$': 'ts-jest',
    // '^[./a-zA-Z0-9$_-]+\\.(bmp|gif|jpg|jpeg|png|psd|svg|webp)$': './mediaFileTransformer.js',
  },
  testRegex: '(/tests/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  testPathIgnorePatterns: ['\\.snap$', '/node_modules/'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|react-native|react-navigation|@react-navigation|@storybook|@react-native-community)',
  ],
  setupFilesAfterEnv: ['<rootDir>setup-tests.js'],
  // cacheDirectory: '.jest/cache',
};
