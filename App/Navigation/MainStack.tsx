import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from 'App/Containers/HomeScreen';
import DetailScreen from 'App/Containers/DetailScreen';
import { ScreenMap, ScreenParams } from 'App/Config/NavigationConfig';
import ScreenConfig from 'App/Config/ScreenConfig';

const Stack = createStackNavigator<ScreenParams>();

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: ScreenConfig.headerColor,
        },
      }}>
      <Stack.Screen
        name={ScreenMap.Home}
        component={HomeScreen}
        options={
          {
            // headerShown: false,
          }
        }
      />
      <Stack.Screen name={ScreenMap.Detail} component={DetailScreen} initialParams={{ userName: '2' }} />
    </Stack.Navigator>
  );
};
export default MainStack;
