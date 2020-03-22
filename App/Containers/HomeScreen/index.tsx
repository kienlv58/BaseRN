import React, { ReactElement, useEffect } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { BaseScreenProps } from 'App/@types/screen-type';
import { ScreenMap } from 'App/Config/NavigationConfig';
import { useDispatch, useSelector } from 'react-redux';

import { Actions as HomeActions } from 'App/Redux/HomeRedux';
import { Actions as GlobalAction } from 'App/Redux/GlobalRedux';
import { selectHomeData } from 'App/Selector/HomeSelector';
import Screen from 'App/Components/Screen';
import styles from './styles';

const HomeScreen = (props: BaseScreenProps<ScreenMap.Home>): ReactElement => {
  const dispatch = useDispatch();
  const dataHome = useSelector(selectHomeData);
  //TODO

  useEffect(() => {
    dispatch(
      HomeActions.getHomeData(
        {},
        {
          onBeginning: () => {
            // show state loading
            dispatch(GlobalAction.setShowLoading({ isLoading: true }));
          },
          onSuccess: () => {
            // do something with data
          },
          onFailure: () => {
            //do something with data
          },
          onFinish: () => {
            // hide state loading
            setTimeout(() => {
              dispatch(GlobalAction.setShowLoading({ isLoading: false }));
            }, 2000);
          },
        },
      ),
    );
  }, [dispatch]);

  return (
    <Screen>
      <Text>this is home page</Text>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate(ScreenMap.Detail, { userName: 'Kienlv' });
        }}>
        <Text>go to detail</Text>
        {dataHome && <Text>{JSON.stringify(dataHome)}</Text>}
      </TouchableOpacity>
      <View style={styles.viewToScroll}>
        <Text>Scroll to end to test text input and keyboard avoiding</Text>
      </View>
      <Text>username:</Text>
      <TextInput placeholder={'type something'} />
    </Screen>
  );
};
export default HomeScreen;
