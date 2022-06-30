import React from 'react';
import 'react-native-gesture-handler';
import {ThemeProvider} from 'ui';
import FlashMessage from 'react-native-flash-message';
import {RootNavigator} from 'navigation';
import {hydrateAuth, setI18nConfig} from 'core';
import APIProvider from 'api/APIProvider';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import store, {persistor} from 'redux/store';
import {ActivityIndicator} from 'react-native';

setI18nConfig();
hydrateAuth();

const App = () => {
  console.log('test');
  return (
    <Provider store={store}>
      <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
        <APIProvider>
          <ThemeProvider>
            <RootNavigator />
            <FlashMessage position="top" />
          </ThemeProvider>
        </APIProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
