import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from 'App/Containers/HomeScreen';
import DetailScreen from 'App/Containers/DetailScreen';
import { ScreenMap } from 'App/Config/NavigationConfig';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={ScreenMap.Home} component={HomeScreen} />
      <Stack.Screen name={ScreenMap.Detail} component={DetailScreen} />
    </Stack.Navigator>
  );
};
export default MainStack;
