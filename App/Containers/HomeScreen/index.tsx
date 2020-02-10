import React, { ReactElement, useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { BaseScreenProps } from 'App/@types/screen-type';
import { ScreenMap } from 'App/Config/NavigationConfig';
import { useDispatch, useSelector } from 'react-redux';

import { Actions } from 'App/Redux/HomeRedux';
import { selectHomeData } from 'App/Selector/HomeSelector';

const HomeScreen = (props: BaseScreenProps): ReactElement => {
  const dispatch = useDispatch();
  const dataHome = useSelector(selectHomeData);
  //TODO

  useEffect(() => {
    dispatch(
      Actions.getHomeData(
        {},
        {
          onBeginning: () => {
            // show state loading
          },
          onSuccess: () => {
            // do something with data
          },
          onFailure: () => {
            //do something with data
          },
          onFinish: () => {
            // hide state loading
          },
        },
      ),
    );
  }, [dispatch]);

  return (
    <View>
      <Text>this is home page</Text>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate(ScreenMap.Detail);
        }}>
        <Text>go to detail</Text>
        {dataHome && <Text>{JSON.stringify(dataHome)}</Text>}
      </TouchableOpacity>
    </View>
  );
};
export default HomeScreen;
