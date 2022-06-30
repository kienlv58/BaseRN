import React from 'react';
import {API_URL} from '@env';
import {translate, useAuth} from 'core';
import {useTasks} from 'api';
import {ActivityIndicator, Button, Text, View} from 'react-native';
import Screen from 'components/Screen';
import {useSelector} from 'react-redux';
import {RootState} from 'redux/store';

export const Home = () => {
  const {signOut} = useAuth();
  const {data, isLoading} = useTasks();
  const isa = useSelector((state: RootState) => state.global.isLoading);
  console.log('isa', isa);
  return (
    <Screen preset="scroll">
      <View>
        <Text>{translate('name')}</Text>
        <Text>This is An ENV Var : {API_URL}</Text>
        {isLoading && <ActivityIndicator color="#000" />}

        <Text>Data from Api : {JSON.stringify(data)}</Text>
        <Button title="SignOut" onPress={signOut} />
        <Button title="Error" onPress={() => {}} />
      </View>
    </Screen>
  );
};
