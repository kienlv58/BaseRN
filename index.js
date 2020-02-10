/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App/Containers/App';
import { name as appName } from './app.json';
import 'react-native-gesture-handler';

if (__DEV__) {
  import('./App/Lib/ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

AppRegistry.registerComponent(appName, () => App);
