module.exports = {
  // testEnvironment: 'node',
  // preset: 'react-native',
  // moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  // setupFiles: ['./jestSetup.js', '<rootDir>/node_modules/react-native/jest/setup.js'],
  // moduleNameMapper: {
  //   '^React$': '<rootDir>/node_modules/react',
  //   '^[./a-zA-Z0-9$_-]+\\.(bmp|gif|jpg|jpeg|png|psd|svg|webp|ttf|otf)$': 'RelativeImageStub',
  // },
  // transform: {
  //   '^.+\\.js$': 'babel-jest',
  //   '^[./a-zA-Z0-9$_-]+\\.(bmp|gif|jpg|jpeg|png|psd|svg|webp)$': './mediaFileTransformer.js',
  //   '\\.(ts|tsx)$': '<rootDir>/node_modules/ts-jest/preprocessor.js',
  // },
  // modulePathIgnorePatterns: [
  //   '<rootDir>/node_modules/react-native/Libraries/react-native/',
  //   '<rootDir>/node_modules/react-native/packager/',
  // ],
  // // transformIgnorePatterns: ['node_modules/(?!(jest-)?react-native|react-clone-referenced-element)'],
  // transformIgnorePatterns: [
  //   'node_modules/(?!(jest-)?react-native|react-native|react-navigation|@react-navigation|@storybook|@react-native-community)',
  // ],
  testEnvironment: 'node',
  preset: 'react-native',
  moduleNameMapper: {
    '^[./a-zA-Z0-9$_-]+\\.(bmp|gif|jpg|jpeg|png|psd|svg|webp|ttf|otf)$': 'RelativeImageStub',
    '^React$': '<rootDir>/node_modules/react',
  },
  setupFiles: ['<rootDir>/node_modules/react-native/jest/setup.js', './jestSetup.js'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  // transform: {
  //   // '^.+\\.(js)$': '<rootDir>/node_modules/babel-jest',
  //   // '\\.(ts|tsx)$': '<rootDir>/node_modules/ts-jest/preprocessor.js',
  //   '^[./a-zA-Z0-9$_-]+\\.(bmp|gif|jpg|jpeg|png|psd|svg|webp)$': './mediaFileTransformer.js',
  // },
  // testRegex: '(/tests/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  testPathIgnorePatterns: ['\\.snap$', '/node_modules/'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|react-native|react-navigation|@react-navigation|@storybook|@react-native-community)',
  ],
  // cacheDirectory: '.jest/cache',
};
