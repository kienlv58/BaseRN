const { has } = require('lodash');

module.exports = api => {
  if (has(api, 'cache')) {
    api.cache(true);
  }
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            App: './App',
          },
        },
      ],
    ],
  };
};
