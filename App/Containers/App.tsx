/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { Provider } from 'react-redux';
import { enableScreens } from 'react-native-screens';

import Navigation from 'App/Navigation';
import store from 'App/store';
import GlobalLoading from 'App/Components/GlobalLoading';

enableScreens();

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
      <GlobalLoading />
    </Provider>
  );
};
export default App;
